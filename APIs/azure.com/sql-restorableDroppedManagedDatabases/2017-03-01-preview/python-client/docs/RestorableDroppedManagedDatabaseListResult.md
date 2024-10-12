# RestorableDroppedManagedDatabaseListResult

A list of restorable dropped managed databases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[RestorableDroppedManagedDatabase]**](RestorableDroppedManagedDatabase.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.restorable_dropped_managed_database_list_result import RestorableDroppedManagedDatabaseListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RestorableDroppedManagedDatabaseListResult from a JSON string
restorable_dropped_managed_database_list_result_instance = RestorableDroppedManagedDatabaseListResult.from_json(json)
# print the JSON string representation of the object
print(RestorableDroppedManagedDatabaseListResult.to_json())

# convert the object into a dict
restorable_dropped_managed_database_list_result_dict = restorable_dropped_managed_database_list_result_instance.to_dict()
# create an instance of RestorableDroppedManagedDatabaseListResult from a dict
restorable_dropped_managed_database_list_result_from_dict = RestorableDroppedManagedDatabaseListResult.from_dict(restorable_dropped_managed_database_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


