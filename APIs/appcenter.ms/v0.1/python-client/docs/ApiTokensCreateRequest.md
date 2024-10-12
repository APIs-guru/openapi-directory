# ApiTokensCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the token | [optional] 
**scope** | **List[str]** | The scope for this token. | [optional] 

## Example

```python
from openapi_client.models.api_tokens_create_request import ApiTokensCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTokensCreateRequest from a JSON string
api_tokens_create_request_instance = ApiTokensCreateRequest.from_json(json)
# print the JSON string representation of the object
print(ApiTokensCreateRequest.to_json())

# convert the object into a dict
api_tokens_create_request_dict = api_tokens_create_request_instance.to_dict()
# create an instance of ApiTokensCreateRequest from a dict
api_tokens_create_request_from_dict = ApiTokensCreateRequest.from_dict(api_tokens_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


