# AuthorizationValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**url_matcher** | **object** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.authorization_value import AuthorizationValue

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationValue from a JSON string
authorization_value_instance = AuthorizationValue.from_json(json)
# print the JSON string representation of the object
print(AuthorizationValue.to_json())

# convert the object into a dict
authorization_value_dict = authorization_value_instance.to_dict()
# create an instance of AuthorizationValue from a dict
authorization_value_from_dict = AuthorizationValue.from_dict(authorization_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


