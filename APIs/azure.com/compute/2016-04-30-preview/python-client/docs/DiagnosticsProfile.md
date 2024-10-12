# DiagnosticsProfile

Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boot_diagnostics** | [**BootDiagnostics**](BootDiagnostics.md) |  | [optional] 

## Example

```python
from openapi_client.models.diagnostics_profile import DiagnosticsProfile

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticsProfile from a JSON string
diagnostics_profile_instance = DiagnosticsProfile.from_json(json)
# print the JSON string representation of the object
print(DiagnosticsProfile.to_json())

# convert the object into a dict
diagnostics_profile_dict = diagnostics_profile_instance.to_dict()
# create an instance of DiagnosticsProfile from a dict
diagnostics_profile_from_dict = DiagnosticsProfile.from_dict(diagnostics_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


