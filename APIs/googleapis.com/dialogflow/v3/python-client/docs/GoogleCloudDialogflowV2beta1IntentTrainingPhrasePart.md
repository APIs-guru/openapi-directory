# GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart

Represents a part of a training phrase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **str** | Optional. The parameter name for the value extracted from the annotated part of the example. This field is required for annotated parts of the training phrase. | [optional] 
**entity_type** | **str** | Optional. The entity type name prefixed with &#x60;@&#x60;. This field is required for annotated parts of the training phrase. | [optional] 
**text** | **str** | Required. The text for this part. | [optional] 
**user_defined** | **bool** | Optional. Indicates whether the text was manually annotated. This field is set to true when the Dialogflow Console is used to manually annotate the part. When creating an annotated part with the API, you must set this to true. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_training_phrase_part import GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart from a JSON string
google_cloud_dialogflow_v2beta1_intent_training_phrase_part_instance = GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_training_phrase_part_dict = google_cloud_dialogflow_v2beta1_intent_training_phrase_part_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart from a dict
google_cloud_dialogflow_v2beta1_intent_training_phrase_part_from_dict = GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart.from_dict(google_cloud_dialogflow_v2beta1_intent_training_phrase_part_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


