# BatchDeletePrintServersRequest

Request to delete multiple existing print servers in a batch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**print_server_ids** | **List[str]** | A list of print server IDs that should be deleted (max &#x60;100&#x60; per batch). | [optional] 

## Example

```python
from openapi_client.models.batch_delete_print_servers_request import BatchDeletePrintServersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchDeletePrintServersRequest from a JSON string
batch_delete_print_servers_request_instance = BatchDeletePrintServersRequest.from_json(json)
# print the JSON string representation of the object
print(BatchDeletePrintServersRequest.to_json())

# convert the object into a dict
batch_delete_print_servers_request_dict = batch_delete_print_servers_request_instance.to_dict()
# create an instance of BatchDeletePrintServersRequest from a dict
batch_delete_print_servers_request_from_dict = BatchDeletePrintServersRequest.from_dict(batch_delete_print_servers_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


