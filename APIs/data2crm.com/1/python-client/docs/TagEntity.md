# TagEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Created At | [optional] 
**description** | **str** | Description | [optional] 
**entity** | **str** | Entity | [optional] 
**id** | **str** | Tag Identifier | [optional] 
**name** | **str** | Name | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 

## Example

```python
from openapi_client.models.tag_entity import TagEntity

# TODO update the JSON string below
json = "{}"
# create an instance of TagEntity from a JSON string
tag_entity_instance = TagEntity.from_json(json)
# print the JSON string representation of the object
print(TagEntity.to_json())

# convert the object into a dict
tag_entity_dict = tag_entity_instance.to_dict()
# create an instance of TagEntity from a dict
tag_entity_from_dict = TagEntity.from_dict(tag_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


