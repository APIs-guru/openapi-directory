# Device


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_version** | **str** |  | [optional] 
**device_id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**os_version** | **str** |  | [optional] 
**ringtone** | **str** |  | [optional] 
**ringtone_disabled** | **bool** |  | [optional] 
**type** | [**DeviceType**](DeviceType.md) |  | [optional] 

## Example

```python
from openapi_client.models.device import Device

# TODO update the JSON string below
json = "{}"
# create an instance of Device from a JSON string
device_instance = Device.from_json(json)
# print the JSON string representation of the object
print(Device.to_json())

# convert the object into a dict
device_dict = device_instance.to_dict()
# create an instance of Device from a dict
device_from_dict = Device.from_dict(device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


