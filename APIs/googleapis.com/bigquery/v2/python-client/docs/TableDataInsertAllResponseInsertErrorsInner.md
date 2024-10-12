# TableDataInsertAllResponseInsertErrorsInner

Error details about a single row's insertion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[ErrorProto]**](ErrorProto.md) | Error information for the row indicated by the index property. | [optional] 
**index** | **int** | The index of the row that error applies to. | [optional] 

## Example

```python
from openapi_client.models.table_data_insert_all_response_insert_errors_inner import TableDataInsertAllResponseInsertErrorsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TableDataInsertAllResponseInsertErrorsInner from a JSON string
table_data_insert_all_response_insert_errors_inner_instance = TableDataInsertAllResponseInsertErrorsInner.from_json(json)
# print the JSON string representation of the object
print(TableDataInsertAllResponseInsertErrorsInner.to_json())

# convert the object into a dict
table_data_insert_all_response_insert_errors_inner_dict = table_data_insert_all_response_insert_errors_inner_instance.to_dict()
# create an instance of TableDataInsertAllResponseInsertErrorsInner from a dict
table_data_insert_all_response_insert_errors_inner_from_dict = TableDataInsertAllResponseInsertErrorsInner.from_dict(table_data_insert_all_response_insert_errors_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


