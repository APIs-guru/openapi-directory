# AclRuleScope

The extent to which calendar access is granted by this ACL rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of the scope. Possible values are:   - \&quot;default\&quot; - The public scope. This is the default value.  - \&quot;user\&quot; - Limits the scope to a single user.  - \&quot;group\&quot; - Limits the scope to a group.  - \&quot;domain\&quot; - Limits the scope to a domain.  Note: The permissions granted to the \&quot;default\&quot;, or public, scope apply to any user, authenticated or not. | [optional] 
**value** | **str** | The email address of a user or group, or the name of a domain, depending on the scope type. Omitted for type \&quot;default\&quot;. | [optional] 

## Example

```python
from openapi_client.models.acl_rule_scope import AclRuleScope

# TODO update the JSON string below
json = "{}"
# create an instance of AclRuleScope from a JSON string
acl_rule_scope_instance = AclRuleScope.from_json(json)
# print the JSON string representation of the object
print(AclRuleScope.to_json())

# convert the object into a dict
acl_rule_scope_dict = acl_rule_scope_instance.to_dict()
# create an instance of AclRuleScope from a dict
acl_rule_scope_from_dict = AclRuleScope.from_dict(acl_rule_scope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


