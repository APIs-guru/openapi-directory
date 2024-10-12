# SharedAccessAuthorizationRuleCreateOrUpdateParameters

Parameters supplied to the CreateOrUpdate Namespace AuthorizationRules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SharedAccessAuthorizationRuleProperties**](SharedAccessAuthorizationRuleProperties.md) |  | 

## Example

```python
from openapi_client.models.shared_access_authorization_rule_create_or_update_parameters import SharedAccessAuthorizationRuleCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SharedAccessAuthorizationRuleCreateOrUpdateParameters from a JSON string
shared_access_authorization_rule_create_or_update_parameters_instance = SharedAccessAuthorizationRuleCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(SharedAccessAuthorizationRuleCreateOrUpdateParameters.to_json())

# convert the object into a dict
shared_access_authorization_rule_create_or_update_parameters_dict = shared_access_authorization_rule_create_or_update_parameters_instance.to_dict()
# create an instance of SharedAccessAuthorizationRuleCreateOrUpdateParameters from a dict
shared_access_authorization_rule_create_or_update_parameters_from_dict = SharedAccessAuthorizationRuleCreateOrUpdateParameters.from_dict(shared_access_authorization_rule_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


