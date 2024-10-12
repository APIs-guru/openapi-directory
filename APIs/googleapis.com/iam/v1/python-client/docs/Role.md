# Role

A role in the Identity and Access Management API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted** | **bool** | The current deleted state of the role. This field is read only. It will be ignored in calls to CreateRole and UpdateRole. | [optional] 
**description** | **str** | Optional. A human-readable description for the role. | [optional] 
**etag** | **bytearray** | Used to perform a consistent read-modify-write. | [optional] 
**included_permissions** | **List[str]** | The names of the permissions this role grants when bound in an IAM policy. | [optional] 
**name** | **str** | The name of the role. When &#x60;Role&#x60; is used in &#x60;CreateRole&#x60;, the role name must not be set. When &#x60;Role&#x60; is used in output and other input such as &#x60;UpdateRole&#x60;, the role name is the complete path. For example, &#x60;roles/logging.viewer&#x60; for predefined roles, &#x60;organizations/{ORGANIZATION_ID}/roles/my-role&#x60; for organization-level custom roles, and &#x60;projects/{PROJECT_ID}/roles/my-role&#x60; for project-level custom roles. | [optional] 
**stage** | **str** | The current launch stage of the role. If the &#x60;ALPHA&#x60; launch stage has been selected for a role, the &#x60;stage&#x60; field will not be included in the returned definition for the role. | [optional] 
**title** | **str** | Optional. A human-readable title for the role. Typically this is limited to 100 UTF-8 bytes. | [optional] 

## Example

```python
from openapi_client.models.role import Role

# TODO update the JSON string below
json = "{}"
# create an instance of Role from a JSON string
role_instance = Role.from_json(json)
# print the JSON string representation of the object
print(Role.to_json())

# convert the object into a dict
role_dict = role_instance.to_dict()
# create an instance of Role from a dict
role_from_dict = Role.from_dict(role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


