# HourlyMetrics

Metrics for an hour.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hour** | **int** | Hour of the day. Allowed values are 0-23. | [optional] 
**missed_calls_count** | **int** | Total count of missed calls for this hour. | [optional] 

## Example

```python
from openapi_client.models.hourly_metrics import HourlyMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of HourlyMetrics from a JSON string
hourly_metrics_instance = HourlyMetrics.from_json(json)
# print the JSON string representation of the object
print(HourlyMetrics.to_json())

# convert the object into a dict
hourly_metrics_dict = hourly_metrics_instance.to_dict()
# create an instance of HourlyMetrics from a dict
hourly_metrics_from_dict = HourlyMetrics.from_dict(hourly_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


