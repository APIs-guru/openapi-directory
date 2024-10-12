# ContainerServiceDiagnosticsProfile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vm_diagnostics** | [**ContainerServiceVMDiagnostics**](ContainerServiceVMDiagnostics.md) |  | [optional] 

## Example

```python
from openapi_client.models.container_service_diagnostics_profile import ContainerServiceDiagnosticsProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerServiceDiagnosticsProfile from a JSON string
container_service_diagnostics_profile_instance = ContainerServiceDiagnosticsProfile.from_json(json)
# print the JSON string representation of the object
print(ContainerServiceDiagnosticsProfile.to_json())

# convert the object into a dict
container_service_diagnostics_profile_dict = container_service_diagnostics_profile_instance.to_dict()
# create an instance of ContainerServiceDiagnosticsProfile from a dict
container_service_diagnostics_profile_from_dict = ContainerServiceDiagnosticsProfile.from_dict(container_service_diagnostics_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


