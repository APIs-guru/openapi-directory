# AclRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the resource. | [optional] 
**id** | **str** | Identifier of the Access Control List (ACL) rule. See Sharing calendars. | [optional] 
**kind** | **str** | Type of the resource (\&quot;calendar#aclRule\&quot;). | [optional] [default to 'calendar#aclRule']
**role** | **str** | The role assigned to the scope. Possible values are:   - \&quot;none\&quot; - Provides no access.  - \&quot;freeBusyReader\&quot; - Provides read access to free/busy information.  - \&quot;reader\&quot; - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.  - \&quot;writer\&quot; - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.  - \&quot;owner\&quot; - Provides ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs. | [optional] 
**scope** | [**AclRuleScope**](AclRuleScope.md) |  | [optional] 

## Example

```python
from openapi_client.models.acl_rule import AclRule

# TODO update the JSON string below
json = "{}"
# create an instance of AclRule from a JSON string
acl_rule_instance = AclRule.from_json(json)
# print the JSON string representation of the object
print(AclRule.to_json())

# convert the object into a dict
acl_rule_dict = acl_rule_instance.to_dict()
# create an instance of AclRule from a dict
acl_rule_from_dict = AclRule.from_dict(acl_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


