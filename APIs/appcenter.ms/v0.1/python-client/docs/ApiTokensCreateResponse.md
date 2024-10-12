# ApiTokensCreateResponse


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
from openapi_client.models.api_tokens_create_response import ApiTokensCreateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTokensCreateResponse from a JSON string
api_tokens_create_response_instance = ApiTokensCreateResponse.from_json(json)
# print the JSON string representation of the object
print(ApiTokensCreateResponse.to_json())

# convert the object into a dict
api_tokens_create_response_dict = api_tokens_create_response_instance.to_dict()
# create an instance of ApiTokensCreateResponse from a dict
api_tokens_create_response_from_dict = ApiTokensCreateResponse.from_dict(api_tokens_create_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


