# DatabaseListResult

The list Kusto databases operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Database]**](Database.md) | The list of Kusto databases. | [optional] 

## Example

```python
from openapi_client.models.database_list_result import DatabaseListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseListResult from a JSON string
database_list_result_instance = DatabaseListResult.from_json(json)
# print the JSON string representation of the object
print(DatabaseListResult.to_json())

# convert the object into a dict
database_list_result_dict = database_list_result_instance.to_dict()
# create an instance of DatabaseListResult from a dict
database_list_result_from_dict = DatabaseListResult.from_dict(database_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


