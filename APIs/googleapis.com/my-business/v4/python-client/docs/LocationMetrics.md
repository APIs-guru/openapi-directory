# LocationMetrics

A series of Metrics and BreakdownMetrics associated with a Location over some time range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_name** | **str** | The location resource name these values belong to. | [optional] 
**metric_values** | [**List[MetricValue]**](MetricValue.md) | A list of values for the requested metrics. | [optional] 
**time_zone** | **str** | IANA timezone for the location. | [optional] 

## Example

```python
from openapi_client.models.location_metrics import LocationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of LocationMetrics from a JSON string
location_metrics_instance = LocationMetrics.from_json(json)
# print the JSON string representation of the object
print(LocationMetrics.to_json())

# convert the object into a dict
location_metrics_dict = location_metrics_instance.to_dict()
# create an instance of LocationMetrics from a dict
location_metrics_from_dict = LocationMetrics.from_dict(location_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


