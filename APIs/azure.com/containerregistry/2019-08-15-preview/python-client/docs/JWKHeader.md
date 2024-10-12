# JWKHeader

JSON web key parameter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crv** | **str** | crv value | [optional] 
**kid** | **str** | kid value | [optional] 
**kty** | **str** | kty value | [optional] 
**x** | **str** | x value | [optional] 
**y** | **str** | y value | [optional] 

## Example

```python
from openapi_client.models.jwk_header import JWKHeader

# TODO update the JSON string below
json = "{}"
# create an instance of JWKHeader from a JSON string
jwk_header_instance = JWKHeader.from_json(json)
# print the JSON string representation of the object
print(JWKHeader.to_json())

# convert the object into a dict
jwk_header_dict = jwk_header_instance.to_dict()
# create an instance of JWKHeader from a dict
jwk_header_from_dict = JWKHeader.from_dict(jwk_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


