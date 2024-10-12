# SetAccountInfoResponseProviderUserInfoInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The user&#39;s display name at the IDP. | [optional] 
**federated_id** | **str** | User&#39;s identifier at IDP. | [optional] 
**photo_url** | **str** | The user&#39;s photo url at the IDP. | [optional] 
**provider_id** | **str** | The IdP ID. For whitelisted IdPs it&#39;s a short domain name, e.g., google.com, aol.com, live.net and yahoo.com. For other OpenID IdPs it&#39;s the OP identifier. | [optional] 

## Example

```python
from openapi_client.models.set_account_info_response_provider_user_info_inner import SetAccountInfoResponseProviderUserInfoInner

# TODO update the JSON string below
json = "{}"
# create an instance of SetAccountInfoResponseProviderUserInfoInner from a JSON string
set_account_info_response_provider_user_info_inner_instance = SetAccountInfoResponseProviderUserInfoInner.from_json(json)
# print the JSON string representation of the object
print(SetAccountInfoResponseProviderUserInfoInner.to_json())

# convert the object into a dict
set_account_info_response_provider_user_info_inner_dict = set_account_info_response_provider_user_info_inner_instance.to_dict()
# create an instance of SetAccountInfoResponseProviderUserInfoInner from a dict
set_account_info_response_provider_user_info_inner_from_dict = SetAccountInfoResponseProviderUserInfoInner.from_dict(set_account_info_response_provider_user_info_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


