# SharedAccessAuthorizationRuleProperties

SharedAccessAuthorizationRule properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rights** | **List[str]** | The rights associated with the rule. | 

## Example

```python
from openapi_client.models.shared_access_authorization_rule_properties import SharedAccessAuthorizationRuleProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SharedAccessAuthorizationRuleProperties from a JSON string
shared_access_authorization_rule_properties_instance = SharedAccessAuthorizationRuleProperties.from_json(json)
# print the JSON string representation of the object
print(SharedAccessAuthorizationRuleProperties.to_json())

# convert the object into a dict
shared_access_authorization_rule_properties_dict = shared_access_authorization_rule_properties_instance.to_dict()
# create an instance of SharedAccessAuthorizationRuleProperties from a dict
shared_access_authorization_rule_properties_from_dict = SharedAccessAuthorizationRuleProperties.from_dict(shared_access_authorization_rule_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


