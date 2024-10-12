# GoogleCloudDialogflowCxV3ConversationSignals

This message is used to hold all the Conversation Signals data, which will be converted to JSON and exported to BigQuery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**turn_signals** | [**GoogleCloudDialogflowCxV3TurnSignals**](GoogleCloudDialogflowCxV3TurnSignals.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_conversation_signals import GoogleCloudDialogflowCxV3ConversationSignals

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ConversationSignals from a JSON string
google_cloud_dialogflow_cx_v3_conversation_signals_instance = GoogleCloudDialogflowCxV3ConversationSignals.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ConversationSignals.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_conversation_signals_dict = google_cloud_dialogflow_cx_v3_conversation_signals_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ConversationSignals from a dict
google_cloud_dialogflow_cx_v3_conversation_signals_from_dict = GoogleCloudDialogflowCxV3ConversationSignals.from_dict(google_cloud_dialogflow_cx_v3_conversation_signals_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


