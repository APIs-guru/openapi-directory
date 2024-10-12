# ObjectAccessControl

An access-control entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | **str** | The name of the bucket. | [optional] 
**domain** | **str** | The domain associated with the entity, if any. | [optional] 
**email** | **str** | The email address associated with the entity, if any. | [optional] 
**entity** | **str** | The entity holding the permission, in one of the following forms:  - user-userId  - user-email  - group-groupId  - group-email  - domain-domain  - project-team-projectId  - allUsers  - allAuthenticatedUsers Examples:  - The user liz@example.com would be user-liz@example.com.  - The group example@googlegroups.com would be group-example@googlegroups.com.  - To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com. | [optional] 
**entity_id** | **str** | The ID for the entity, if any. | [optional] 
**etag** | **str** | HTTP 1.1 Entity tag for the access-control entry. | [optional] 
**generation** | **str** | The content generation of the object, if applied to an object. | [optional] 
**id** | **str** | The ID of the access-control entry. | [optional] 
**kind** | **str** | The kind of item this is. For object access control entries, this is always storage#objectAccessControl. | [optional] [default to 'storage#objectAccessControl']
**object** | **str** | The name of the object, if applied to an object. | [optional] 
**project_team** | [**BucketAccessControlProjectTeam**](BucketAccessControlProjectTeam.md) |  | [optional] 
**role** | **str** | The access permission for the entity. | [optional] 
**self_link** | **str** | The link to this access-control entry. | [optional] 

## Example

```python
from openapi_client.models.object_access_control import ObjectAccessControl

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectAccessControl from a JSON string
object_access_control_instance = ObjectAccessControl.from_json(json)
# print the JSON string representation of the object
print(ObjectAccessControl.to_json())

# convert the object into a dict
object_access_control_dict = object_access_control_instance.to_dict()
# create an instance of ObjectAccessControl from a dict
object_access_control_from_dict = ObjectAccessControl.from_dict(object_access_control_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


