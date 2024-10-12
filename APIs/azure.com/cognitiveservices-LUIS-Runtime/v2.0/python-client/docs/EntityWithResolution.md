# EntityWithResolution


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_index** | **float** | The position of the last character of the matched entity within the utterance. | 
**entity** | **str** | Name of the entity, as defined in LUIS. | 
**start_index** | **float** | The position of the first character of the matched entity within the utterance. | 
**type** | **str** | Type of the entity, as defined in LUIS. | 
**resolution** | **object** | Resolution values for pre-built LUIS entities. | 

## Example

```python
from openapi_client.models.entity_with_resolution import EntityWithResolution

# TODO update the JSON string below
json = "{}"
# create an instance of EntityWithResolution from a JSON string
entity_with_resolution_instance = EntityWithResolution.from_json(json)
# print the JSON string representation of the object
print(EntityWithResolution.to_json())

# convert the object into a dict
entity_with_resolution_dict = entity_with_resolution_instance.to_dict()
# create an instance of EntityWithResolution from a dict
entity_with_resolution_from_dict = EntityWithResolution.from_dict(entity_with_resolution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


