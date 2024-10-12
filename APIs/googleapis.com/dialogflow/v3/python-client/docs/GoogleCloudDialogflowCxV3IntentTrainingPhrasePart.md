# GoogleCloudDialogflowCxV3IntentTrainingPhrasePart

Represents a part of a training phrase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameter_id** | **str** | The parameter used to annotate this part of the training phrase. This field is required for annotated parts of the training phrase. | [optional] 
**text** | **str** | Required. The text for this part. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_intent_training_phrase_part import GoogleCloudDialogflowCxV3IntentTrainingPhrasePart

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3IntentTrainingPhrasePart from a JSON string
google_cloud_dialogflow_cx_v3_intent_training_phrase_part_instance = GoogleCloudDialogflowCxV3IntentTrainingPhrasePart.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3IntentTrainingPhrasePart.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_intent_training_phrase_part_dict = google_cloud_dialogflow_cx_v3_intent_training_phrase_part_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3IntentTrainingPhrasePart from a dict
google_cloud_dialogflow_cx_v3_intent_training_phrase_part_from_dict = GoogleCloudDialogflowCxV3IntentTrainingPhrasePart.from_dict(google_cloud_dialogflow_cx_v3_intent_training_phrase_part_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


