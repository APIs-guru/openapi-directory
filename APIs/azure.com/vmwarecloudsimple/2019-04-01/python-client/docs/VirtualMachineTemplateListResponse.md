# VirtualMachineTemplateListResponse

List of virtual machine templates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next list of VirtualMachineTemplate | [optional] 
**value** | [**List[VirtualMachineTemplate]**](VirtualMachineTemplate.md) | Results of the VM template list | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_template_list_response import VirtualMachineTemplateListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineTemplateListResponse from a JSON string
virtual_machine_template_list_response_instance = VirtualMachineTemplateListResponse.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineTemplateListResponse.to_json())

# convert the object into a dict
virtual_machine_template_list_response_dict = virtual_machine_template_list_response_instance.to_dict()
# create an instance of VirtualMachineTemplateListResponse from a dict
virtual_machine_template_list_response_from_dict = VirtualMachineTemplateListResponse.from_dict(virtual_machine_template_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


