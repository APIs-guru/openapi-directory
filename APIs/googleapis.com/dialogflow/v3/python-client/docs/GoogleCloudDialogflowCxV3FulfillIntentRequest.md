# GoogleCloudDialogflowCxV3FulfillIntentRequest

Request of FulfillIntent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match** | [**GoogleCloudDialogflowCxV3Match**](GoogleCloudDialogflowCxV3Match.md) |  | [optional] 
**match_intent_request** | [**GoogleCloudDialogflowCxV3MatchIntentRequest**](GoogleCloudDialogflowCxV3MatchIntentRequest.md) |  | [optional] 
**output_audio_config** | [**GoogleCloudDialogflowCxV3OutputAudioConfig**](GoogleCloudDialogflowCxV3OutputAudioConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_fulfill_intent_request import GoogleCloudDialogflowCxV3FulfillIntentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3FulfillIntentRequest from a JSON string
google_cloud_dialogflow_cx_v3_fulfill_intent_request_instance = GoogleCloudDialogflowCxV3FulfillIntentRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3FulfillIntentRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_fulfill_intent_request_dict = google_cloud_dialogflow_cx_v3_fulfill_intent_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3FulfillIntentRequest from a dict
google_cloud_dialogflow_cx_v3_fulfill_intent_request_from_dict = GoogleCloudDialogflowCxV3FulfillIntentRequest.from_dict(google_cloud_dialogflow_cx_v3_fulfill_intent_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


