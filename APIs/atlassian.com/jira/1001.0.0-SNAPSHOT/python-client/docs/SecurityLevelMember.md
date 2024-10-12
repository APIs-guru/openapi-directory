# SecurityLevelMember

Issue security level member.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**holder** | [**PermissionHolder**](PermissionHolder.md) | The user or group being granted the permission. It consists of a &#x60;type&#x60; and a type-dependent &#x60;parameter&#x60;. See [Holder object](../api-group-permission-schemes/#holder-object) in *Get all permission schemes* for more information. | [readonly] 
**id** | **str** | The ID of the issue security level member. | [readonly] 
**issue_security_level_id** | **str** | The ID of the issue security level. | [readonly] 
**issue_security_scheme_id** | **str** | The ID of the issue security scheme. | [readonly] 

## Example

```python
from openapi_client.models.security_level_member import SecurityLevelMember

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityLevelMember from a JSON string
security_level_member_instance = SecurityLevelMember.from_json(json)
# print the JSON string representation of the object
print(SecurityLevelMember.to_json())

# convert the object into a dict
security_level_member_dict = security_level_member_instance.to_dict()
# create an instance of SecurityLevelMember from a dict
security_level_member_from_dict = SecurityLevelMember.from_dict(security_level_member_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


