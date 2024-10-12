# EntityWithScore


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_index** | **float** | The position of the last character of the matched entity within the utterance. | 
**entity** | **str** | Name of the entity, as defined in LUIS. | 
**start_index** | **float** | The position of the first character of the matched entity within the utterance. | 
**type** | **str** | Type of the entity, as defined in LUIS. | 
**score** | **float** | Associated prediction score for the intent (float). | 

## Example

```python
from openapi_client.models.entity_with_score import EntityWithScore

# TODO update the JSON string below
json = "{}"
# create an instance of EntityWithScore from a JSON string
entity_with_score_instance = EntityWithScore.from_json(json)
# print the JSON string representation of the object
print(EntityWithScore.to_json())

# convert the object into a dict
entity_with_score_dict = entity_with_score_instance.to_dict()
# create an instance of EntityWithScore from a dict
entity_with_score_from_dict = EntityWithScore.from_dict(entity_with_score_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


