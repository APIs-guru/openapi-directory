# SBAuthorizationRule

Description of a namespace authorization rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | AuthorizationRule properties. | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.sb_authorization_rule import SBAuthorizationRule

# TODO update the JSON string below
json = "{}"
# create an instance of SBAuthorizationRule from a JSON string
sb_authorization_rule_instance = SBAuthorizationRule.from_json(json)
# print the JSON string representation of the object
print(SBAuthorizationRule.to_json())

# convert the object into a dict
sb_authorization_rule_dict = sb_authorization_rule_instance.to_dict()
# create an instance of SBAuthorizationRule from a dict
sb_authorization_rule_from_dict = SBAuthorizationRule.from_dict(sb_authorization_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


