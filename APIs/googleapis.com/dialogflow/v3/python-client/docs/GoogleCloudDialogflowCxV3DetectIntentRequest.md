# GoogleCloudDialogflowCxV3DetectIntentRequest

The request to detect user's intent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_audio_config** | [**GoogleCloudDialogflowCxV3OutputAudioConfig**](GoogleCloudDialogflowCxV3OutputAudioConfig.md) |  | [optional] 
**query_input** | [**GoogleCloudDialogflowCxV3QueryInput**](GoogleCloudDialogflowCxV3QueryInput.md) |  | [optional] 
**var_query_params** | [**GoogleCloudDialogflowCxV3QueryParameters**](GoogleCloudDialogflowCxV3QueryParameters.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_detect_intent_request import GoogleCloudDialogflowCxV3DetectIntentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3DetectIntentRequest from a JSON string
google_cloud_dialogflow_cx_v3_detect_intent_request_instance = GoogleCloudDialogflowCxV3DetectIntentRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3DetectIntentRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_detect_intent_request_dict = google_cloud_dialogflow_cx_v3_detect_intent_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3DetectIntentRequest from a dict
google_cloud_dialogflow_cx_v3_detect_intent_request_from_dict = GoogleCloudDialogflowCxV3DetectIntentRequest.from_dict(google_cloud_dialogflow_cx_v3_detect_intent_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


