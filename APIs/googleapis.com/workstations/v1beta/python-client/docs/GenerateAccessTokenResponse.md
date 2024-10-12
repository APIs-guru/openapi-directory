# GenerateAccessTokenResponse

Response message for GenerateAccessToken.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | The generated bearer access token. To use this token, include it in an Authorization header of an HTTP request sent to the associated workstation&#39;s hostname—for example, &#x60;Authorization: Bearer &#x60;. | [optional] 
**expire_time** | **str** | Time at which the generated token will expire. | [optional] 

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


