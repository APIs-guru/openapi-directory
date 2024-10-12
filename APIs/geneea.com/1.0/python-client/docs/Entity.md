# Entity

The named entity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Disambiguated and standardized form of the entity | 
**links** | **object** | Disambiguation links for the entity, e.g. its DBpedia page | 
**sentiment** | **float** | Detected sentiment of the entity (value from -1.0 to 1.0) | [optional] 
**text_offset** | **int** | Character offset in the text (starting from 0) | 
**type** | **str** | Detected type of the entity | 

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


