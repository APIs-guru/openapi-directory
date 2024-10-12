# SharedAccessAuthorizationRuleResource

Description of a Namespace AuthorizationRules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Gets or sets the id of the created Namespace AuthorizationRules. | [optional] 
**location** | **str** | Gets or sets datacenter location of the Namespace AuthorizationRules. | [optional] 
**name** | **str** | Gets or sets name of the Namespace AuthorizationRules. | [optional] 
**properties** | [**SharedAccessAuthorizationRuleProperties**](SharedAccessAuthorizationRuleProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Gets or sets tags of the Namespace AuthorizationRules. | [optional] 
**type** | **str** | Gets or sets resource type of the Namespace AuthorizationRules. | [optional] 

## Example

```python
from openapi_client.models.shared_access_authorization_rule_resource import SharedAccessAuthorizationRuleResource

# TODO update the JSON string below
json = "{}"
# create an instance of SharedAccessAuthorizationRuleResource from a JSON string
shared_access_authorization_rule_resource_instance = SharedAccessAuthorizationRuleResource.from_json(json)
# print the JSON string representation of the object
print(SharedAccessAuthorizationRuleResource.to_json())

# convert the object into a dict
shared_access_authorization_rule_resource_dict = shared_access_authorization_rule_resource_instance.to_dict()
# create an instance of SharedAccessAuthorizationRuleResource from a dict
shared_access_authorization_rule_resource_from_dict = SharedAccessAuthorizationRuleResource.from_dict(shared_access_authorization_rule_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


