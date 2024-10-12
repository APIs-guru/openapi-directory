# SharedAccessAuthorizationRuleProperties

SharedAccessAuthorizationRule properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**claim_type** | **str** | A string that describes the claim type | [optional] [readonly] 
**claim_value** | **str** | A string that describes the claim value | [optional] [readonly] 
**created_time** | **str** | The created time for this rule | [optional] [readonly] 
**key_name** | **str** | A string that describes the authorization rule. | [optional] [readonly] 
**modified_time** | **str** | The last modified time for this rule | [optional] [readonly] 
**primary_key** | **str** | A base64-encoded 256-bit primary key for signing and validating the SAS token. | [optional] [readonly] 
**revision** | **int** | The revision number for the rule | [optional] [readonly] 
**rights** | **List[str]** | The rights associated with the rule. | [optional] 
**secondary_key** | **str** | A base64-encoded 256-bit primary key for signing and validating the SAS token. | [optional] [readonly] 

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


