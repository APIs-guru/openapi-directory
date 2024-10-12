# RestorableDroppedDatabaseListResult

The response to a list restorable dropped databases request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[RestorableDroppedDatabase]**](RestorableDroppedDatabase.md) | A list of restorable dropped databases | 

## Example

```python
from openapi_client.models.restorable_dropped_database_list_result import RestorableDroppedDatabaseListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RestorableDroppedDatabaseListResult from a JSON string
restorable_dropped_database_list_result_instance = RestorableDroppedDatabaseListResult.from_json(json)
# print the JSON string representation of the object
print(RestorableDroppedDatabaseListResult.to_json())

# convert the object into a dict
restorable_dropped_database_list_result_dict = restorable_dropped_database_list_result_instance.to_dict()
# create an instance of RestorableDroppedDatabaseListResult from a dict
restorable_dropped_database_list_result_from_dict = RestorableDroppedDatabaseListResult.from_dict(restorable_dropped_database_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


