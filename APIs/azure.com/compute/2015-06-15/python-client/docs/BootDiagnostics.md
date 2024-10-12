# BootDiagnostics

Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. <br><br> You can easily view the output of your console log. <br><br> Azure also enables you to see a screenshot of the VM from the hypervisor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether boot diagnostics should be enabled on the Virtual Machine. | [optional] 
**storage_uri** | **str** | Uri of the storage account to use for placing the console output and screenshot. | [optional] 

## Example

```python
from openapi_client.models.boot_diagnostics import BootDiagnostics

# TODO update the JSON string below
json = "{}"
# create an instance of BootDiagnostics from a JSON string
boot_diagnostics_instance = BootDiagnostics.from_json(json)
# print the JSON string representation of the object
print(BootDiagnostics.to_json())

# convert the object into a dict
boot_diagnostics_dict = boot_diagnostics_instance.to_dict()
# create an instance of BootDiagnostics from a dict
boot_diagnostics_from_dict = BootDiagnostics.from_dict(boot_diagnostics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


