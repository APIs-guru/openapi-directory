# TableListResult

The List operation response, that contains the Table and their properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Table]**](Table.md) | List of Table and their properties. | [optional] [readonly] 

## Example

```python
from openapi_client.models.table_list_result import TableListResult

# TODO update the JSON string below
json = "{}"
# create an instance of TableListResult from a JSON string
table_list_result_instance = TableListResult.from_json(json)
# print the JSON string representation of the object
print(TableListResult.to_json())

# convert the object into a dict
table_list_result_dict = table_list_result_instance.to_dict()
# create an instance of TableListResult from a dict
table_list_result_from_dict = TableListResult.from_dict(table_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


