# SqlVirtualMachineListResult

A list of SQL virtual machines.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[SqlVirtualMachine]**](SqlVirtualMachine.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sql_virtual_machine_list_result import SqlVirtualMachineListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SqlVirtualMachineListResult from a JSON string
sql_virtual_machine_list_result_instance = SqlVirtualMachineListResult.from_json(json)
# print the JSON string representation of the object
print(SqlVirtualMachineListResult.to_json())

# convert the object into a dict
sql_virtual_machine_list_result_dict = sql_virtual_machine_list_result_instance.to_dict()
# create an instance of SqlVirtualMachineListResult from a dict
sql_virtual_machine_list_result_from_dict = SqlVirtualMachineListResult.from_dict(sql_virtual_machine_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


