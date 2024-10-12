# SynonymEntity

Synonym's parent is a schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_features** | **Dict[str, object]** | Custom engine specific features. | [optional] 
**source_entity** | **str** | The name of the entity for which the synonym is being created (the source). | [optional] 
**source_type** | **str** | The type of the entity for which the synonym is being created (usually a table or a sequence). | [optional] 

## Example

```python
from openapi_client.models.synonym_entity import SynonymEntity

# TODO update the JSON string below
json = "{}"
# create an instance of SynonymEntity from a JSON string
synonym_entity_instance = SynonymEntity.from_json(json)
# print the JSON string representation of the object
print(SynonymEntity.to_json())

# convert the object into a dict
synonym_entity_dict = synonym_entity_instance.to_dict()
# create an instance of SynonymEntity from a dict
synonym_entity_from_dict = SynonymEntity.from_dict(synonym_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


