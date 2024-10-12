# GoogleCloudDialogflowV2beta1ResponseMessage

Response messages from an automated agent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_interaction** | **object** | Indicates that interaction with the Dialogflow agent has ended. | [optional] 
**live_agent_handoff** | [**GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff**](GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff.md) |  | [optional] 
**mixed_audio** | [**GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio**](GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio.md) |  | [optional] 
**payload** | **Dict[str, object]** | Returns a response containing a custom, platform-specific payload. | [optional] 
**telephony_transfer_call** | [**GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall**](GoogleCloudDialogflowV2beta1ResponseMessageTelephonyTransferCall.md) |  | [optional] 
**text** | [**GoogleCloudDialogflowV2beta1ResponseMessageText**](GoogleCloudDialogflowV2beta1ResponseMessageText.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_response_message import GoogleCloudDialogflowV2beta1ResponseMessage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1ResponseMessage from a JSON string
google_cloud_dialogflow_v2beta1_response_message_instance = GoogleCloudDialogflowV2beta1ResponseMessage.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1ResponseMessage.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_response_message_dict = google_cloud_dialogflow_v2beta1_response_message_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1ResponseMessage from a dict
google_cloud_dialogflow_v2beta1_response_message_from_dict = GoogleCloudDialogflowV2beta1ResponseMessage.from_dict(google_cloud_dialogflow_v2beta1_response_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


