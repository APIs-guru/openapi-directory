# RecoverableManagedDatabaseListResult

A list of recoverable managed databases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[RecoverableManagedDatabase]**](RecoverableManagedDatabase.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.recoverable_managed_database_list_result import RecoverableManagedDatabaseListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RecoverableManagedDatabaseListResult from a JSON string
recoverable_managed_database_list_result_instance = RecoverableManagedDatabaseListResult.from_json(json)
# print the JSON string representation of the object
print(RecoverableManagedDatabaseListResult.to_json())

# convert the object into a dict
recoverable_managed_database_list_result_dict = recoverable_managed_database_list_result_instance.to_dict()
# create an instance of RecoverableManagedDatabaseListResult from a dict
recoverable_managed_database_list_result_from_dict = RecoverableManagedDatabaseListResult.from_dict(recoverable_managed_database_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


