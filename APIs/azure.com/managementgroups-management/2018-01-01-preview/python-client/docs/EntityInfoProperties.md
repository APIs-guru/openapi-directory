# EntityInfoProperties

The generic properties of an entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The friendly name of the management group. | [optional] 
**parent** | [**EntityParentGroupInfo**](EntityParentGroupInfo.md) |  | [optional] 
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


