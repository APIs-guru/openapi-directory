# SqlVirtualMachineGroup

A SQL virtual machine group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SqlVirtualMachineGroupProperties**](SqlVirtualMachineGroupProperties.md) |  | [optional] 
**location** | **str** | Resource location. | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sql_virtual_machine_group import SqlVirtualMachineGroup

# TODO update the JSON string below
json = "{}"
# create an instance of SqlVirtualMachineGroup from a JSON string
sql_virtual_machine_group_instance = SqlVirtualMachineGroup.from_json(json)
# print the JSON string representation of the object
print(SqlVirtualMachineGroup.to_json())

# convert the object into a dict
sql_virtual_machine_group_dict = sql_virtual_machine_group_instance.to_dict()
# create an instance of SqlVirtualMachineGroup from a dict
sql_virtual_machine_group_from_dict = SqlVirtualMachineGroup.from_dict(sql_virtual_machine_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


