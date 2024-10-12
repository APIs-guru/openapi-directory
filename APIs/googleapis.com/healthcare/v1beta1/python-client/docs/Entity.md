# Entity

The candidate entities that an entity mention could link to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_id** | **str** | entity_id is a first class field entity_id uniquely identifies this concept and its meta-vocabulary. For example, \&quot;UMLS/C0000970\&quot;. | [optional] 
**preferred_term** | **str** | preferred_term is the preferred term for this concept. For example, \&quot;Acetaminophen\&quot;. For ad hoc entities formed by normalization, this is the most popular unnormalized string. | [optional] 
**vocabulary_codes** | **List[str]** | Vocabulary codes are first-class fields and differentiated from the concept unique identifier (entity_id). vocabulary_codes contains the representation of this concept in particular vocabularies, such as ICD-10, SNOMED-CT and RxNORM. These are prefixed by the name of the vocabulary, followed by the unique code within that vocabulary. For example, \&quot;RXNORM/A10334543\&quot;. | [optional] 

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


