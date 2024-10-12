# ListTablesResponse

Response message for TablesService.ListTables.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is empty, there are no subsequent pages. | [optional] 
**tables** | [**List[Table]**](Table.md) | The list of tables. | [optional] 

## Example

```python
from openapi_client.models.list_tables_response import ListTablesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTablesResponse from a JSON string
list_tables_response_instance = ListTablesResponse.from_json(json)
# print the JSON string representation of the object
print(ListTablesResponse.to_json())

# convert the object into a dict
list_tables_response_dict = list_tables_response_instance.to_dict()
# create an instance of ListTablesResponse from a dict
list_tables_response_from_dict = ListTablesResponse.from_dict(list_tables_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


