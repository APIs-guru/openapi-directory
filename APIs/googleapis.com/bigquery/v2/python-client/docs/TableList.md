# TableList

Partial projection of the metadata for a given table in a list response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A hash of this page of results. | [optional] 
**kind** | **str** | The type of list. | [optional] [default to 'bigquery#tableList']
**next_page_token** | **str** | A token to request the next page of results. | [optional] 
**tables** | [**List[TableListTablesInner]**](TableListTablesInner.md) | Tables in the requested dataset. | [optional] 
**total_items** | **int** | The total number of tables in the dataset. | [optional] 

## Example

```python
from openapi_client.models.table_list import TableList

# TODO update the JSON string below
json = "{}"
# create an instance of TableList from a JSON string
table_list_instance = TableList.from_json(json)
# print the JSON string representation of the object
print(TableList.to_json())

# convert the object into a dict
table_list_dict = table_list_instance.to_dict()
# create an instance of TableList from a dict
table_list_from_dict = TableList.from_dict(table_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


