# TableDataInsertAllResponse

Describes the format of a streaming insert response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**insert_errors** | [**List[TableDataInsertAllResponseInsertErrorsInner]**](TableDataInsertAllResponseInsertErrorsInner.md) | Describes specific errors encountered while processing the request. | [optional] 
**kind** | **str** | Returns \&quot;bigquery#tableDataInsertAllResponse\&quot;. | [optional] [default to 'bigquery#tableDataInsertAllResponse']

## Example

```python
from openapi_client.models.table_data_insert_all_response import TableDataInsertAllResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TableDataInsertAllResponse from a JSON string
table_data_insert_all_response_instance = TableDataInsertAllResponse.from_json(json)
# print the JSON string representation of the object
print(TableDataInsertAllResponse.to_json())

# convert the object into a dict
table_data_insert_all_response_dict = table_data_insert_all_response_instance.to_dict()
# create an instance of TableDataInsertAllResponse from a dict
table_data_insert_all_response_from_dict = TableDataInsertAllResponse.from_dict(table_data_insert_all_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


