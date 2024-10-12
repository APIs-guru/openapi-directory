# DeviceSet

The name and devices of the device set

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_configurations** | [**List[DeviceSetDeviceConfigurationsInner]**](DeviceSetDeviceConfigurationsInner.md) |  | 
**id** | **str** | Identifier of the device set | 
**manufacturer_count** | **float** | The number of manufacturers in the device set&#39;s device selection | [optional] 
**name** | **str** | Name of the device set | 
**os_version_count** | **float** | The number of os versions in the device set&#39;s device selection | [optional] 
**owner** | [**DeviceSetOwner**](DeviceSetOwner.md) |  | 
**slug** | **str** | Slug of the device set | [optional] 

## Example

```python
from openapi_client.models.device_set import DeviceSet

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceSet from a JSON string
device_set_instance = DeviceSet.from_json(json)
# print the JSON string representation of the object
print(DeviceSet.to_json())

# convert the object into a dict
device_set_dict = device_set_instance.to_dict()
# create an instance of DeviceSet from a dict
device_set_from_dict = DeviceSet.from_dict(device_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


