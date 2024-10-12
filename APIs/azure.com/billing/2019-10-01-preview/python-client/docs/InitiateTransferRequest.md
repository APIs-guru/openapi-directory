# InitiateTransferRequest

Request parameters to initiate transfer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**InitiateTransferProperties**](InitiateTransferProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.initiate_transfer_request import InitiateTransferRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InitiateTransferRequest from a JSON string
initiate_transfer_request_instance = InitiateTransferRequest.from_json(json)
# print the JSON string representation of the object
print(InitiateTransferRequest.to_json())

# convert the object into a dict
initiate_transfer_request_dict = initiate_transfer_request_instance.to_dict()
# create an instance of InitiateTransferRequest from a dict
initiate_transfer_request_from_dict = InitiateTransferRequest.from_dict(initiate_transfer_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


