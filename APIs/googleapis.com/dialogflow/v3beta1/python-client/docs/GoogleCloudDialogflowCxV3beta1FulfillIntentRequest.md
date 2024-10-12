# GoogleCloudDialogflowCxV3beta1FulfillIntentRequest

Request of FulfillIntent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match** | [**GoogleCloudDialogflowCxV3beta1Match**](GoogleCloudDialogflowCxV3beta1Match.md) |  | [optional] 
**match_intent_request** | [**GoogleCloudDialogflowCxV3beta1MatchIntentRequest**](GoogleCloudDialogflowCxV3beta1MatchIntentRequest.md) |  | [optional] 
**output_audio_config** | [**GoogleCloudDialogflowCxV3beta1OutputAudioConfig**](GoogleCloudDialogflowCxV3beta1OutputAudioConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_fulfill_intent_request import GoogleCloudDialogflowCxV3beta1FulfillIntentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1FulfillIntentRequest from a JSON string
google_cloud_dialogflow_cx_v3beta1_fulfill_intent_request_instance = GoogleCloudDialogflowCxV3beta1FulfillIntentRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1FulfillIntentRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_fulfill_intent_request_dict = google_cloud_dialogflow_cx_v3beta1_fulfill_intent_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1FulfillIntentRequest from a dict
google_cloud_dialogflow_cx_v3beta1_fulfill_intent_request_from_dict = GoogleCloudDialogflowCxV3beta1FulfillIntentRequest.from_dict(google_cloud_dialogflow_cx_v3beta1_fulfill_intent_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


