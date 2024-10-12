# ApiTokensPrivateCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the token | [optional] 
**principal_id** | **str** | The principal ID assigned to the API token | 
**principal_type** | **str** | The principal type assigned to the API token | 
**scope** | **List[str]** | The scope for this token (default \&quot;all\&quot;). | [optional] 
**token_type** | **str** | The token&#39;s type (default \&quot;public\&quot;)   public: managed by the user   in_app_update: special token for in-app update scenario   buid: dedicated for CI usage for now   session: for CLI session management   tester_app: used for tester mobile app | [optional] 

## Example

```python
from openapi_client.models.api_tokens_private_create_request import ApiTokensPrivateCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTokensPrivateCreateRequest from a JSON string
api_tokens_private_create_request_instance = ApiTokensPrivateCreateRequest.from_json(json)
# print the JSON string representation of the object
print(ApiTokensPrivateCreateRequest.to_json())

# convert the object into a dict
api_tokens_private_create_request_dict = api_tokens_private_create_request_instance.to_dict()
# create an instance of ApiTokensPrivateCreateRequest from a dict
api_tokens_private_create_request_from_dict = ApiTokensPrivateCreateRequest.from_dict(api_tokens_private_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


