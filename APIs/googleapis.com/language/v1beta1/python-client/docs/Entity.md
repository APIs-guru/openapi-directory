# Entity

Represents a phrase in the text that is a known entity, such as a person, an organization, or location. The API associates information, such as salience and mentions, with entities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mentions** | [**List[EntityMention]**](EntityMention.md) | The mentions of this entity in the input document. The API currently supports proper noun mentions. | [optional] 
**metadata** | **Dict[str, str]** | Metadata associated with the entity. Currently, Wikipedia URLs and Knowledge Graph MIDs are provided, if available. The associated keys are \&quot;wikipedia_url\&quot; and \&quot;mid\&quot;, respectively. | [optional] 
**name** | **str** | The representative name for the entity. | [optional] 
**salience** | **float** | The salience score associated with the entity in the [0, 1.0] range. The salience score for an entity provides information about the importance or centrality of that entity to the entire document text. Scores closer to 0 are less salient, while scores closer to 1.0 are highly salient. | [optional] 
**type** | **str** | The entity type. | [optional] 

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


