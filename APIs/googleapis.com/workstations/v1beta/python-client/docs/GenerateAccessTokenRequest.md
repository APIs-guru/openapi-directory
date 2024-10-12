# GenerateAccessTokenRequest

Request message for GenerateAccessToken.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expire_time** | **str** | Desired expiration time of the access token. This value must be at most 24 hours in the future. If a value is not specified, the token&#39;s expiration time will be set to a default value of 1 hour in the future. | [optional] 
**ttl** | **str** | Desired lifetime duration of the access token. This value must be at most 24 hours. If a value is not specified, the token&#39;s lifetime will be set to a default value of 1 hour. | [optional] 

## Example

```python
from openapi_client.models.generate_access_token_request import GenerateAccessTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateAccessTokenRequest from a JSON string
generate_access_token_request_instance = GenerateAccessTokenRequest.from_json(json)
# print the JSON string representation of the object
print(GenerateAccessTokenRequest.to_json())

# convert the object into a dict
generate_access_token_request_dict = generate_access_token_request_instance.to_dict()
# create an instance of GenerateAccessTokenRequest from a dict
generate_access_token_request_from_dict = GenerateAccessTokenRequest.from_dict(generate_access_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


