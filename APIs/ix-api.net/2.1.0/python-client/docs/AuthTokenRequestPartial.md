# AuthTokenRequestPartial

AuthTokenRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** |  | [optional] 
**api_secret** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.auth_token_request_partial import AuthTokenRequestPartial

# TODO update the JSON string below
json = "{}"
# create an instance of AuthTokenRequestPartial from a JSON string
auth_token_request_partial_instance = AuthTokenRequestPartial.from_json(json)
# print the JSON string representation of the object
print(AuthTokenRequestPartial.to_json())

# convert the object into a dict
auth_token_request_partial_dict = auth_token_request_partial_instance.to_dict()
# create an instance of AuthTokenRequestPartial from a dict
auth_token_request_partial_from_dict = AuthTokenRequestPartial.from_dict(auth_token_request_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


