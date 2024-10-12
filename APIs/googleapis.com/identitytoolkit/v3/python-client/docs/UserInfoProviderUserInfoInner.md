# UserInfoProviderUserInfoInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The user&#39;s display name at the IDP. | [optional] 
**email** | **str** | User&#39;s email at IDP. | [optional] 
**federated_id** | **str** | User&#39;s identifier at IDP. | [optional] 
**phone_number** | **str** | User&#39;s phone number. | [optional] 
**photo_url** | **str** | The user&#39;s photo url at the IDP. | [optional] 
**provider_id** | **str** | The IdP ID. For white listed IdPs it&#39;s a short domain name, e.g., google.com, aol.com, live.net and yahoo.com. For other OpenID IdPs it&#39;s the OP identifier. | [optional] 
**raw_id** | **str** | User&#39;s raw identifier directly returned from IDP. | [optional] 
**screen_name** | **str** | User&#39;s screen name at Twitter or login name at Github. | [optional] 

## Example

```python
from openapi_client.models.user_info_provider_user_info_inner import UserInfoProviderUserInfoInner

# TODO update the JSON string below
json = "{}"
# create an instance of UserInfoProviderUserInfoInner from a JSON string
user_info_provider_user_info_inner_instance = UserInfoProviderUserInfoInner.from_json(json)
# print the JSON string representation of the object
print(UserInfoProviderUserInfoInner.to_json())

# convert the object into a dict
user_info_provider_user_info_inner_dict = user_info_provider_user_info_inner_instance.to_dict()
# create an instance of UserInfoProviderUserInfoInner from a dict
user_info_provider_user_info_inner_from_dict = UserInfoProviderUserInfoInner.from_dict(user_info_provider_user_info_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


