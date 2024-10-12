# IntentClassifier

Intent Classifier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_prebuilt_domain_name** | **str** | The domain name. | [optional] 
**custom_prebuilt_model_name** | **str** | The intent name or entity name. | [optional] 
**id** | **str** | The ID of the Entity Model. | 
**name** | **str** | Name of the Entity Model. | [optional] 
**readable_type** | [**ReadableType**](ReadableType.md) |  | 
**type_id** | **int** | The type ID of the Entity Model. | [optional] 

## Example

```python
from openapi_client.models.intent_classifier import IntentClassifier

# TODO update the JSON string below
json = "{}"
# create an instance of IntentClassifier from a JSON string
intent_classifier_instance = IntentClassifier.from_json(json)
# print the JSON string representation of the object
print(IntentClassifier.to_json())

# convert the object into a dict
intent_classifier_dict = intent_classifier_instance.to_dict()
# create an instance of IntentClassifier from a dict
intent_classifier_from_dict = IntentClassifier.from_dict(intent_classifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


