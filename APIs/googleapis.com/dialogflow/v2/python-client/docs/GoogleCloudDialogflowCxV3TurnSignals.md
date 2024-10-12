# GoogleCloudDialogflowCxV3TurnSignals

Collection of all signals that were extracted for a single turn of the conversation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_escalated** | **bool** | Whether agent responded with LiveAgentHandoff fulfillment. | [optional] 
**dtmf_used** | **bool** | Whether user was using DTMF input. | [optional] 
**failure_reasons** | **List[str]** | Failure reasons of the turn. | [optional] 
**no_match** | **bool** | Whether NLU predicted NO_MATCH. | [optional] 
**no_user_input** | **bool** | Whether user provided no input. | [optional] 
**reached_end_page** | **bool** | Whether turn resulted in End Session page. | [optional] 
**sentiment_magnitude** | **float** | Sentiment magnitude of the user utterance if [sentiment](https://cloud.google.com/dialogflow/cx/docs/concept/sentiment) was enabled. | [optional] 
**sentiment_score** | **float** | Sentiment score of the user utterance if [sentiment](https://cloud.google.com/dialogflow/cx/docs/concept/sentiment) was enabled. | [optional] 
**user_escalated** | **bool** | Whether user was specifically asking for a live agent. | [optional] 
**webhook_statuses** | **List[str]** | Human-readable statuses of the webhooks triggered during this turn. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_turn_signals import GoogleCloudDialogflowCxV3TurnSignals

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3TurnSignals from a JSON string
google_cloud_dialogflow_cx_v3_turn_signals_instance = GoogleCloudDialogflowCxV3TurnSignals.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3TurnSignals.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_turn_signals_dict = google_cloud_dialogflow_cx_v3_turn_signals_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3TurnSignals from a dict
google_cloud_dialogflow_cx_v3_turn_signals_from_dict = GoogleCloudDialogflowCxV3TurnSignals.from_dict(google_cloud_dialogflow_cx_v3_turn_signals_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


