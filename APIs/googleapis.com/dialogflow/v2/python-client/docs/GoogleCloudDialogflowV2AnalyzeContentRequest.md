# GoogleCloudDialogflowV2AnalyzeContentRequest

The request message for Participants.AnalyzeContent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assist_query_params** | [**GoogleCloudDialogflowV2AssistQueryParameters**](GoogleCloudDialogflowV2AssistQueryParameters.md) |  | [optional] 
**cx_parameters** | **Dict[str, object]** | Additional parameters to be put into Dialogflow CX session parameters. To remove a parameter from the session, clients should explicitly set the parameter value to null. Note: this field should only be used if you are connecting to a Dialogflow CX agent. | [optional] 
**event_input** | [**GoogleCloudDialogflowV2EventInput**](GoogleCloudDialogflowV2EventInput.md) |  | [optional] 
**var_query_params** | [**GoogleCloudDialogflowV2QueryParameters**](GoogleCloudDialogflowV2QueryParameters.md) |  | [optional] 
**reply_audio_config** | [**GoogleCloudDialogflowV2OutputAudioConfig**](GoogleCloudDialogflowV2OutputAudioConfig.md) |  | [optional] 
**request_id** | **str** | A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is only idempotent if a &#x60;request_id&#x60; is provided. | [optional] 
**suggestion_input** | [**GoogleCloudDialogflowV2SuggestionInput**](GoogleCloudDialogflowV2SuggestionInput.md) |  | [optional] 
**text_input** | [**GoogleCloudDialogflowV2TextInput**](GoogleCloudDialogflowV2TextInput.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_analyze_content_request import GoogleCloudDialogflowV2AnalyzeContentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2AnalyzeContentRequest from a JSON string
google_cloud_dialogflow_v2_analyze_content_request_instance = GoogleCloudDialogflowV2AnalyzeContentRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2AnalyzeContentRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_analyze_content_request_dict = google_cloud_dialogflow_v2_analyze_content_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2AnalyzeContentRequest from a dict
google_cloud_dialogflow_v2_analyze_content_request_from_dict = GoogleCloudDialogflowV2AnalyzeContentRequest.from_dict(google_cloud_dialogflow_v2_analyze_content_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


