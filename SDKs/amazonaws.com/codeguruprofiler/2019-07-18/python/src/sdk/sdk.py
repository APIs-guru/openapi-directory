
__doc__ = """ SDK Documentation: https://docs.aws.amazon.com/codeguru-profiler/ - Amazon Web Services documentation"""
import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://codeguru-profiler.{region}.amazonaws.com",
	"https://codeguru-profiler.{region}.amazonaws.com",
	"http://codeguru-profiler.{region}.amazonaws.com.cn",
	"https://codeguru-profiler.{region}.amazonaws.com.cn",
]


class SDK:
    r"""SDK Documentation: https://docs.aws.amazon.com/codeguru-profiler/ - Amazon Web Services documentation"""

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def add_notification_channels(self, request: operations.AddNotificationChannelsRequest) -> operations.AddNotificationChannelsResponse:
        r"""Add up to 2 anomaly notifications channels for a profiling group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/profilingGroups/{profilingGroupName}/notificationConfiguration", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddNotificationChannelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AddNotificationChannelsResponse])
                res.add_notification_channels_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.service_quota_exceeded_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conflict_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.validation_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.throttling_exception = out
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def batch_get_frame_metric_data(self, request: operations.BatchGetFrameMetricDataRequest) -> operations.BatchGetFrameMetricDataResponse:
        r""" Returns the time series of values for a requested list of frame metrics from a time period.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/profilingGroups/{profilingGroupName}/frames/-/metrics", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BatchGetFrameMetricDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchGetFrameMetricDataResponse])
                res.batch_get_frame_metric_data_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.validation_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.throttling_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def configure_agent(self, request: operations.ConfigureAgentRequest) -> operations.ConfigureAgentResponse:
        r""" Used by profiler agents to report their current state and to receive remote configuration updates. For example, <code>ConfigureAgent</code> can be used to tell an agent whether to profile or not and for how long to return profiling data. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/profilingGroups/{profilingGroupName}/configureAgent", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfigureAgentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigureAgentResponse])
                res.configure_agent_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.validation_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.throttling_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def create_profiling_group(self, request: operations.CreateProfilingGroupRequest) -> operations.CreateProfilingGroupResponse:
        r"""Creates a profiling group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/profilingGroups#clientToken"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateProfilingGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateProfilingGroupResponse])
                res.create_profiling_group_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.service_quota_exceeded_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conflict_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.validation_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.throttling_exception = out

        return res

    
    def delete_profiling_group(self, request: operations.DeleteProfilingGroupRequest) -> operations.DeleteProfilingGroupResponse:
        r"""Deletes a profiling group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/profilingGroups/{profilingGroupName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProfilingGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_profiling_group_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conflict_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.validation_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.throttling_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def describe_profiling_group(self, request: operations.DescribeProfilingGroupRequest) -> operations.DescribeProfilingGroupResponse:
        r""" Returns a <a href=\"https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html\"> <code>ProfilingGroupDescription</code> </a> object that contains information about the requested profiling group. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/profilingGroups/{profilingGroupName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeProfilingGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeProfilingGroupResponse])
                res.describe_profiling_group_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.validation_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.throttling_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def get_findings_report_account_summary(self, request: operations.GetFindingsReportAccountSummaryRequest) -> operations.GetFindingsReportAccountSummaryResponse:
        r""" Returns a list of <a href=\"https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_FindingsReportSummary.html\"> <code>FindingsReportSummary</code> </a> objects that contain analysis results for all profiling groups in your AWS account. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/internal/findingsReports"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFindingsReportAccountSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetFindingsReportAccountSummaryResponse])
                res.get_findings_report_account_summary_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.validation_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.throttling_exception = out

        return res

    
    def get_notification_configuration(self, request: operations.GetNotificationConfigurationRequest) -> operations.GetNotificationConfigurationResponse:
        r"""Get the current configuration for anomaly notifications for a profiling group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/profilingGroups/{profilingGroupName}/notificationConfiguration", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNotificationConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetNotificationConfigurationResponse])
                res.get_notification_configuration_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.validation_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.throttling_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def get_policy(self, request: operations.GetPolicyRequest) -> operations.GetPolicyResponse:
        r""" Returns the JSON-formatted resource-based policy on a profiling group. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/profilingGroups/{profilingGroupName}/policy", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetPolicyResponse])
                res.get_policy_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.throttling_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def get_profile(self, request: operations.GetProfileRequest) -> operations.GetProfileResponse:
        r"""<p> Gets the aggregated profile of a profiling group for a specified time range. Amazon CodeGuru Profiler collects posted agent profiles for a profiling group into aggregated profiles. </p> <pre><code> &lt;note&gt; &lt;p&gt; Because aggregated profiles expire over time &lt;code&gt;GetProfile&lt;/code&gt; is not idempotent. &lt;/p&gt; &lt;/note&gt; &lt;p&gt; Specify the time range for the requested aggregated profile using 1 or 2 of the following parameters: &lt;code&gt;startTime&lt;/code&gt;, &lt;code&gt;endTime&lt;/code&gt;, &lt;code&gt;period&lt;/code&gt;. The maximum time range allowed is 7 days. If you specify all 3 parameters, an exception is thrown. If you specify only &lt;code&gt;period&lt;/code&gt;, the latest aggregated profile is returned. &lt;/p&gt; &lt;p&gt; Aggregated profiles are available with aggregation periods of 5 minutes, 1 hour, and 1 day, aligned to UTC. The aggregation period of an aggregated profile determines how long it is retained. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AggregatedProfileTime.html&quot;&gt; &lt;code&gt;AggregatedProfileTime&lt;/code&gt; &lt;/a&gt;. The aggregated profile's aggregation period determines how long it is retained by CodeGuru Profiler. &lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 5 minutes, the aggregated profile is retained for 15 days. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 1 hour, the aggregated profile is retained for 60 days. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 1 day, the aggregated profile is retained for 3 years. &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;p&gt;There are two use cases for calling &lt;code&gt;GetProfile&lt;/code&gt;.&lt;/p&gt; &lt;ol&gt; &lt;li&gt; &lt;p&gt; If you want to return an aggregated profile that already exists, use &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html&quot;&gt; &lt;code&gt;ListProfileTimes&lt;/code&gt; &lt;/a&gt; to view the time ranges of existing aggregated profiles. Use them in a &lt;code&gt;GetProfile&lt;/code&gt; request to return a specific, existing aggregated profile. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If you want to return an aggregated profile for a time range that doesn't align with an existing aggregated profile, then CodeGuru Profiler makes a best effort to combine existing aggregated profiles from the requested time range and return them as one aggregated profile. &lt;/p&gt; &lt;p&gt; If aggregated profiles do not exist for the full time range requested, then aggregated profiles for a smaller time range are returned. For example, if the requested time range is from 00:00 to 00:20, and the existing aggregated profiles are from 00:15 and 00:25, then the aggregated profiles from 00:15 to 00:20 are returned. &lt;/p&gt; &lt;/li&gt; &lt;/ol&gt; </code></pre>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/profilingGroups/{profilingGroupName}/profile", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetProfileResponse])
                res.get_profile_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.validation_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.throttling_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def get_recommendations(self, request: operations.GetRecommendationsRequest) -> operations.GetRecommendationsResponse:
        r""" Returns a list of <a href=\"https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Recommendation.html\"> <code>Recommendation</code> </a> objects that contain recommendations for a profiling group for a given time period. A list of <a href=\"https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Anomaly.html\"> <code>Anomaly</code> </a> objects that contains details about anomalies detected in the profiling group for the same time period is also returned. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/internal/profilingGroups/{profilingGroupName}/recommendations#endTime&startTime", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRecommendationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetRecommendationsResponse])
                res.get_recommendations_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.validation_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.throttling_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def list_findings_reports(self, request: operations.ListFindingsReportsRequest) -> operations.ListFindingsReportsResponse:
        r"""List the available reports for a given profiling group and time range.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/internal/profilingGroups/{profilingGroupName}/findingsReports#endTime&startTime", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListFindingsReportsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFindingsReportsResponse])
                res.list_findings_reports_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.validation_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.throttling_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def list_profile_times(self, request: operations.ListProfileTimesRequest) -> operations.ListProfileTimesResponse:
        r"""Lists the start times of the available aggregated profiles of a profiling group for an aggregation period within the specified time range.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/profilingGroups/{profilingGroupName}/profileTimes#endTime&period&startTime", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListProfileTimesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListProfileTimesResponse])
                res.list_profile_times_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.validation_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.throttling_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def list_profiling_groups(self, request: operations.ListProfilingGroupsRequest) -> operations.ListProfilingGroupsResponse:
        r""" Returns a list of profiling groups. The profiling groups are returned as <a href=\"https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html\"> <code>ProfilingGroupDescription</code> </a> objects. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/profilingGroups"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListProfilingGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListProfilingGroupsResponse])
                res.list_profiling_groups_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.throttling_exception = out

        return res

    
    def list_tags_for_resource(self, request: operations.ListTagsForResourceRequest) -> operations.ListTagsForResourceResponse:
        r""" Returns a list of the tags that are assigned to a specified resource. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{resourceArn}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTagsForResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTagsForResourceResponse])
                res.list_tags_for_resource_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.validation_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def post_agent_profile(self, request: operations.PostAgentProfileRequest) -> operations.PostAgentProfileResponse:
        r""" Submits profiling data to an aggregated profile of a profiling group. To get an aggregated profile that is created with this profiling data, use <a href=\"https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetProfile.html\"> <code>GetProfile</code> </a>. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/profilingGroups/{profilingGroupName}/agentProfile#Content-Type", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAgentProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.post_agent_profile_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.validation_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.throttling_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def put_permission(self, request: operations.PutPermissionRequest) -> operations.PutPermissionResponse:
        r"""<p> Adds permissions to a profiling group's resource-based policy that are provided using an action group. If a profiling group doesn't have a resource-based policy, one is created for it using the permissions in the action group and the roles and users in the <code>principals</code> parameter. </p> <pre><code> &lt;p&gt; The one supported action group that can be added is &lt;code&gt;agentPermission&lt;/code&gt; which grants &lt;code&gt;ConfigureAgent&lt;/code&gt; and &lt;code&gt;PostAgent&lt;/code&gt; permissions. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html&quot;&gt;Resource-based policies in CodeGuru Profiler&lt;/a&gt; in the &lt;i&gt;Amazon CodeGuru Profiler User Guide&lt;/i&gt;, &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html&quot;&gt; &lt;code&gt;ConfigureAgent&lt;/code&gt; &lt;/a&gt;, and &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html&quot;&gt; &lt;code&gt;PostAgentProfile&lt;/code&gt; &lt;/a&gt;. &lt;/p&gt; &lt;p&gt; The first time you call &lt;code&gt;PutPermission&lt;/code&gt; on a profiling group, do not specify a &lt;code&gt;revisionId&lt;/code&gt; because it doesn't have a resource-based policy. Subsequent calls must provide a &lt;code&gt;revisionId&lt;/code&gt; to specify which revision of the resource-based policy to add the permissions to. &lt;/p&gt; &lt;p&gt; The response contains the profiling group's JSON-formatted resource policy. &lt;/p&gt; </code></pre>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/profilingGroups/{profilingGroupName}/policy/{actionGroup}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PutPermissionResponse])
                res.put_permission_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conflict_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.validation_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.throttling_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def remove_notification_channel(self, request: operations.RemoveNotificationChannelRequest) -> operations.RemoveNotificationChannelResponse:
        r"""Remove one anomaly notifications channel for a profiling group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/profilingGroups/{profilingGroupName}/notificationConfiguration/{channelId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveNotificationChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RemoveNotificationChannelResponse])
                res.remove_notification_channel_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.validation_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.throttling_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def remove_permission(self, request: operations.RemovePermissionRequest) -> operations.RemovePermissionResponse:
        r""" Removes permissions from a profiling group's resource-based policy that are provided using an action group. The one supported action group that can be removed is <code>agentPermission</code> which grants <code>ConfigureAgent</code> and <code>PostAgent</code> permissions. For more information, see <a href=\"https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html\">Resource-based policies in CodeGuru Profiler</a> in the <i>Amazon CodeGuru Profiler User Guide</i>, <a href=\"https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html\"> <code>ConfigureAgent</code> </a>, and <a href=\"https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html\"> <code>PostAgentProfile</code> </a>. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/profilingGroups/{profilingGroupName}/policy/{actionGroup}#revisionId", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemovePermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RemovePermissionResponse])
                res.remove_permission_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conflict_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.validation_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.throttling_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def submit_feedback(self, request: operations.SubmitFeedbackRequest) -> operations.SubmitFeedbackResponse:
        r"""Sends feedback to CodeGuru Profiler about whether the anomaly detected by the analysis is useful or not.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/internal/profilingGroups/{profilingGroupName}/anomalies/{anomalyInstanceId}/feedback", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SubmitFeedbackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.submit_feedback_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.validation_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.throttling_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def tag_resource(self, request: operations.TagResourceRequest) -> operations.TagResourceResponse:
        r""" Use to assign one or more tags to a resource. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{resourceArn}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.tag_resource_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.validation_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def untag_resource(self, request: operations.UntagResourceRequest) -> operations.UntagResourceResponse:
        r""" Use to remove one or more tags from a resource. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{resourceArn}#tagKeys", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UntagResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.untag_resource_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.validation_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def update_profiling_group(self, request: operations.UpdateProfilingGroupRequest) -> operations.UpdateProfilingGroupResponse:
        r"""Updates a profiling group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/profilingGroups/{profilingGroupName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateProfilingGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateProfilingGroupResponse])
                res.update_profiling_group_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_server_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.conflict_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.validation_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.throttling_exception = out
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    