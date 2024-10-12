# ReportLocationInsightsRequest

Request message for Insights.ReportLocationInsights.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basic_request** | [**BasicMetricsRequest**](BasicMetricsRequest.md) |  | [optional] 
**driving_directions_request** | [**DrivingDirectionMetricsRequest**](DrivingDirectionMetricsRequest.md) |  | [optional] 
**location_names** | **List[str]** | A collection of locations to fetch insights for, specified by their names. | [optional] 

## Example

```python
from openapi_client.models.report_location_insights_request import ReportLocationInsightsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReportLocationInsightsRequest from a JSON string
report_location_insights_request_instance = ReportLocationInsightsRequest.from_json(json)
# print the JSON string representation of the object
print(ReportLocationInsightsRequest.to_json())

# convert the object into a dict
report_location_insights_request_dict = report_location_insights_request_instance.to_dict()
# create an instance of ReportLocationInsightsRequest from a dict
report_location_insights_request_from_dict = ReportLocationInsightsRequest.from_dict(report_location_insights_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


