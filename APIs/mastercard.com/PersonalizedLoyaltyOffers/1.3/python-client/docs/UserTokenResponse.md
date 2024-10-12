# UserTokenResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response** | [**TokenResponse**](TokenResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_token_response import UserTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UserTokenResponse from a JSON string
user_token_response_instance = UserTokenResponse.from_json(json)
# print the JSON string representation of the object
print(UserTokenResponse.to_json())

# convert the object into a dict
user_token_response_dict = user_token_response_instance.to_dict()
# create an instance of UserTokenResponse from a dict
user_token_response_from_dict = UserTokenResponse.from_dict(user_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


