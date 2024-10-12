# ApiTokensPrivateCreateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_token** | **str** | The api token generated will not be accessible again | 
**created_at** | **str** | The creation time | 
**description** | **str** | The description of the token | [optional] 
**encrypted_token** | **str** | The encrypted value of a token. This value will only be returned for token of type in_app_update. | [optional] 
**id** | **str** | The unique id (UUID) of the api token | 
**scope** | **List[str]** | The scope for this token. | [optional] 

## Example

```python
from openapi_client.models.api_tokens_private_create_response import ApiTokensPrivateCreateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTokensPrivateCreateResponse from a JSON string
api_tokens_private_create_response_instance = ApiTokensPrivateCreateResponse.from_json(json)
# print the JSON string representation of the object
print(ApiTokensPrivateCreateResponse.to_json())

# convert the object into a dict
api_tokens_private_create_response_dict = api_tokens_private_create_response_instance.to_dict()
# create an instance of ApiTokensPrivateCreateResponse from a dict
api_tokens_private_create_response_from_dict = ApiTokensPrivateCreateResponse.from_dict(api_tokens_private_create_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


