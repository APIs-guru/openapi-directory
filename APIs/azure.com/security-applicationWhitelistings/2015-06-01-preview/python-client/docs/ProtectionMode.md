# ProtectionMode

The protection mode of the collection/file types. Exe/Msi/Script are used for Windows, Executable is used for Linux.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exe** | [**EnforcementMode**](EnforcementMode.md) |  | [optional] 
**executable** | [**EnforcementMode**](EnforcementMode.md) |  | [optional] 
**msi** | [**EnforcementMode**](EnforcementMode.md) |  | [optional] 
**script** | [**EnforcementMode**](EnforcementMode.md) |  | [optional] 

## Example

```python
from openapi_client.models.protection_mode import ProtectionMode

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectionMode from a JSON string
protection_mode_instance = ProtectionMode.from_json(json)
# print the JSON string representation of the object
print(ProtectionMode.to_json())

# convert the object into a dict
protection_mode_dict = protection_mode_instance.to_dict()
# create an instance of ProtectionMode from a dict
protection_mode_from_dict = ProtectionMode.from_dict(protection_mode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


