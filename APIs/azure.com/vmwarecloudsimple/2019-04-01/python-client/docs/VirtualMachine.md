# VirtualMachine

Virtual machine model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/virtualMachines/{virtualMachineName} | [optional] [readonly] 
**location** | **str** | Azure region | 
**name** | **str** | {virtualMachineName} | [optional] [readonly] 
**properties** | [**VirtualMachineProperties**](VirtualMachineProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Tags model | [optional] 
**type** | **str** | {resourceProviderNamespace}/{resourceType} | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_machine import VirtualMachine

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachine from a JSON string
virtual_machine_instance = VirtualMachine.from_json(json)
# print the JSON string representation of the object
print(VirtualMachine.to_json())

# convert the object into a dict
virtual_machine_dict = virtual_machine_instance.to_dict()
# create an instance of VirtualMachine from a dict
virtual_machine_from_dict = VirtualMachine.from_dict(virtual_machine_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


