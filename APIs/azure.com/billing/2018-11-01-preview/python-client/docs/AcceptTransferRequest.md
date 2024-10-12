# AcceptTransferRequest

Request parameters to accept transfer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AcceptTransferProperties**](AcceptTransferProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.accept_transfer_request import AcceptTransferRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AcceptTransferRequest from a JSON string
accept_transfer_request_instance = AcceptTransferRequest.from_json(json)
# print the JSON string representation of the object
print(AcceptTransferRequest.to_json())

# convert the object into a dict
accept_transfer_request_dict = accept_transfer_request_instance.to_dict()
# create an instance of AcceptTransferRequest from a dict
accept_transfer_request_from_dict = AcceptTransferRequest.from_dict(accept_transfer_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


