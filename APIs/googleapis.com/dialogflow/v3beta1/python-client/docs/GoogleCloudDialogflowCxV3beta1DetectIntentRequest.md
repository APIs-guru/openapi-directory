# GoogleCloudDialogflowCxV3beta1DetectIntentRequest

The request to detect user's intent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_audio_config** | [**GoogleCloudDialogflowCxV3beta1OutputAudioConfig**](GoogleCloudDialogflowCxV3beta1OutputAudioConfig.md) |  | [optional] 
**query_input** | [**GoogleCloudDialogflowCxV3beta1QueryInput**](GoogleCloudDialogflowCxV3beta1QueryInput.md) |  | [optional] 
**var_query_params** | [**GoogleCloudDialogflowCxV3beta1QueryParameters**](GoogleCloudDialogflowCxV3beta1QueryParameters.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_detect_intent_request import GoogleCloudDialogflowCxV3beta1DetectIntentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1DetectIntentRequest from a JSON string
google_cloud_dialogflow_cx_v3beta1_detect_intent_request_instance = GoogleCloudDialogflowCxV3beta1DetectIntentRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1DetectIntentRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_detect_intent_request_dict = google_cloud_dialogflow_cx_v3beta1_detect_intent_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1DetectIntentRequest from a dict
google_cloud_dialogflow_cx_v3beta1_detect_intent_request_from_dict = GoogleCloudDialogflowCxV3beta1DetectIntentRequest.from_dict(google_cloud_dialogflow_cx_v3beta1_detect_intent_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


