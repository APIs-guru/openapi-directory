# DatabaseTableListResult

A list of database tables.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[DatabaseTable]**](DatabaseTable.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_table_list_result import DatabaseTableListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseTableListResult from a JSON string
database_table_list_result_instance = DatabaseTableListResult.from_json(json)
# print the JSON string representation of the object
print(DatabaseTableListResult.to_json())

# convert the object into a dict
database_table_list_result_dict = database_table_list_result_instance.to_dict()
# create an instance of DatabaseTableListResult from a dict
database_table_list_result_from_dict = DatabaseTableListResult.from_dict(database_table_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


