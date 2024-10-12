# PushToken

PushToken in JWT format, self-signed.  

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aud** | **str** | audience (URI) | 
**exp** | **int** |  | [optional] 
**iat** | **int** |  | [optional] 
**iss** | **str** | issuer (URI) | 
**nbf** | **int** |  | [optional] 
**sub** | **str** | UUID and public signing key | 

## Example

```python
from openapi_client.models.push_token import PushToken

# TODO update the JSON string below
json = "{}"
# create an instance of PushToken from a JSON string
push_token_instance = PushToken.from_json(json)
# print the JSON string representation of the object
print(PushToken.to_json())

# convert the object into a dict
push_token_dict = push_token_instance.to_dict()
# create an instance of PushToken from a dict
push_token_from_dict = PushToken.from_dict(push_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


