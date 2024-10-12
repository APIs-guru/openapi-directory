# UserGetSharedAccessTokenRequest

Get User Token parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UserGetSharedAccessTokenRequestProperties**](UserGetSharedAccessTokenRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_get_shared_access_token_request import UserGetSharedAccessTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UserGetSharedAccessTokenRequest from a JSON string
user_get_shared_access_token_request_instance = UserGetSharedAccessTokenRequest.from_json(json)
# print the JSON string representation of the object
print(UserGetSharedAccessTokenRequest.to_json())

# convert the object into a dict
user_get_shared_access_token_request_dict = user_get_shared_access_token_request_instance.to_dict()
# create an instance of UserGetSharedAccessTokenRequest from a dict
user_get_shared_access_token_request_from_dict = UserGetSharedAccessTokenRequest.from_dict(user_get_shared_access_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


