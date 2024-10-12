# DeviceId

Identifier of a device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_brand** | **str** | Value of Build.BRAND. | [optional] 
**build_device** | **str** | Value of Build.DEVICE. | [optional] 

## Example

```python
from openapi_client.models.device_id import DeviceId

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceId from a JSON string
device_id_instance = DeviceId.from_json(json)
# print the JSON string representation of the object
print(DeviceId.to_json())

# convert the object into a dict
device_id_dict = device_id_instance.to_dict()
# create an instance of DeviceId from a dict
device_id_from_dict = DeviceId.from_dict(device_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


