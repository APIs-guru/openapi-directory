# EntityModel

An entity extracted from the utterance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_index** | **int** | The position of the last character of the matched entity within the utterance. | 
**entity** | **str** | Name of the entity, as defined in LUIS. | 
**start_index** | **int** | The position of the first character of the matched entity within the utterance. | 
**type** | **str** | Type of the entity, as defined in LUIS. | 

## Example

```python
from openapi_client.models.entity_model import EntityModel

# TODO update the JSON string below
json = "{}"
# create an instance of EntityModel from a JSON string
entity_model_instance = EntityModel.from_json(json)
# print the JSON string representation of the object
print(EntityModel.to_json())

# convert the object into a dict
entity_model_dict = entity_model_instance.to_dict()
# create an instance of EntityModel from a dict
entity_model_from_dict = EntityModel.from_dict(entity_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


