# AccountState

Indicates status of the account, such as whether the account has been verified by Google.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | If verified, future locations that are created are automatically connected to Google Maps, and have Google+ pages created, without requiring moderation. | [optional] 

## Example

```python
from openapi_client.models.account_state import AccountState

# TODO update the JSON string below
json = "{}"
# create an instance of AccountState from a JSON string
account_state_instance = AccountState.from_json(json)
# print the JSON string representation of the object
print(AccountState.to_json())

# convert the object into a dict
account_state_dict = account_state_instance.to_dict()
# create an instance of AccountState from a dict
account_state_from_dict = AccountState.from_dict(account_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


