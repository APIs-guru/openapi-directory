# GoogleCloudDialogflowV3alpha1ConversationSignals

This message is used to hold all the Conversation Signals data, which will be converted to JSON and exported to BigQuery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**turn_signals** | [**GoogleCloudDialogflowV3alpha1TurnSignals**](GoogleCloudDialogflowV3alpha1TurnSignals.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v3alpha1_conversation_signals import GoogleCloudDialogflowV3alpha1ConversationSignals

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV3alpha1ConversationSignals from a JSON string
google_cloud_dialogflow_v3alpha1_conversation_signals_instance = GoogleCloudDialogflowV3alpha1ConversationSignals.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV3alpha1ConversationSignals.to_json())

# convert the object into a dict
google_cloud_dialogflow_v3alpha1_conversation_signals_dict = google_cloud_dialogflow_v3alpha1_conversation_signals_instance.to_dict()
# create an instance of GoogleCloudDialogflowV3alpha1ConversationSignals from a dict
google_cloud_dialogflow_v3alpha1_conversation_signals_from_dict = GoogleCloudDialogflowV3alpha1ConversationSignals.from_dict(google_cloud_dialogflow_v3alpha1_conversation_signals_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


