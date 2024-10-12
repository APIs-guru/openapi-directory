# GoogleCloudDialogflowCxV3WebhookRequestIntentInfo

Represents intent information communicated to the webhook.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | The confidence of the matched intent. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). | [optional] 
**display_name** | **str** | Always present. The display name of the last matched intent. | [optional] 
**last_matched_intent** | **str** | Always present. The unique identifier of the last matched intent. Format: &#x60;projects//locations//agents//intents/&#x60;. | [optional] 
**parameters** | [**Dict[str, GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue]**](GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue.md) | Parameters identified as a result of intent matching. This is a map of the name of the identified parameter to the value of the parameter identified from the user&#39;s utterance. All parameters defined in the matched intent that are identified will be surfaced here. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_webhook_request_intent_info import GoogleCloudDialogflowCxV3WebhookRequestIntentInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3WebhookRequestIntentInfo from a JSON string
google_cloud_dialogflow_cx_v3_webhook_request_intent_info_instance = GoogleCloudDialogflowCxV3WebhookRequestIntentInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3WebhookRequestIntentInfo.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_webhook_request_intent_info_dict = google_cloud_dialogflow_cx_v3_webhook_request_intent_info_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3WebhookRequestIntentInfo from a dict
google_cloud_dialogflow_cx_v3_webhook_request_intent_info_from_dict = GoogleCloudDialogflowCxV3WebhookRequestIntentInfo.from_dict(google_cloud_dialogflow_cx_v3_webhook_request_intent_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


