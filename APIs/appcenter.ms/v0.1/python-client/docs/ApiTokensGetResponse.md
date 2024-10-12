# ApiTokensGetResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** | The creation time | 
**description** | **str** | The description of the token | [optional] 
**id** | **str** | The unique id (UUID) of the api token | 
**scope** | **List[str]** | The scope for this token. | [optional] 

## Example

```python
from openapi_client.models.api_tokens_get_response import ApiTokensGetResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTokensGetResponse from a JSON string
api_tokens_get_response_instance = ApiTokensGetResponse.from_json(json)
# print the JSON string representation of the object
print(ApiTokensGetResponse.to_json())

# convert the object into a dict
api_tokens_get_response_dict = api_tokens_get_response_instance.to_dict()
# create an instance of ApiTokensGetResponse from a dict
api_tokens_get_response_from_dict = ApiTokensGetResponse.from_dict(api_tokens_get_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


