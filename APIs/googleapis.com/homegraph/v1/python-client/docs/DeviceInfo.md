# DeviceInfo

Device information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hw_version** | **str** | Device hardware version. | [optional] 
**manufacturer** | **str** | Device manufacturer. | [optional] 
**model** | **str** | Device model. | [optional] 
**sw_version** | **str** | Device software version. | [optional] 

## Example

```python
from openapi_client.models.device_info import DeviceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceInfo from a JSON string
device_info_instance = DeviceInfo.from_json(json)
# print the JSON string representation of the object
print(DeviceInfo.to_json())

# convert the object into a dict
device_info_dict = device_info_instance.to_dict()
# create an instance of DeviceInfo from a dict
device_info_from_dict = DeviceInfo.from_dict(device_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


