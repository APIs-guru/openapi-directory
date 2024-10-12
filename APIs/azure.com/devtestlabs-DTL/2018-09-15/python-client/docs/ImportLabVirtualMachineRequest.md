# ImportLabVirtualMachineRequest

This represents the payload required to import a virtual machine from a different lab into the current one

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_virtual_machine_name** | **str** | The name of the virtual machine in the destination lab | [optional] 
**source_virtual_machine_resource_id** | **str** | The full resource ID of the virtual machine to be imported. | [optional] 

## Example

```python
from openapi_client.models.import_lab_virtual_machine_request import ImportLabVirtualMachineRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ImportLabVirtualMachineRequest from a JSON string
import_lab_virtual_machine_request_instance = ImportLabVirtualMachineRequest.from_json(json)
# print the JSON string representation of the object
print(ImportLabVirtualMachineRequest.to_json())

# convert the object into a dict
import_lab_virtual_machine_request_dict = import_lab_virtual_machine_request_instance.to_dict()
# create an instance of ImportLabVirtualMachineRequest from a dict
import_lab_virtual_machine_request_from_dict = ImportLabVirtualMachineRequest.from_dict(import_lab_virtual_machine_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


