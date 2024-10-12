# ValidatedApiTokenResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**claims** | [**List[ValidatedApiTokenResponseClaimsInner]**](ValidatedApiTokenResponseClaimsInner.md) | Collection of attributes that describe the principal of the specified API Token | 
**principal_id** | **str** | The ID of the owner of the API Token (user_id or app_id) | 
**principal_type** | **str** | Indicates the type of the principal (app or user) | 
**token_id** | **str** | The token&#39;s unique id (UUID) | 
**token_scope** | **List[str]** | The token&#39;s scope. A list of allowed roles. | 

## Example

```python
from openapi_client.models.validated_api_token_response import ValidatedApiTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ValidatedApiTokenResponse from a JSON string
validated_api_token_response_instance = ValidatedApiTokenResponse.from_json(json)
# print the JSON string representation of the object
print(ValidatedApiTokenResponse.to_json())

# convert the object into a dict
validated_api_token_response_dict = validated_api_token_response_instance.to_dict()
# create an instance of ValidatedApiTokenResponse from a dict
validated_api_token_response_from_dict = ValidatedApiTokenResponse.from_dict(validated_api_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


