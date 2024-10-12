# ReportLocationInsightsResponse

Response message for `Insights.ReportLocationInsights`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_driving_direction_metrics** | [**List[LocationDrivingDirectionMetrics]**](LocationDrivingDirectionMetrics.md) | A collection of values for driving direction-related metrics. | [optional] 
**location_metrics** | [**List[LocationMetrics]**](LocationMetrics.md) | A collection of metric values by location. | [optional] 

## Example

```python
from openapi_client.models.report_location_insights_response import ReportLocationInsightsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReportLocationInsightsResponse from a JSON string
report_location_insights_response_instance = ReportLocationInsightsResponse.from_json(json)
# print the JSON string representation of the object
print(ReportLocationInsightsResponse.to_json())

# convert the object into a dict
report_location_insights_response_dict = report_location_insights_response_instance.to_dict()
# create an instance of ReportLocationInsightsResponse from a dict
report_location_insights_response_from_dict = ReportLocationInsightsResponse.from_dict(report_location_insights_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


