# EventCountPerDevice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avg_count_per_device** | **float** |  | [optional] 
**count_per_device** | [**List[AnalyticsEventPerDeviceCount200ResponseCountPerDeviceInner]**](AnalyticsEventPerDeviceCount200ResponseCountPerDeviceInner.md) |  | [optional] 
**previous_avg_count_per_device** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.event_count_per_device import EventCountPerDevice

# TODO update the JSON string below
json = "{}"
# create an instance of EventCountPerDevice from a JSON string
event_count_per_device_instance = EventCountPerDevice.from_json(json)
# print the JSON string representation of the object
print(EventCountPerDevice.to_json())

# convert the object into a dict
event_count_per_device_dict = event_count_per_device_instance.to_dict()
# create an instance of EventCountPerDevice from a dict
event_count_per_device_from_dict = EventCountPerDevice.from_dict(event_count_per_device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


