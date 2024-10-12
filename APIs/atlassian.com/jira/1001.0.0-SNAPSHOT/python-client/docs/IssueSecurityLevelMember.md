# IssueSecurityLevelMember

Issue security level member.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**holder** | [**PermissionHolder**](PermissionHolder.md) | The user or group being granted the permission. It consists of a &#x60;type&#x60; and a type-dependent &#x60;parameter&#x60;. See [Holder object](../api-group-permission-schemes/#holder-object) in *Get all permission schemes* for more information. | 
**id** | **int** | The ID of the issue security level member. | 
**issue_security_level_id** | **int** | The ID of the issue security level. | 

## Example

```python
from openapi_client.models.issue_security_level_member import IssueSecurityLevelMember

# TODO update the JSON string below
json = "{}"
# create an instance of IssueSecurityLevelMember from a JSON string
issue_security_level_member_instance = IssueSecurityLevelMember.from_json(json)
# print the JSON string representation of the object
print(IssueSecurityLevelMember.to_json())

# convert the object into a dict
issue_security_level_member_dict = issue_security_level_member_instance.to_dict()
# create an instance of IssueSecurityLevelMember from a dict
issue_security_level_member_from_dict = IssueSecurityLevelMember.from_dict(issue_security_level_member_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


