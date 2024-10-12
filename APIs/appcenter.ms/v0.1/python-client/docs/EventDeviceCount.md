# EventDeviceCount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices_count** | [**List[AnalyticsDeviceCounts200ResponseDailyInner]**](AnalyticsDeviceCounts200ResponseDailyInner.md) |  | [optional] 
**previous_total_devices_with_event** | **int** |  | [optional] 
**total_devices** | **int** |  | [optional] 
**total_devices_with_event** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.event_device_count import EventDeviceCount

# TODO update the JSON string below
json = "{}"
# create an instance of EventDeviceCount from a JSON string
event_device_count_instance = EventDeviceCount.from_json(json)
# print the JSON string representation of the object
print(EventDeviceCount.to_json())

# convert the object into a dict
event_device_count_dict = event_device_count_instance.to_dict()
# create an instance of EventDeviceCount from a dict
event_device_count_from_dict = EventDeviceCount.from_dict(event_device_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


