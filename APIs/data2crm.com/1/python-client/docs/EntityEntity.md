# EntityEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Category | [optional] 
**collection** | **str** | Collection | [optional] 
**custom_field** | **object** |  | [optional] 
**data_cache** | **object** |  | [optional] 
**entity** | **str** | Entity | [optional] 
**id** | **str** | Entity Identifier | [optional] 
**internal_type** | **str** | Internal Type | [optional] 
**limit** | **int** | Limit | [optional] 
**methods** | **object** |  | [optional] 
**name** | **str** | Name | [optional] 
**similar_to** | **List[str]** | Percentage to unified entity | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.entity_entity import EntityEntity

# TODO update the JSON string below
json = "{}"
# create an instance of EntityEntity from a JSON string
entity_entity_instance = EntityEntity.from_json(json)
# print the JSON string representation of the object
print(EntityEntity.to_json())

# convert the object into a dict
entity_entity_dict = entity_entity_instance.to_dict()
# create an instance of EntityEntity from a dict
entity_entity_from_dict = EntityEntity.from_dict(entity_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


