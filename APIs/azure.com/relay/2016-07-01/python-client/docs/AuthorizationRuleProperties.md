# AuthorizationRuleProperties

AuthorizationRule properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rights** | **List[str]** | The rights associated with the rule. | 

## Example

```python
from openapi_client.models.authorization_rule_properties import AuthorizationRuleProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationRuleProperties from a JSON string
authorization_rule_properties_instance = AuthorizationRuleProperties.from_json(json)
# print the JSON string representation of the object
print(AuthorizationRuleProperties.to_json())

# convert the object into a dict
authorization_rule_properties_dict = authorization_rule_properties_instance.to_dict()
# create an instance of AuthorizationRuleProperties from a dict
authorization_rule_properties_from_dict = AuthorizationRuleProperties.from_dict(authorization_rule_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


