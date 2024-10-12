# BatchCreateRowsRequest

Request message for TablesService.BatchCreateRows.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[CreateRowRequest]**](CreateRowRequest.md) | Required. The request message specifying the rows to create. A maximum of 500 rows can be created in a single batch. | [optional] 

## Example

```python
from openapi_client.models.batch_create_rows_request import BatchCreateRowsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreateRowsRequest from a JSON string
batch_create_rows_request_instance = BatchCreateRowsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchCreateRowsRequest.to_json())

# convert the object into a dict
batch_create_rows_request_dict = batch_create_rows_request_instance.to_dict()
# create an instance of BatchCreateRowsRequest from a dict
batch_create_rows_request_from_dict = BatchCreateRowsRequest.from_dict(batch_create_rows_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


