# GoogleCloudDialogflowCxV3beta1IntentInput

Represents the intent to trigger programmatically rather than as a result of natural language processing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**intent** | **str** | Required. The unique identifier of the intent. Format: &#x60;projects//locations//agents//intents/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_intent_input import GoogleCloudDialogflowCxV3beta1IntentInput

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1IntentInput from a JSON string
google_cloud_dialogflow_cx_v3beta1_intent_input_instance = GoogleCloudDialogflowCxV3beta1IntentInput.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1IntentInput.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_intent_input_dict = google_cloud_dialogflow_cx_v3beta1_intent_input_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1IntentInput from a dict
google_cloud_dialogflow_cx_v3beta1_intent_input_from_dict = GoogleCloudDialogflowCxV3beta1IntentInput.from_dict(google_cloud_dialogflow_cx_v3beta1_intent_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


