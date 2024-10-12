# GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff

Indicates that the conversation should be handed off to a human agent. Dialogflow only uses this to determine which conversations were handed off to a human agent for measurement purposes. What else to do with this signal is up to you and your handoff procedures. You may set this, for example: * In the entry fulfillment of a CX Page if entering the page indicates something went extremely wrong in the conversation. * In a webhook response when you determine that the customer issue can only be handled by a human.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | **Dict[str, object]** | Custom metadata for your handoff procedure. Dialogflow doesn&#39;t impose any structure on this. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_response_message_live_agent_handoff import GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff from a JSON string
google_cloud_dialogflow_v2beta1_response_message_live_agent_handoff_instance = GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_response_message_live_agent_handoff_dict = google_cloud_dialogflow_v2beta1_response_message_live_agent_handoff_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff from a dict
google_cloud_dialogflow_v2beta1_response_message_live_agent_handoff_from_dict = GoogleCloudDialogflowV2beta1ResponseMessageLiveAgentHandoff.from_dict(google_cloud_dialogflow_v2beta1_response_message_live_agent_handoff_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


