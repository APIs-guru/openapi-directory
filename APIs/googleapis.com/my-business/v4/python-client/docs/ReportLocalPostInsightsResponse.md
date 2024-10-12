# ReportLocalPostInsightsResponse

Response message for Insights.ReportLocalPostInsights

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**local_post_metrics** | [**List[LocalPostMetrics]**](LocalPostMetrics.md) | One entry per requested post corresponding to this location. | [optional] 
**name** | **str** |  | [optional] 
**time_zone** | **str** | Time zone (IANA timezone IDs, eg, &#39;Europe/London&#39;) of the location. | [optional] 

## Example

```python
from openapi_client.models.report_local_post_insights_response import ReportLocalPostInsightsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReportLocalPostInsightsResponse from a JSON string
report_local_post_insights_response_instance = ReportLocalPostInsightsResponse.from_json(json)
# print the JSON string representation of the object
print(ReportLocalPostInsightsResponse.to_json())

# convert the object into a dict
report_local_post_insights_response_dict = report_local_post_insights_response_instance.to_dict()
# create an instance of ReportLocalPostInsightsResponse from a dict
report_local_post_insights_response_from_dict = ReportLocalPostInsightsResponse.from_dict(report_local_post_insights_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


