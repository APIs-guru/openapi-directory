# ContainerServiceVMDiagnostics

Profile for diagnostics on the container service VMs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the VM diagnostic agent is provisioned on the VM. | 
**storage_uri** | **str** | The URI of the storage account where diagnostics are stored. | [optional] [readonly] 

## Example

```python
from openapi_client.models.container_service_vm_diagnostics import ContainerServiceVMDiagnostics

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerServiceVMDiagnostics from a JSON string
container_service_vm_diagnostics_instance = ContainerServiceVMDiagnostics.from_json(json)
# print the JSON string representation of the object
print(ContainerServiceVMDiagnostics.to_json())

# convert the object into a dict
container_service_vm_diagnostics_dict = container_service_vm_diagnostics_instance.to_dict()
# create an instance of ContainerServiceVMDiagnostics from a dict
container_service_vm_diagnostics_from_dict = ContainerServiceVMDiagnostics.from_dict(container_service_vm_diagnostics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


