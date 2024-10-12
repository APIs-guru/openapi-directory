# UserGetSharedAccessTokenRequestProperties

Parameters supplied to the Get User Token operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiry** | **datetime** | The Expiry time of the Token. Maximum token expiry time is set to 30 days. The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard.  | 
**key_type** | **str** | The Key to be used to generate token for user. | [default to 'primary']

## Example

```python
from openapi_client.models.user_get_shared_access_token_request_properties import UserGetSharedAccessTokenRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UserGetSharedAccessTokenRequestProperties from a JSON string
user_get_shared_access_token_request_properties_instance = UserGetSharedAccessTokenRequestProperties.from_json(json)
# print the JSON string representation of the object
print(UserGetSharedAccessTokenRequestProperties.to_json())

# convert the object into a dict
user_get_shared_access_token_request_properties_dict = user_get_shared_access_token_request_properties_instance.to_dict()
# create an instance of UserGetSharedAccessTokenRequestProperties from a dict
user_get_shared_access_token_request_properties_from_dict = UserGetSharedAccessTokenRequestProperties.from_dict(user_get_shared_access_token_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


