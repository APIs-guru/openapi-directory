# BatchDeleteRowsRequest

Request message for TablesService.BatchDeleteRows

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**names** | **List[str]** | Required. The names of the rows to delete. All rows must belong to the parent table or else the entire batch will fail. A maximum of 500 rows can be deleted in a batch. Format: tables/{table}/rows/{row} | [optional] 

## Example

```python
from openapi_client.models.batch_delete_rows_request import BatchDeleteRowsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchDeleteRowsRequest from a JSON string
batch_delete_rows_request_instance = BatchDeleteRowsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchDeleteRowsRequest.to_json())

# convert the object into a dict
batch_delete_rows_request_dict = batch_delete_rows_request_instance.to_dict()
# create an instance of BatchDeleteRowsRequest from a dict
batch_delete_rows_request_from_dict = BatchDeleteRowsRequest.from_dict(batch_delete_rows_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


