# CreatePrintServerRequest

Request for adding a new print server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent** | **str** | Required. The [unique ID](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers) of the customer&#39;s Google Workspace account. Format: &#x60;customers/{id}&#x60; | [optional] 
**print_server** | [**PrintServer**](PrintServer.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_print_server_request import CreatePrintServerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePrintServerRequest from a JSON string
create_print_server_request_instance = CreatePrintServerRequest.from_json(json)
# print the JSON string representation of the object
print(CreatePrintServerRequest.to_json())

# convert the object into a dict
create_print_server_request_dict = create_print_server_request_instance.to_dict()
# create an instance of CreatePrintServerRequest from a dict
create_print_server_request_from_dict = CreatePrintServerRequest.from_dict(create_print_server_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


