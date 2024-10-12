# LabeledUtterance

A prediction and label pair of an example.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_labels** | [**List[EntityLabel]**](EntityLabel.md) | The entities matching the example. | [optional] 
**entity_predictions** | [**List[EntityPrediction]**](EntityPrediction.md) | List of suggested entities. | [optional] 
**id** | **int** | ID of Labeled Utterance. | [optional] 
**intent_label** | **str** | The intent matching the example. | [optional] 
**intent_predictions** | [**List[IntentPrediction]**](IntentPrediction.md) | List of suggested intents. | [optional] 
**text** | **str** | The utterance. For example, \&quot;What&#39;s the weather like in seattle?\&quot; | [optional] 
**tokenized_text** | **List[str]** | The utterance tokenized. | [optional] 

## Example

```python
from openapi_client.models.labeled_utterance import LabeledUtterance

# TODO update the JSON string below
json = "{}"
# create an instance of LabeledUtterance from a JSON string
labeled_utterance_instance = LabeledUtterance.from_json(json)
# print the JSON string representation of the object
print(LabeledUtterance.to_json())

# convert the object into a dict
labeled_utterance_dict = labeled_utterance_instance.to_dict()
# create an instance of LabeledUtterance from a dict
labeled_utterance_from_dict = LabeledUtterance.from_dict(labeled_utterance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


