# SharedAccessAuthorizationRuleProperties

SharedAccessAuthorizationRule properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**claim_type** | **str** | The type of the claim. | [optional] 
**claim_value** | **str** | The value of the claim. | [optional] 
**created_time** | **datetime** | The time at which the authorization rule was created. | [optional] 
**key_name** | **str** | The name of the key that was used. | [optional] 
**modified_time** | **datetime** | The most recent time the rule was updated. | [optional] 
**primary_key** | **str** | The primary key that was used. | [optional] 
**revision** | **int** | The revision number for the rule. | [optional] 
**rights** | **List[str]** | The rights associated with the rule. | [optional] 
**secondary_key** | **str** | The secondary key that was used. | [optional] 

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


