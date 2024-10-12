# EntityUserLinkPermissions

Permissions the user has for this entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effective** | **List[str]** | Effective permissions represent all the permissions that a user has for this entity. These include any implied permissions (e.g., EDIT implies VIEW) or inherited permissions from the parent entity. Effective permissions are read-only. | [optional] [readonly] 
**local** | **List[str]** | Permissions that a user has been assigned at this very level. Does not include any implied or inherited permissions. Local permissions are modifiable. | [optional] 

## Example

```python
from openapi_client.models.entity_user_link_permissions import EntityUserLinkPermissions

# TODO update the JSON string below
json = "{}"
# create an instance of EntityUserLinkPermissions from a JSON string
entity_user_link_permissions_instance = EntityUserLinkPermissions.from_json(json)
# print the JSON string representation of the object
print(EntityUserLinkPermissions.to_json())

# convert the object into a dict
entity_user_link_permissions_dict = entity_user_link_permissions_instance.to_dict()
# create an instance of EntityUserLinkPermissions from a dict
entity_user_link_permissions_from_dict = EntityUserLinkPermissions.from_dict(entity_user_link_permissions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


