import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://codeguru-profiler.{region}.amazonaws.com", "https://codeguru-profiler.{region}.amazonaws.com", "http://codeguru-profiler.{region}.amazonaws.com.cn", "https://codeguru-profiler.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * addNotificationChannels - Add up to 2 anomaly notifications channels for a profiling group.
    **/
    addNotificationChannels(req: operations.AddNotificationChannelsRequest, config?: AxiosRequestConfig): Promise<operations.AddNotificationChannelsResponse>;
    /**
     * batchGetFrameMetricData -  Returns the time series of values for a requested list of frame metrics from a time period.
    **/
    batchGetFrameMetricData(req: operations.BatchGetFrameMetricDataRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetFrameMetricDataResponse>;
    /**
     * configureAgent -  Used by profiler agents to report their current state and to receive remote configuration updates. For example, <code>ConfigureAgent</code> can be used to tell an agent whether to profile or not and for how long to return profiling data.
    **/
    configureAgent(req: operations.ConfigureAgentRequest, config?: AxiosRequestConfig): Promise<operations.ConfigureAgentResponse>;
    /**
     * createProfilingGroup - Creates a profiling group.
    **/
    createProfilingGroup(req: operations.CreateProfilingGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateProfilingGroupResponse>;
    /**
     * deleteProfilingGroup - Deletes a profiling group.
    **/
    deleteProfilingGroup(req: operations.DeleteProfilingGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProfilingGroupResponse>;
    /**
     * describeProfilingGroup -  Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> object that contains information about the requested profiling group.
    **/
    describeProfilingGroup(req: operations.DescribeProfilingGroupRequest, config?: AxiosRequestConfig): Promise<operations.DescribeProfilingGroupResponse>;
    /**
     * getFindingsReportAccountSummary -  Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_FindingsReportSummary.html"> <code>FindingsReportSummary</code> </a> objects that contain analysis results for all profiling groups in your AWS account.
    **/
    getFindingsReportAccountSummary(req: operations.GetFindingsReportAccountSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetFindingsReportAccountSummaryResponse>;
    /**
     * getNotificationConfiguration - Get the current configuration for anomaly notifications for a profiling group.
    **/
    getNotificationConfiguration(req: operations.GetNotificationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetNotificationConfigurationResponse>;
    /**
     * getPolicy -  Returns the JSON-formatted resource-based policy on a profiling group.
    **/
    getPolicy(req: operations.GetPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetPolicyResponse>;
    /**
     * getProfile - <p> Gets the aggregated profile of a profiling group for a specified time range. Amazon CodeGuru Profiler collects posted agent profiles for a profiling group into aggregated profiles. </p> <pre><code> &lt;note&gt; &lt;p&gt; Because aggregated profiles expire over time &lt;code&gt;GetProfile&lt;/code&gt; is not idempotent. &lt;/p&gt; &lt;/note&gt; &lt;p&gt; Specify the time range for the requested aggregated profile using 1 or 2 of the following parameters: &lt;code&gt;startTime&lt;/code&gt;, &lt;code&gt;endTime&lt;/code&gt;, &lt;code&gt;period&lt;/code&gt;. The maximum time range allowed is 7 days. If you specify all 3 parameters, an exception is thrown. If you specify only &lt;code&gt;period&lt;/code&gt;, the latest aggregated profile is returned. &lt;/p&gt; &lt;p&gt; Aggregated profiles are available with aggregation periods of 5 minutes, 1 hour, and 1 day, aligned to UTC. The aggregation period of an aggregated profile determines how long it is retained. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AggregatedProfileTime.html&quot;&gt; &lt;code&gt;AggregatedProfileTime&lt;/code&gt; &lt;/a&gt;. The aggregated profile's aggregation period determines how long it is retained by CodeGuru Profiler. &lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 5 minutes, the aggregated profile is retained for 15 days. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 1 hour, the aggregated profile is retained for 60 days. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 1 day, the aggregated profile is retained for 3 years. &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;p&gt;There are two use cases for calling &lt;code&gt;GetProfile&lt;/code&gt;.&lt;/p&gt; &lt;ol&gt; &lt;li&gt; &lt;p&gt; If you want to return an aggregated profile that already exists, use &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html&quot;&gt; &lt;code&gt;ListProfileTimes&lt;/code&gt; &lt;/a&gt; to view the time ranges of existing aggregated profiles. Use them in a &lt;code&gt;GetProfile&lt;/code&gt; request to return a specific, existing aggregated profile. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If you want to return an aggregated profile for a time range that doesn't align with an existing aggregated profile, then CodeGuru Profiler makes a best effort to combine existing aggregated profiles from the requested time range and return them as one aggregated profile. &lt;/p&gt; &lt;p&gt; If aggregated profiles do not exist for the full time range requested, then aggregated profiles for a smaller time range are returned. For example, if the requested time range is from 00:00 to 00:20, and the existing aggregated profiles are from 00:15 and 00:25, then the aggregated profiles from 00:15 to 00:20 are returned. &lt;/p&gt; &lt;/li&gt; &lt;/ol&gt; </code></pre>
    **/
    getProfile(req: operations.GetProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileResponse>;
    /**
     * getRecommendations -  Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Recommendation.html"> <code>Recommendation</code> </a> objects that contain recommendations for a profiling group for a given time period. A list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Anomaly.html"> <code>Anomaly</code> </a> objects that contains details about anomalies detected in the profiling group for the same time period is also returned.
    **/
    getRecommendations(req: operations.GetRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.GetRecommendationsResponse>;
    /**
     * listFindingsReports - List the available reports for a given profiling group and time range.
    **/
    listFindingsReports(req: operations.ListFindingsReportsRequest, config?: AxiosRequestConfig): Promise<operations.ListFindingsReportsResponse>;
    /**
     * listProfileTimes - Lists the start times of the available aggregated profiles of a profiling group for an aggregation period within the specified time range.
    **/
    listProfileTimes(req: operations.ListProfileTimesRequest, config?: AxiosRequestConfig): Promise<operations.ListProfileTimesResponse>;
    /**
     * listProfilingGroups -  Returns a list of profiling groups. The profiling groups are returned as <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> objects.
    **/
    listProfilingGroups(req: operations.ListProfilingGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListProfilingGroupsResponse>;
    /**
     * listTagsForResource -  Returns a list of the tags that are assigned to a specified resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * postAgentProfile -  Submits profiling data to an aggregated profile of a profiling group. To get an aggregated profile that is created with this profiling data, use <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetProfile.html"> <code>GetProfile</code> </a>.
    **/
    postAgentProfile(req: operations.PostAgentProfileRequest, config?: AxiosRequestConfig): Promise<operations.PostAgentProfileResponse>;
    /**
     * putPermission - <p> Adds permissions to a profiling group's resource-based policy that are provided using an action group. If a profiling group doesn't have a resource-based policy, one is created for it using the permissions in the action group and the roles and users in the <code>principals</code> parameter. </p> <pre><code> &lt;p&gt; The one supported action group that can be added is &lt;code&gt;agentPermission&lt;/code&gt; which grants &lt;code&gt;ConfigureAgent&lt;/code&gt; and &lt;code&gt;PostAgent&lt;/code&gt; permissions. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html&quot;&gt;Resource-based policies in CodeGuru Profiler&lt;/a&gt; in the &lt;i&gt;Amazon CodeGuru Profiler User Guide&lt;/i&gt;, &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html&quot;&gt; &lt;code&gt;ConfigureAgent&lt;/code&gt; &lt;/a&gt;, and &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html&quot;&gt; &lt;code&gt;PostAgentProfile&lt;/code&gt; &lt;/a&gt;. &lt;/p&gt; &lt;p&gt; The first time you call &lt;code&gt;PutPermission&lt;/code&gt; on a profiling group, do not specify a &lt;code&gt;revisionId&lt;/code&gt; because it doesn't have a resource-based policy. Subsequent calls must provide a &lt;code&gt;revisionId&lt;/code&gt; to specify which revision of the resource-based policy to add the permissions to. &lt;/p&gt; &lt;p&gt; The response contains the profiling group's JSON-formatted resource policy. &lt;/p&gt; </code></pre>
    **/
    putPermission(req: operations.PutPermissionRequest, config?: AxiosRequestConfig): Promise<operations.PutPermissionResponse>;
    /**
     * removeNotificationChannel - Remove one anomaly notifications channel for a profiling group.
    **/
    removeNotificationChannel(req: operations.RemoveNotificationChannelRequest, config?: AxiosRequestConfig): Promise<operations.RemoveNotificationChannelResponse>;
    /**
     * removePermission -  Removes permissions from a profiling group's resource-based policy that are provided using an action group. The one supported action group that can be removed is <code>agentPermission</code> which grants <code>ConfigureAgent</code> and <code>PostAgent</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html">Resource-based policies in CodeGuru Profiler</a> in the <i>Amazon CodeGuru Profiler User Guide</i>, <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html"> <code>PostAgentProfile</code> </a>.
    **/
    removePermission(req: operations.RemovePermissionRequest, config?: AxiosRequestConfig): Promise<operations.RemovePermissionResponse>;
    /**
     * submitFeedback - Sends feedback to CodeGuru Profiler about whether the anomaly detected by the analysis is useful or not.
    **/
    submitFeedback(req: operations.SubmitFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.SubmitFeedbackResponse>;
    /**
     * tagResource -  Use to assign one or more tags to a resource.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource -  Use to remove one or more tags from a resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateProfilingGroup - Updates a profiling group.
    **/
    updateProfilingGroup(req: operations.UpdateProfilingGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProfilingGroupResponse>;
}
export {};
