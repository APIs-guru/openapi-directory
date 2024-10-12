# ReportLocalPostInsightsRequest

Request message for Insights.ReportLocalPostInsights

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basic_request** | [**BasicMetricsRequest**](BasicMetricsRequest.md) |  | [optional] 
**local_post_names** | **List[str]** | Required. The list of posts for which to fetch insights data. All posts have to belong to the location whose name is specified in the &#x60;name&#x60; field. | [optional] 

## Example

```python
from openapi_client.models.report_local_post_insights_request import ReportLocalPostInsightsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReportLocalPostInsightsRequest from a JSON string
report_local_post_insights_request_instance = ReportLocalPostInsightsRequest.from_json(json)
# print the JSON string representation of the object
print(ReportLocalPostInsightsRequest.to_json())

# convert the object into a dict
report_local_post_insights_request_dict = report_local_post_insights_request_instance.to_dict()
# create an instance of ReportLocalPostInsightsRequest from a dict
report_local_post_insights_request_from_dict = ReportLocalPostInsightsRequest.from_dict(report_local_post_insights_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


