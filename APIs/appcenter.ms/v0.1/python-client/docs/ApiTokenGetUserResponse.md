# ApiTokenGetUserResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_id** | **str** | The token&#39;s unique id (UUID) | 
**token_scope** | **List[str]** | The token&#39;s scope. A list of allowed roles. | 
**user_email** | **str** | The user email | 
**user_id** | **str** | The unique id (UUID) of the user | 
**user_origin** | **str** | The creation origin of the user who created this api token | 

## Example

```python
from openapi_client.models.api_token_get_user_response import ApiTokenGetUserResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTokenGetUserResponse from a JSON string
api_token_get_user_response_instance = ApiTokenGetUserResponse.from_json(json)
# print the JSON string representation of the object
print(ApiTokenGetUserResponse.to_json())

# convert the object into a dict
api_token_get_user_response_dict = api_token_get_user_response_instance.to_dict()
# create an instance of ApiTokenGetUserResponse from a dict
api_token_get_user_response_from_dict = ApiTokenGetUserResponse.from_dict(api_token_get_user_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


