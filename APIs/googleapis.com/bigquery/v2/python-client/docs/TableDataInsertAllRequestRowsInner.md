# TableDataInsertAllRequestRowsInner

Data for a single insertion row.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**insert_id** | **str** | Insertion ID for best-effort deduplication. This feature is not recommended, and users seeking stronger insertion semantics are encouraged to use other mechanisms such as the BigQuery Write API. | [optional] 
**var_json** | **Dict[str, object]** | Represents a single JSON object. | [optional] 

## Example

```python
from openapi_client.models.table_data_insert_all_request_rows_inner import TableDataInsertAllRequestRowsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TableDataInsertAllRequestRowsInner from a JSON string
table_data_insert_all_request_rows_inner_instance = TableDataInsertAllRequestRowsInner.from_json(json)
# print the JSON string representation of the object
print(TableDataInsertAllRequestRowsInner.to_json())

# convert the object into a dict
table_data_insert_all_request_rows_inner_dict = table_data_insert_all_request_rows_inner_instance.to_dict()
# create an instance of TableDataInsertAllRequestRowsInner from a dict
table_data_insert_all_request_rows_inner_from_dict = TableDataInsertAllRequestRowsInner.from_dict(table_data_insert_all_request_rows_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


