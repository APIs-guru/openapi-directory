# GenerateAccessTokenResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | The OAuth 2.0 access token. | [optional] 
**expire_time** | **str** | Token expiration time. The expiration time is always set. | [optional] 

## Example

```python
from openapi_client.models.generate_access_token_response import GenerateAccessTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateAccessTokenResponse from a JSON string
generate_access_token_response_instance = GenerateAccessTokenResponse.from_json(json)
# print the JSON string representation of the object
print(GenerateAccessTokenResponse.to_json())

# convert the object into a dict
generate_access_token_response_dict = generate_access_token_response_instance.to_dict()
# create an instance of GenerateAccessTokenResponse from a dict
generate_access_token_response_from_dict = GenerateAccessTokenResponse.from_dict(generate_access_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


