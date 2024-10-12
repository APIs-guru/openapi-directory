# ManagedDatabaseListResult

A list of managed databases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[ManagedDatabase]**](ManagedDatabase.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_database_list_result import ManagedDatabaseListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedDatabaseListResult from a JSON string
managed_database_list_result_instance = ManagedDatabaseListResult.from_json(json)
# print the JSON string representation of the object
print(ManagedDatabaseListResult.to_json())

# convert the object into a dict
managed_database_list_result_dict = managed_database_list_result_instance.to_dict()
# create an instance of ManagedDatabaseListResult from a dict
managed_database_list_result_from_dict = ManagedDatabaseListResult.from_dict(managed_database_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


