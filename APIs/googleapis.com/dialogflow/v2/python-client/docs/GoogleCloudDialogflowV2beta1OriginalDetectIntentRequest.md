# GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest

Represents the contents of the original request that was passed to the `[Streaming]DetectIntent` call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payload** | **Dict[str, object]** | Optional. This field is set to the value of the &#x60;QueryParameters.payload&#x60; field passed in the request. Some integrations that query a Dialogflow agent may provide additional information in the payload. In particular, for the Dialogflow Phone Gateway integration, this field has the form: { \&quot;telephony\&quot;: { \&quot;caller_id\&quot;: \&quot;+18558363987\&quot; } } Note: The caller ID field (&#x60;caller_id&#x60;) will be redacted for Trial Edition agents and populated with the caller ID in [E.164 format](https://en.wikipedia.org/wiki/E.164) for Essentials Edition agents. | [optional] 
**source** | **str** | The source of this request, e.g., &#x60;google&#x60;, &#x60;facebook&#x60;, &#x60;slack&#x60;. It is set by Dialogflow-owned servers. | [optional] 
**version** | **str** | Optional. The version of the protocol used for this request. This field is AoG-specific. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_original_detect_intent_request import GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest from a JSON string
google_cloud_dialogflow_v2beta1_original_detect_intent_request_instance = GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_original_detect_intent_request_dict = google_cloud_dialogflow_v2beta1_original_detect_intent_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest from a dict
google_cloud_dialogflow_v2beta1_original_detect_intent_request_from_dict = GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest.from_dict(google_cloud_dialogflow_v2beta1_original_detect_intent_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


