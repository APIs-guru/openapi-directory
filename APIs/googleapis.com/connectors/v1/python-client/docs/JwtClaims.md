# JwtClaims

JWT claims used for the jwt-bearer authorization grant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audience** | **str** | Value for the \&quot;aud\&quot; claim. | [optional] 
**issuer** | **str** | Value for the \&quot;iss\&quot; claim. | [optional] 
**subject** | **str** | Value for the \&quot;sub\&quot; claim. | [optional] 

## Example

```python
from openapi_client.models.jwt_claims import JwtClaims

# TODO update the JSON string below
json = "{}"
# create an instance of JwtClaims from a JSON string
jwt_claims_instance = JwtClaims.from_json(json)
# print the JSON string representation of the object
print(JwtClaims.to_json())

# convert the object into a dict
jwt_claims_dict = jwt_claims_instance.to_dict()
# create an instance of JwtClaims from a dict
jwt_claims_from_dict = JwtClaims.from_dict(jwt_claims_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


