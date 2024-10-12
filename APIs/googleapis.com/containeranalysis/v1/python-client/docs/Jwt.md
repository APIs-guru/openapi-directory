# Jwt


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compact_jwt** | **str** | The compact encoding of a JWS, which is always three base64 encoded strings joined by periods. For details, see: https://tools.ietf.org/html/rfc7515.html#section-3.1 | [optional] 

## Example

```python
from openapi_client.models.jwt import Jwt

# TODO update the JSON string below
json = "{}"
# create an instance of Jwt from a JSON string
jwt_instance = Jwt.from_json(json)
# print the JSON string representation of the object
print(Jwt.to_json())

# convert the object into a dict
jwt_dict = jwt_instance.to_dict()
# create an instance of Jwt from a dict
jwt_from_dict = Jwt.from_dict(jwt_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


