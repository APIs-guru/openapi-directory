# IntentPrediction

A suggested intent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The intent&#39;s name | [optional] 
**score** | **float** | The intent&#39;s score, based on the prediction model. | [optional] 

## Example

```python
from openapi_client.models.intent_prediction import IntentPrediction

# TODO update the JSON string below
json = "{}"
# create an instance of IntentPrediction from a JSON string
intent_prediction_instance = IntentPrediction.from_json(json)
# print the JSON string representation of the object
print(IntentPrediction.to_json())

# convert the object into a dict
intent_prediction_dict = intent_prediction_instance.to_dict()
# create an instance of IntentPrediction from a dict
intent_prediction_from_dict = IntentPrediction.from_dict(intent_prediction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


