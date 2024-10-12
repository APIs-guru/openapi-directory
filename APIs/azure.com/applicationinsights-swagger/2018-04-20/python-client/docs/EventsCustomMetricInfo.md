# EventsCustomMetricInfo

The custom metric info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the custom metric | [optional] 
**value** | **float** | The value of the custom metric | [optional] 
**value_count** | **int** | The count of the custom metric | [optional] 
**value_max** | **float** | The maximum value of the custom metric | [optional] 
**value_min** | **float** | The minimum value of the custom metric | [optional] 
**value_std_dev** | **float** | The standard deviation of the custom metric | [optional] 
**value_sum** | **float** | The sum of the custom metric | [optional] 

## Example

```python
from openapi_client.models.events_custom_metric_info import EventsCustomMetricInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EventsCustomMetricInfo from a JSON string
events_custom_metric_info_instance = EventsCustomMetricInfo.from_json(json)
# print the JSON string representation of the object
print(EventsCustomMetricInfo.to_json())

# convert the object into a dict
events_custom_metric_info_dict = events_custom_metric_info_instance.to_dict()
# create an instance of EventsCustomMetricInfo from a dict
events_custom_metric_info_from_dict = EventsCustomMetricInfo.from_dict(events_custom_metric_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


