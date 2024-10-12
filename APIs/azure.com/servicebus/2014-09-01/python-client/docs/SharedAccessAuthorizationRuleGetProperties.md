# SharedAccessAuthorizationRuleGetProperties

SharedAccessAuthorizationRule properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rights** | **List[str]** | The rights associated with the rule. | 

## Example

```python
from openapi_client.models.shared_access_authorization_rule_get_properties import SharedAccessAuthorizationRuleGetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SharedAccessAuthorizationRuleGetProperties from a JSON string
shared_access_authorization_rule_get_properties_instance = SharedAccessAuthorizationRuleGetProperties.from_json(json)
# print the JSON string representation of the object
print(SharedAccessAuthorizationRuleGetProperties.to_json())

# convert the object into a dict
shared_access_authorization_rule_get_properties_dict = shared_access_authorization_rule_get_properties_instance.to_dict()
# create an instance of SharedAccessAuthorizationRuleGetProperties from a dict
shared_access_authorization_rule_get_properties_from_dict = SharedAccessAuthorizationRuleGetProperties.from_dict(shared_access_authorization_rule_get_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


