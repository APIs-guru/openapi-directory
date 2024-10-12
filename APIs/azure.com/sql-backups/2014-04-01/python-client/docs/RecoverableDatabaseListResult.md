# RecoverableDatabaseListResult

The response to a list recoverable databases request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[RecoverableDatabase]**](RecoverableDatabase.md) | A list of recoverable databases | 

## Example

```python
from openapi_client.models.recoverable_database_list_result import RecoverableDatabaseListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RecoverableDatabaseListResult from a JSON string
recoverable_database_list_result_instance = RecoverableDatabaseListResult.from_json(json)
# print the JSON string representation of the object
print(RecoverableDatabaseListResult.to_json())

# convert the object into a dict
recoverable_database_list_result_dict = recoverable_database_list_result_instance.to_dict()
# create an instance of RecoverableDatabaseListResult from a dict
recoverable_database_list_result_from_dict = RecoverableDatabaseListResult.from_dict(recoverable_database_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


