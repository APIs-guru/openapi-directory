# GoogleCloudDialogflowV2beta1IntentInput

Represents the intent to trigger programmatically rather than as a result of natural language processing. The intent input is only used for V3 agent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**intent** | **str** | Required. The unique identifier of the intent in V3 agent. Format: &#x60;projects//locations//locations//agents//intents/&#x60;. | [optional] 
**language_code** | **str** | Required. The language of this conversational query. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_input import GoogleCloudDialogflowV2beta1IntentInput

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentInput from a JSON string
google_cloud_dialogflow_v2beta1_intent_input_instance = GoogleCloudDialogflowV2beta1IntentInput.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentInput.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_input_dict = google_cloud_dialogflow_v2beta1_intent_input_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentInput from a dict
google_cloud_dialogflow_v2beta1_intent_input_from_dict = GoogleCloudDialogflowV2beta1IntentInput.from_dict(google_cloud_dialogflow_v2beta1_intent_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


