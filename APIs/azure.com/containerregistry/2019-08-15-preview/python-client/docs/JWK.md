# JWK

A JSON web signature

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alg** | **str** | The algorithm used to sign or encrypt the JWT | [optional] 
**jwk** | [**JWKHeader**](JWKHeader.md) |  | [optional] 

## Example

```python
from openapi_client.models.jwk import JWK

# TODO update the JSON string below
json = "{}"
# create an instance of JWK from a JSON string
jwk_instance = JWK.from_json(json)
# print the JSON string representation of the object
print(JWK.to_json())

# convert the object into a dict
jwk_dict = jwk_instance.to_dict()
# create an instance of JWK from a dict
jwk_from_dict = JWK.from_dict(jwk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


