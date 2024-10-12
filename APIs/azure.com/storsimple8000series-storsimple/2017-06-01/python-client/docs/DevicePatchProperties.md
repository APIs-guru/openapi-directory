# DevicePatchProperties

The properties of the device patch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_description** | **str** | Short description given for the device | [optional] 

## Example

```python
from openapi_client.models.device_patch_properties import DevicePatchProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DevicePatchProperties from a JSON string
device_patch_properties_instance = DevicePatchProperties.from_json(json)
# print the JSON string representation of the object
print(DevicePatchProperties.to_json())

# convert the object into a dict
device_patch_properties_dict = device_patch_properties_instance.to_dict()
# create an instance of DevicePatchProperties from a dict
device_patch_properties_from_dict = DevicePatchProperties.from_dict(device_patch_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


