# AnalyzeEntitiesResponse

Includes recognized entity mentions and relationships between them.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[Entity]**](Entity.md) | The union of all the candidate entities that the entity_mentions in this response could link to. These are UMLS concepts or normalized mention content. | [optional] 
**entity_mentions** | [**List[EntityMention]**](EntityMention.md) | The &#x60;entity_mentions&#x60; field contains all the annotated medical entities that were mentioned in the provided document. | [optional] 
**fhir_bundle** | **str** | The FHIR bundle ([&#x60;R4&#x60;](http://hl7.org/fhir/R4/bundle.html)) that includes all the entities, the entity mentions, and the relationships in JSON format. | [optional] 
**relationships** | [**List[EntityMentionRelationship]**](EntityMentionRelationship.md) | relationships contains all the binary relationships that were identified between entity mentions within the provided document. | [optional] 

## Example

```python
from openapi_client.models.analyze_entities_response import AnalyzeEntitiesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeEntitiesResponse from a JSON string
analyze_entities_response_instance = AnalyzeEntitiesResponse.from_json(json)
# print the JSON string representation of the object
print(AnalyzeEntitiesResponse.to_json())

# convert the object into a dict
analyze_entities_response_dict = analyze_entities_response_instance.to_dict()
# create an instance of AnalyzeEntitiesResponse from a dict
analyze_entities_response_from_dict = AnalyzeEntitiesResponse.from_dict(analyze_entities_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


