# UserGetIdentityDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**UserGetIdentityDefaultResponseError**](UserGetIdentityDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_get_identity_default_response import UserGetIdentityDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UserGetIdentityDefaultResponse from a JSON string
user_get_identity_default_response_instance = UserGetIdentityDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(UserGetIdentityDefaultResponse.to_json())

# convert the object into a dict
user_get_identity_default_response_dict = user_get_identity_default_response_instance.to_dict()
# create an instance of UserGetIdentityDefaultResponse from a dict
user_get_identity_default_response_from_dict = UserGetIdentityDefaultResponse.from_dict(user_get_identity_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


