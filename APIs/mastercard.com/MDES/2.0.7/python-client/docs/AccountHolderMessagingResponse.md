# AccountHolderMessagingResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | [**TokenResponse**](TokenResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.account_holder_messaging_response import AccountHolderMessagingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AccountHolderMessagingResponse from a JSON string
account_holder_messaging_response_instance = AccountHolderMessagingResponse.from_json(json)
# print the JSON string representation of the object
print(AccountHolderMessagingResponse.to_json())

# convert the object into a dict
account_holder_messaging_response_dict = account_holder_messaging_response_instance.to_dict()
# create an instance of AccountHolderMessagingResponse from a dict
account_holder_messaging_response_from_dict = AccountHolderMessagingResponse.from_dict(account_holder_messaging_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


