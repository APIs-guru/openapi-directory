# SharedAccessAuthorizationRuleGetResource

Description of a namespace authorization rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SharedAccessAuthorizationRuleGetProperties**](SharedAccessAuthorizationRuleGetProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.shared_access_authorization_rule_get_resource import SharedAccessAuthorizationRuleGetResource

# TODO update the JSON string below
json = "{}"
# create an instance of SharedAccessAuthorizationRuleGetResource from a JSON string
shared_access_authorization_rule_get_resource_instance = SharedAccessAuthorizationRuleGetResource.from_json(json)
# print the JSON string representation of the object
print(SharedAccessAuthorizationRuleGetResource.to_json())

# convert the object into a dict
shared_access_authorization_rule_get_resource_dict = shared_access_authorization_rule_get_resource_instance.to_dict()
# create an instance of SharedAccessAuthorizationRuleGetResource from a dict
shared_access_authorization_rule_get_resource_from_dict = SharedAccessAuthorizationRuleGetResource.from_dict(shared_access_authorization_rule_get_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


