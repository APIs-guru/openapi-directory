# DatabaseColumnListResult

A list of database columns.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[DatabaseColumn]**](DatabaseColumn.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_column_list_result import DatabaseColumnListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseColumnListResult from a JSON string
database_column_list_result_instance = DatabaseColumnListResult.from_json(json)
# print the JSON string representation of the object
print(DatabaseColumnListResult.to_json())

# convert the object into a dict
database_column_list_result_dict = database_column_list_result_instance.to_dict()
# create an instance of DatabaseColumnListResult from a dict
database_column_list_result_from_dict = DatabaseColumnListResult.from_dict(database_column_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


