# BatchCreatePrintServersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failures** | [**List[PrintServerFailureInfo]**](PrintServerFailureInfo.md) | A list of create failures. &#x60;PrintServer&#x60; IDs are not populated, as print servers were not created. | [optional] 
**print_servers** | [**List[PrintServer]**](PrintServer.md) | A list of successfully created print servers with their IDs populated. | [optional] 

## Example

```python
from openapi_client.models.batch_create_print_servers_response import BatchCreatePrintServersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreatePrintServersResponse from a JSON string
batch_create_print_servers_response_instance = BatchCreatePrintServersResponse.from_json(json)
# print the JSON string representation of the object
print(BatchCreatePrintServersResponse.to_json())

# convert the object into a dict
batch_create_print_servers_response_dict = batch_create_print_servers_response_instance.to_dict()
# create an instance of BatchCreatePrintServersResponse from a dict
batch_create_print_servers_response_from_dict = BatchCreatePrintServersResponse.from_dict(batch_create_print_servers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


