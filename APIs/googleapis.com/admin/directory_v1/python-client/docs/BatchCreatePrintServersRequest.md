# BatchCreatePrintServersRequest

Request to add multiple new print servers in a batch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[CreatePrintServerRequest]**](CreatePrintServerRequest.md) | Required. A list of &#x60;PrintServer&#x60; resources to be created (max &#x60;50&#x60; per batch). | [optional] 

## Example

```python
from openapi_client.models.batch_create_print_servers_request import BatchCreatePrintServersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreatePrintServersRequest from a JSON string
batch_create_print_servers_request_instance = BatchCreatePrintServersRequest.from_json(json)
# print the JSON string representation of the object
print(BatchCreatePrintServersRequest.to_json())

# convert the object into a dict
batch_create_print_servers_request_dict = batch_create_print_servers_request_instance.to_dict()
# create an instance of BatchCreatePrintServersRequest from a dict
batch_create_print_servers_request_from_dict = BatchCreatePrintServersRequest.from_dict(batch_create_print_servers_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


