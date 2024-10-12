# AuthorizationRuleKeys

Namespace/Relay Connection String

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_name** | **str** | A string that describes the authorization rule | [optional] 
**primary_connection_string** | **str** | PrimaryConnectionString of the created Namespace AuthorizationRule. | [optional] 
**primary_key** | **str** | A base64-encoded 256-bit primary key for signing and validating the SAS token | [optional] 
**secondary_connection_string** | **str** | SecondaryConnectionString of the created Namespace AuthorizationRule | [optional] 
**secondary_key** | **str** | A base64-encoded 256-bit secondary key for signing and validating the SAS token | [optional] 

## Example

```python
from openapi_client.models.authorization_rule_keys import AuthorizationRuleKeys

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationRuleKeys from a JSON string
authorization_rule_keys_instance = AuthorizationRuleKeys.from_json(json)
# print the JSON string representation of the object
print(AuthorizationRuleKeys.to_json())

# convert the object into a dict
authorization_rule_keys_dict = authorization_rule_keys_instance.to_dict()
# create an instance of AuthorizationRuleKeys from a dict
authorization_rule_keys_from_dict = AuthorizationRuleKeys.from_dict(authorization_rule_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


