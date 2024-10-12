# JwtResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jwt** | **str** | A string representing a JWT of the format described at https://developers.google.com/wallet/reference/rest/v1/Jwt | [optional] 

## Example

```python
from openapi_client.models.jwt_resource import JwtResource

# TODO update the JSON string below
json = "{}"
# create an instance of JwtResource from a JSON string
jwt_resource_instance = JwtResource.from_json(json)
# print the JSON string representation of the object
print(JwtResource.to_json())

# convert the object into a dict
jwt_resource_dict = jwt_resource_instance.to_dict()
# create an instance of JwtResource from a dict
jwt_resource_from_dict = JwtResource.from_dict(jwt_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


