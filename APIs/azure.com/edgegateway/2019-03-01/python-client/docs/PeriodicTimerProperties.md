# PeriodicTimerProperties

Periodic timer trigger properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_context_tag** | **str** | A custom context tag typically used to correlate the trigger against its usage. For example, if a periodic timer trigger is intended for certain specific IoT modules in the device, the tag can be the name or the image URL of the module. | [optional] 
**sink_info** | [**RoleSinkInfo**](RoleSinkInfo.md) |  | 
**source_info** | [**PeriodicTimerSourceInfo**](PeriodicTimerSourceInfo.md) |  | 

## Example

```python
from openapi_client.models.periodic_timer_properties import PeriodicTimerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PeriodicTimerProperties from a JSON string
periodic_timer_properties_instance = PeriodicTimerProperties.from_json(json)
# print the JSON string representation of the object
print(PeriodicTimerProperties.to_json())

# convert the object into a dict
periodic_timer_properties_dict = periodic_timer_properties_instance.to_dict()
# create an instance of PeriodicTimerProperties from a dict
periodic_timer_properties_from_dict = PeriodicTimerProperties.from_dict(periodic_timer_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


