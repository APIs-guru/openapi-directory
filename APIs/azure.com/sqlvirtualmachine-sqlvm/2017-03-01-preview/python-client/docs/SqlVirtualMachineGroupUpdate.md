# SqlVirtualMachineGroupUpdate

An update to a SQL virtual machine group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.sql_virtual_machine_group_update import SqlVirtualMachineGroupUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of SqlVirtualMachineGroupUpdate from a JSON string
sql_virtual_machine_group_update_instance = SqlVirtualMachineGroupUpdate.from_json(json)
# print the JSON string representation of the object
print(SqlVirtualMachineGroupUpdate.to_json())

# convert the object into a dict
sql_virtual_machine_group_update_dict = sql_virtual_machine_group_update_instance.to_dict()
# create an instance of SqlVirtualMachineGroupUpdate from a dict
sql_virtual_machine_group_update_from_dict = SqlVirtualMachineGroupUpdate.from_dict(sql_virtual_machine_group_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


