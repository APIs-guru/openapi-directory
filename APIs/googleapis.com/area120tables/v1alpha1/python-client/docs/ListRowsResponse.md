# ListRowsResponse

Response message for TablesService.ListRows.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is empty, there are no subsequent pages. | [optional] 
**rows** | [**List[Row]**](Row.md) | The rows from the specified table. | [optional] 

## Example

```python
from openapi_client.models.list_rows_response import ListRowsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListRowsResponse from a JSON string
list_rows_response_instance = ListRowsResponse.from_json(json)
# print the JSON string representation of the object
print(ListRowsResponse.to_json())

# convert the object into a dict
list_rows_response_dict = list_rows_response_instance.to_dict()
# create an instance of ListRowsResponse from a dict
list_rows_response_from_dict = ListRowsResponse.from_dict(list_rows_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


