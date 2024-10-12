# HostingEnvironmentDiagnostics

Diagnostics for an App Service Environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**diagnosics_output** | **str** | Diagnostics output. | [optional] 
**name** | **str** | Name/identifier of the diagnostics. | [optional] 

## Example

```python
from openapi_client.models.hosting_environment_diagnostics import HostingEnvironmentDiagnostics

# TODO update the JSON string below
json = "{}"
# create an instance of HostingEnvironmentDiagnostics from a JSON string
hosting_environment_diagnostics_instance = HostingEnvironmentDiagnostics.from_json(json)
# print the JSON string representation of the object
print(HostingEnvironmentDiagnostics.to_json())

# convert the object into a dict
hosting_environment_diagnostics_dict = hosting_environment_diagnostics_instance.to_dict()
# create an instance of HostingEnvironmentDiagnostics from a dict
hosting_environment_diagnostics_from_dict = HostingEnvironmentDiagnostics.from_dict(hosting_environment_diagnostics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


