# GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse

The response message for Participants.SuggestDialogflowAssists.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_size** | **int** | Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the SuggestDialogflowAssistsRequest.context_size field in the request if there aren&#39;t that many messages in the conversation. | [optional] 
**dialogflow_assist_answers** | [**List[GoogleCloudDialogflowV2beta1DialogflowAssistAnswer]**](GoogleCloudDialogflowV2beta1DialogflowAssistAnswer.md) | Output only. Multiple reply options provided by Dialogflow assist service. The order is based on the rank of the model prediction. | [optional] 
**latest_message** | **str** | The name of the latest conversation message used to suggest answer. Format: &#x60;projects//locations//conversations//messages/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_suggest_dialogflow_assists_response import GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse from a JSON string
google_cloud_dialogflow_v2beta1_suggest_dialogflow_assists_response_instance = GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_suggest_dialogflow_assists_response_dict = google_cloud_dialogflow_v2beta1_suggest_dialogflow_assists_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse from a dict
google_cloud_dialogflow_v2beta1_suggest_dialogflow_assists_response_from_dict = GoogleCloudDialogflowV2beta1SuggestDialogflowAssistsResponse.from_dict(google_cloud_dialogflow_v2beta1_suggest_dialogflow_assists_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


