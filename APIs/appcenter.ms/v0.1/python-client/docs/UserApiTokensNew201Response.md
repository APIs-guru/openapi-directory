# UserApiTokensNew201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_token** | **str** | The api token generated will not be accessible again | 
**created_at** | **str** | The creation time | 
**description** | **str** | The description of the token | [optional] 
**id** | **str** | The unique id (UUID) of the api token | 
**scope** | **List[str]** | The scope for this token. | [optional] 

## Example

```python
from openapi_client.models.user_api_tokens_new201_response import UserApiTokensNew201Response

# TODO update the JSON string below
json = "{}"
# create an instance of UserApiTokensNew201Response from a JSON string
user_api_tokens_new201_response_instance = UserApiTokensNew201Response.from_json(json)
# print the JSON string representation of the object
print(UserApiTokensNew201Response.to_json())

# convert the object into a dict
user_api_tokens_new201_response_dict = user_api_tokens_new201_response_instance.to_dict()
# create an instance of UserApiTokensNew201Response from a dict
user_api_tokens_new201_response_from_dict = UserApiTokensNew201Response.from_dict(user_api_tokens_new201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


