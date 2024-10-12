# BatchUpdateRowsRequest

Request message for TablesService.BatchUpdateRows.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[UpdateRowRequest]**](UpdateRowRequest.md) | Required. The request messages specifying the rows to update. A maximum of 500 rows can be modified in a single batch. | [optional] 

## Example

```python
from openapi_client.models.batch_update_rows_request import BatchUpdateRowsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateRowsRequest from a JSON string
batch_update_rows_request_instance = BatchUpdateRowsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateRowsRequest.to_json())

# convert the object into a dict
batch_update_rows_request_dict = batch_update_rows_request_instance.to_dict()
# create an instance of BatchUpdateRowsRequest from a dict
batch_update_rows_request_from_dict = BatchUpdateRowsRequest.from_dict(batch_update_rows_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


