# ApiTokensPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the token | [optional] 
**encrypted_token** | **str** | An encrypted value of the token. | [optional] 
**scope** | **List[str]** | The scope for this token. An array of supported roles. | [optional] 
**token_hash** | **str** | The hashed value of api token | [optional] 
**token_type** | **str** | The token&#39;s type. public:managed by the user; in_app_update:special token for in-app update scenario; buid:dedicated for CI usage for now; session:for CLI session management; tester_app: used for tester mobile app; default is \&quot;public\&quot;.&#39; | [optional] 

## Example

```python
from openapi_client.models.api_tokens_post_request import ApiTokensPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTokensPostRequest from a JSON string
api_tokens_post_request_instance = ApiTokensPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiTokensPostRequest.to_json())

# convert the object into a dict
api_tokens_post_request_dict = api_tokens_post_request_instance.to_dict()
# create an instance of ApiTokensPostRequest from a dict
api_tokens_post_request_from_dict = ApiTokensPostRequest.from_dict(api_tokens_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


