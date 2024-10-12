# GoogleCloudDialogflowCxV3beta1MatchIntentResponse

Response of MatchIntent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_page** | [**GoogleCloudDialogflowCxV3beta1Page**](GoogleCloudDialogflowCxV3beta1Page.md) |  | [optional] 
**matches** | [**List[GoogleCloudDialogflowCxV3beta1Match]**](GoogleCloudDialogflowCxV3beta1Match.md) | Match results, if more than one, ordered descendingly by the confidence we have that the particular intent matches the query. | [optional] 
**text** | **str** | If natural language text was provided as input, this field will contain a copy of the text. | [optional] 
**transcript** | **str** | If natural language speech audio was provided as input, this field will contain the transcript for the audio. | [optional] 
**trigger_event** | **str** | If an event was provided as input, this field will contain a copy of the event name. | [optional] 
**trigger_intent** | **str** | If an intent was provided as input, this field will contain a copy of the intent identifier. Format: &#x60;projects//locations//agents//intents/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_match_intent_response import GoogleCloudDialogflowCxV3beta1MatchIntentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1MatchIntentResponse from a JSON string
google_cloud_dialogflow_cx_v3beta1_match_intent_response_instance = GoogleCloudDialogflowCxV3beta1MatchIntentResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1MatchIntentResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_match_intent_response_dict = google_cloud_dialogflow_cx_v3beta1_match_intent_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1MatchIntentResponse from a dict
google_cloud_dialogflow_cx_v3beta1_match_intent_response_from_dict = GoogleCloudDialogflowCxV3beta1MatchIntentResponse.from_dict(google_cloud_dialogflow_cx_v3beta1_match_intent_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


