# AccountsAuthInfoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_identifiers** | [**List[AccountIdentifier]**](AccountIdentifier.md) | The account identifiers corresponding to the authenticated user. - For an individual account: only the merchant ID is defined - For an aggregator: only the aggregator ID is defined - For a subaccount of an MCA: both the merchant ID and the aggregator ID are defined.  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#accountsAuthInfoResponse&#x60;\&quot;. | [optional] 

## Example

```python
from openapi_client.models.accounts_auth_info_response import AccountsAuthInfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AccountsAuthInfoResponse from a JSON string
accounts_auth_info_response_instance = AccountsAuthInfoResponse.from_json(json)
# print the JSON string representation of the object
print(AccountsAuthInfoResponse.to_json())

# convert the object into a dict
accounts_auth_info_response_dict = accounts_auth_info_response_instance.to_dict()
# create an instance of AccountsAuthInfoResponse from a dict
accounts_auth_info_response_from_dict = AccountsAuthInfoResponse.from_dict(accounts_auth_info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


