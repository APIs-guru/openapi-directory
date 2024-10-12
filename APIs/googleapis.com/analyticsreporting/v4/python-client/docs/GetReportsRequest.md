# GetReportsRequest

The batch request containing multiple report request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report_requests** | [**List[ReportRequest]**](ReportRequest.md) | Requests, each request will have a separate response. There can be a maximum of 5 requests. All requests should have the same &#x60;dateRanges&#x60;, &#x60;viewId&#x60;, &#x60;segments&#x60;, &#x60;samplingLevel&#x60;, and &#x60;cohortGroup&#x60;. | [optional] 
**use_resource_quotas** | **bool** | Enables [resource based quotas](/analytics/devguides/reporting/core/v4/limits-quotas#analytics_reporting_api_v4), (defaults to &#x60;False&#x60;). If this field is set to &#x60;True&#x60; the per view (profile) quotas are governed by the computational cost of the request. Note that using cost based quotas will higher enable sampling rates. (10 Million for &#x60;SMALL&#x60;, 100M for &#x60;LARGE&#x60;. See the [limits and quotas documentation](/analytics/devguides/reporting/core/v4/limits-quotas#analytics_reporting_api_v4) for details. | [optional] 

## Example

```python
from openapi_client.models.get_reports_request import GetReportsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetReportsRequest from a JSON string
get_reports_request_instance = GetReportsRequest.from_json(json)
# print the JSON string representation of the object
print(GetReportsRequest.to_json())

# convert the object into a dict
get_reports_request_dict = get_reports_request_instance.to_dict()
# create an instance of GetReportsRequest from a dict
get_reports_request_from_dict = GetReportsRequest.from_dict(get_reports_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


