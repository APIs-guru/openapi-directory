# GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue

Represents a value for an intent parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**original_value** | **str** | Always present. Original text value extracted from user utterance. | [optional] 
**resolved_value** | **object** | Always present. Structured value for the parameter extracted from user utterance. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_webhook_request_intent_info_intent_parameter_value import GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue from a JSON string
google_cloud_dialogflow_cx_v3_webhook_request_intent_info_intent_parameter_value_instance = GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_webhook_request_intent_info_intent_parameter_value_dict = google_cloud_dialogflow_cx_v3_webhook_request_intent_info_intent_parameter_value_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue from a dict
google_cloud_dialogflow_cx_v3_webhook_request_intent_info_intent_parameter_value_from_dict = GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue.from_dict(google_cloud_dialogflow_cx_v3_webhook_request_intent_info_intent_parameter_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


