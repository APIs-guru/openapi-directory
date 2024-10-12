# EntityRoleCreateObject

Object model for creating an entity role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The entity role name. | [optional] 

## Example

```python
from openapi_client.models.entity_role_create_object import EntityRoleCreateObject

# TODO update the JSON string below
json = "{}"
# create an instance of EntityRoleCreateObject from a JSON string
entity_role_create_object_instance = EntityRoleCreateObject.from_json(json)
# print the JSON string representation of the object
print(EntityRoleCreateObject.to_json())

# convert the object into a dict
entity_role_create_object_dict = entity_role_create_object_instance.to_dict()
# create an instance of EntityRoleCreateObject from a dict
entity_role_create_object_from_dict = EntityRoleCreateObject.from_dict(entity_role_create_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


