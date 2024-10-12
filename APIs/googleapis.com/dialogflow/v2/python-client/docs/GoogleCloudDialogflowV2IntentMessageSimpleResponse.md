# GoogleCloudDialogflowV2IntentMessageSimpleResponse

The simple response message containing speech or text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_text** | **str** | Optional. The text to display. | [optional] 
**ssml** | **str** | One of text_to_speech or ssml must be provided. Structured spoken response to the user in the SSML format. Mutually exclusive with text_to_speech. | [optional] 
**text_to_speech** | **str** | One of text_to_speech or ssml must be provided. The plain text of the speech output. Mutually exclusive with ssml. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_intent_message_simple_response import GoogleCloudDialogflowV2IntentMessageSimpleResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2IntentMessageSimpleResponse from a JSON string
google_cloud_dialogflow_v2_intent_message_simple_response_instance = GoogleCloudDialogflowV2IntentMessageSimpleResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2IntentMessageSimpleResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_intent_message_simple_response_dict = google_cloud_dialogflow_v2_intent_message_simple_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2IntentMessageSimpleResponse from a dict
google_cloud_dialogflow_v2_intent_message_simple_response_from_dict = GoogleCloudDialogflowV2IntentMessageSimpleResponse.from_dict(google_cloud_dialogflow_v2_intent_message_simple_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


