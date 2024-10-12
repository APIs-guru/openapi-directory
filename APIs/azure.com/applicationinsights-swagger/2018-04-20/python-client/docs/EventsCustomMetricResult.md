# EventsCustomMetricResult

A custom metric result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_metric** | [**EventsCustomMetricInfo**](EventsCustomMetricInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.events_custom_metric_result import EventsCustomMetricResult

# TODO update the JSON string below
json = "{}"
# create an instance of EventsCustomMetricResult from a JSON string
events_custom_metric_result_instance = EventsCustomMetricResult.from_json(json)
# print the JSON string representation of the object
print(EventsCustomMetricResult.to_json())

# convert the object into a dict
events_custom_metric_result_dict = events_custom_metric_result_instance.to_dict()
# create an instance of EventsCustomMetricResult from a dict
events_custom_metric_result_from_dict = EventsCustomMetricResult.from_dict(events_custom_metric_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


