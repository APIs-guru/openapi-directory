# FieldItemEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Created At | [optional] 
**description** | **str** | Description | [optional] 
**entity** | **str** | Entity | [optional] 
**id** | **str** | Field Item Identifier | [optional] 
**label** | **str** | Label | [optional] 
**name** | **str** | Name | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 

## Example

```python
from openapi_client.models.field_item_entity import FieldItemEntity

# TODO update the JSON string below
json = "{}"
# create an instance of FieldItemEntity from a JSON string
field_item_entity_instance = FieldItemEntity.from_json(json)
# print the JSON string representation of the object
print(FieldItemEntity.to_json())

# convert the object into a dict
field_item_entity_dict = field_item_entity_instance.to_dict()
# create an instance of FieldItemEntity from a dict
field_item_entity_from_dict = FieldItemEntity.from_dict(field_item_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


