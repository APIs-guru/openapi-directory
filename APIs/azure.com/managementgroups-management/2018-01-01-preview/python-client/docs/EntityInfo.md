# EntityInfo

The entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The fully qualified ID for the entity.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000 | [optional] [readonly] 
**name** | **str** | The name of the entity. For example, 00000000-0000-0000-0000-000000000000 | [optional] [readonly] 
**properties** | [**EntityInfoProperties**](EntityInfoProperties.md) |  | [optional] 
**type** | **str** | The type of the resource. For example, /providers/Microsoft.Management/managementGroups | [optional] [readonly] 

## Example

```python
from openapi_client.models.entity_info import EntityInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EntityInfo from a JSON string
entity_info_instance = EntityInfo.from_json(json)
# print the JSON string representation of the object
print(EntityInfo.to_json())

# convert the object into a dict
entity_info_dict = entity_info_instance.to_dict()
# create an instance of EntityInfo from a dict
entity_info_from_dict = EntityInfo.from_dict(entity_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


