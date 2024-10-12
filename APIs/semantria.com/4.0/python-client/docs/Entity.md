# Entity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | The count of occurrences of the entity across the documents | 
**entity_type** | **str** | Type of the entity (Company, Person, Place, Product, etc.) | 
**label** | **str** | Descriptive label for the entity, if applicable | 
**mentions** | [**List[Mention]**](Mention.md) | Returns the genuine forms of entity mentioned across the documents | 
**negative_count** | **int** | The count of negative occurrences of the entity across the documents | 
**neutral_count** | **int** | The count of neutral occurrences of the entity across the documents | 
**positive_count** | **int** | The count of positive occurrences of the entity across the documents | 
**title** | **str** | Normalized form of the entity. It is the normalized entity title | 
**type** | **str** | Type of the entity; can be either “named” or “user” (reserved for future usage) | 

## Example

```python
from openapi_client.models.entity import Entity

# TODO update the JSON string below
json = "{}"
# create an instance of Entity from a JSON string
entity_instance = Entity.from_json(json)
# print the JSON string representation of the object
print(Entity.to_json())

# convert the object into a dict
entity_dict = entity_instance.to_dict()
# create an instance of Entity from a dict
entity_from_dict = Entity.from_dict(entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


