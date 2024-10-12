# EntityInfoProperties

The generic properties of an entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The friendly name of the management group. | [optional] 
**inherited_permissions** | [**Permissions**](Permissions.md) |  | [optional] 
**number_of_child_groups** | **int** | Number of children is the number of Groups that are exactly one level underneath the current Group. | [optional] 
**number_of_children** | **int** | Number of children is the number of Groups and Subscriptions that are exactly one level underneath the current Group. | [optional] 
**number_of_descendants** | **int** |  | [optional] 
**parent** | [**EntityParentGroupInfo**](EntityParentGroupInfo.md) |  | [optional] 
**parent_display_name_chain** | **List[str]** | The parent display name chain from the root group to the immediate parent | [optional] 
**parent_name_chain** | **List[str]** | The parent name chain from the root group to the immediate parent | [optional] 
**permissions** | [**Permissions**](Permissions.md) |  | [optional] 
**tenant_id** | **str** | The AAD Tenant ID associated with the entity. For example, 00000000-0000-0000-0000-000000000000 | [optional] 

## Example

```python
from openapi_client.models.entity_info_properties import EntityInfoProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EntityInfoProperties from a JSON string
entity_info_properties_instance = EntityInfoProperties.from_json(json)
# print the JSON string representation of the object
print(EntityInfoProperties.to_json())

# convert the object into a dict
entity_info_properties_dict = entity_info_properties_instance.to_dict()
# create an instance of EntityInfoProperties from a dict
entity_info_properties_from_dict = EntityInfoProperties.from_dict(entity_info_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


