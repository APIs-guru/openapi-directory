# VirtualMachineTemplate

Virtual machine template model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | virtual machine template id (privateCloudId:vsphereId) | [optional] [readonly] 
**location** | **str** | Azure region | [optional] 
**name** | **str** | {virtualMachineTemplateName} | [optional] [readonly] 
**properties** | [**VirtualMachineTemplateProperties**](VirtualMachineTemplateProperties.md) |  | [optional] 
**type** | **str** | {resourceProviderNamespace}/{resourceType} | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_machine_template import VirtualMachineTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineTemplate from a JSON string
virtual_machine_template_instance = VirtualMachineTemplate.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineTemplate.to_json())

# convert the object into a dict
virtual_machine_template_dict = virtual_machine_template_instance.to_dict()
# create an instance of VirtualMachineTemplate from a dict
virtual_machine_template_from_dict = VirtualMachineTemplate.from_dict(virtual_machine_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


