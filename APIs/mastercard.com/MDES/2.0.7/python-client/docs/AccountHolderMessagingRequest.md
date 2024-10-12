# AccountHolderMessagingRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_holder_messaging_request** | [**AccountHolderMessagingRequestSchema**](AccountHolderMessagingRequestSchema.md) |  | [optional] 

## Example

```python
from openapi_client.models.account_holder_messaging_request import AccountHolderMessagingRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AccountHolderMessagingRequest from a JSON string
account_holder_messaging_request_instance = AccountHolderMessagingRequest.from_json(json)
# print the JSON string representation of the object
print(AccountHolderMessagingRequest.to_json())

# convert the object into a dict
account_holder_messaging_request_dict = account_holder_messaging_request_instance.to_dict()
# create an instance of AccountHolderMessagingRequest from a dict
account_holder_messaging_request_from_dict = AccountHolderMessagingRequest.from_dict(account_holder_messaging_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


