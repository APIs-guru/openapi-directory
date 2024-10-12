# EntityPrediction

A suggested entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_token_index** | **int** | The index within the utterance where the extracted entity ends. | 
**entity_name** | **str** | The entity&#39;s name | 
**phrase** | **str** | The actual token(s) that comprise the entity. | 
**start_token_index** | **int** | The index within the utterance where the extracted entity starts. | 

## Example

```python
from openapi_client.models.entity_prediction import EntityPrediction

# TODO update the JSON string below
json = "{}"
# create an instance of EntityPrediction from a JSON string
entity_prediction_instance = EntityPrediction.from_json(json)
# print the JSON string representation of the object
print(EntityPrediction.to_json())

# convert the object into a dict
entity_prediction_dict = entity_prediction_instance.to_dict()
# create an instance of EntityPrediction from a dict
entity_prediction_from_dict = EntityPrediction.from_dict(entity_prediction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


