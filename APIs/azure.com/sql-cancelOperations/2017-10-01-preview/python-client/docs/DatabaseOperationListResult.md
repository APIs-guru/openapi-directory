# DatabaseOperationListResult

The response to a list database operations request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[DatabaseOperation]**](DatabaseOperation.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_operation_list_result import DatabaseOperationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseOperationListResult from a JSON string
database_operation_list_result_instance = DatabaseOperationListResult.from_json(json)
# print the JSON string representation of the object
print(DatabaseOperationListResult.to_json())

# convert the object into a dict
database_operation_list_result_dict = database_operation_list_result_instance.to_dict()
# create an instance of DatabaseOperationListResult from a dict
database_operation_list_result_from_dict = DatabaseOperationListResult.from_dict(database_operation_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


