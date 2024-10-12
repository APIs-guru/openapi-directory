# AccountCredentials

Credentials allowing Google to call a partner's API on behalf of a merchant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | An OAuth access token. | [optional] 
**expires_in** | **str** | The amount of time, in seconds, after which the access token is no longer valid. | [optional] 
**purpose** | **str** | Indicates to Google how Google should use these OAuth tokens. | [optional] 

## Example

```python
from openapi_client.models.account_credentials import AccountCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of AccountCredentials from a JSON string
account_credentials_instance = AccountCredentials.from_json(json)
# print the JSON string representation of the object
print(AccountCredentials.to_json())

# convert the object into a dict
account_credentials_dict = account_credentials_instance.to_dict()
# create an instance of AccountCredentials from a dict
account_credentials_from_dict = AccountCredentials.from_dict(account_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


