# AuthorizationRule

Description of a namespace authorization rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | Authorization rule properties. | 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.authorization_rule import AuthorizationRule

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationRule from a JSON string
authorization_rule_instance = AuthorizationRule.from_json(json)
# print the JSON string representation of the object
print(AuthorizationRule.to_json())

# convert the object into a dict
authorization_rule_dict = authorization_rule_instance.to_dict()
# create an instance of AuthorizationRule from a dict
authorization_rule_from_dict = AuthorizationRule.from_dict(authorization_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


