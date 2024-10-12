# BatchDeletePrintServersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed_print_servers** | [**List[PrintServerFailureInfo]**](PrintServerFailureInfo.md) | A list of update failures. | [optional] 
**print_server_ids** | **List[str]** | A list of print server IDs that were successfully deleted. | [optional] 

## Example

```python
from openapi_client.models.batch_delete_print_servers_response import BatchDeletePrintServersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchDeletePrintServersResponse from a JSON string
batch_delete_print_servers_response_instance = BatchDeletePrintServersResponse.from_json(json)
# print the JSON string representation of the object
print(BatchDeletePrintServersResponse.to_json())

# convert the object into a dict
batch_delete_print_servers_response_dict = batch_delete_print_servers_response_instance.to_dict()
# create an instance of BatchDeletePrintServersResponse from a dict
batch_delete_print_servers_response_from_dict = BatchDeletePrintServersResponse.from_dict(batch_delete_print_servers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


