# HardwareProfile

The hardware profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vm_size** | **str** | The size of the VM | [optional] 

## Example

```python
from openapi_client.models.hardware_profile import HardwareProfile

# TODO update the JSON string below
json = "{}"
# create an instance of HardwareProfile from a JSON string
hardware_profile_instance = HardwareProfile.from_json(json)
# print the JSON string representation of the object
print(HardwareProfile.to_json())

# convert the object into a dict
hardware_profile_dict = hardware_profile_instance.to_dict()
# create an instance of HardwareProfile from a dict
hardware_profile_from_dict = HardwareProfile.from_dict(hardware_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


