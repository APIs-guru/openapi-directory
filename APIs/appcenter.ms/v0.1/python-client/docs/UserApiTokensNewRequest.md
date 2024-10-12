# UserApiTokensNewRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the token | [optional] 
**scope** | **List[str]** | The scope for this token. | [optional] 

## Example

```python
from openapi_client.models.user_api_tokens_new_request import UserApiTokensNewRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UserApiTokensNewRequest from a JSON string
user_api_tokens_new_request_instance = UserApiTokensNewRequest.from_json(json)
# print the JSON string representation of the object
print(UserApiTokensNewRequest.to_json())

# convert the object into a dict
user_api_tokens_new_request_dict = user_api_tokens_new_request_instance.to_dict()
# create an instance of UserApiTokensNewRequest from a dict
user_api_tokens_new_request_from_dict = UserApiTokensNewRequest.from_dict(user_api_tokens_new_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


