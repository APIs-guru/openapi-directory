# SqlVirtualMachine

A SQL virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**ResourceIdentity**](ResourceIdentity.md) |  | [optional] 
**properties** | [**SqlVirtualMachineProperties**](SqlVirtualMachineProperties.md) |  | [optional] 
**location** | **str** | Resource location. | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sql_virtual_machine import SqlVirtualMachine

# TODO update the JSON string below
json = "{}"
# create an instance of SqlVirtualMachine from a JSON string
sql_virtual_machine_instance = SqlVirtualMachine.from_json(json)
# print the JSON string representation of the object
print(SqlVirtualMachine.to_json())

# convert the object into a dict
sql_virtual_machine_dict = sql_virtual_machine_instance.to_dict()
# create an instance of SqlVirtualMachine from a dict
sql_virtual_machine_from_dict = SqlVirtualMachine.from_dict(sql_virtual_machine_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


