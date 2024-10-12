# EntityItemEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Created At | [optional] 
**id** | **str** | Entity Item Identifier | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 

## Example

```python
from openapi_client.models.entity_item_entity import EntityItemEntity

# TODO update the JSON string below
json = "{}"
# create an instance of EntityItemEntity from a JSON string
entity_item_entity_instance = EntityItemEntity.from_json(json)
# print the JSON string representation of the object
print(EntityItemEntity.to_json())

# convert the object into a dict
entity_item_entity_dict = entity_item_entity_instance.to_dict()
# create an instance of EntityItemEntity from a dict
entity_item_entity_from_dict = EntityItemEntity.from_dict(entity_item_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


