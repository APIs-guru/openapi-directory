# GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase

Represents an example that the agent is trained on to identify the intent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Output only. The unique identifier of the training phrase. | [optional] 
**parts** | [**List[GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart]**](GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart.md) | Required. The ordered list of training phrase parts. The parts are concatenated in order to form the training phrase. Note: The API does not automatically annotate training phrases like the Dialogflow Console does. Note: Do not forget to include whitespace at part boundaries, so the training phrase is well formatted when the parts are concatenated. If the training phrase does not need to be annotated with parameters, you just need a single part with only the Part.text field set. If you want to annotate the training phrase, you must create multiple parts, where the fields of each part are populated in one of two ways: - &#x60;Part.text&#x60; is set to a part of the phrase that has no parameters. - &#x60;Part.text&#x60; is set to a part of the phrase that you want to annotate, and the &#x60;parameter_id&#x60; field is set. | [optional] 
**repeat_count** | **int** | Indicates how many times this example was added to the intent. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_intent_training_phrase import GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase from a JSON string
google_cloud_dialogflow_cx_v3beta1_intent_training_phrase_instance = GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_intent_training_phrase_dict = google_cloud_dialogflow_cx_v3beta1_intent_training_phrase_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase from a dict
google_cloud_dialogflow_cx_v3beta1_intent_training_phrase_from_dict = GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase.from_dict(google_cloud_dialogflow_cx_v3beta1_intent_training_phrase_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


