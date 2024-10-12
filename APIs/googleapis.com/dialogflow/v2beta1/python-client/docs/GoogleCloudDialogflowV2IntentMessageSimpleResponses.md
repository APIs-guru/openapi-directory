# GoogleCloudDialogflowV2IntentMessageSimpleResponses

The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**simple_responses** | [**List[GoogleCloudDialogflowV2IntentMessageSimpleResponse]**](GoogleCloudDialogflowV2IntentMessageSimpleResponse.md) | Required. The list of simple responses. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_intent_message_simple_responses import GoogleCloudDialogflowV2IntentMessageSimpleResponses

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2IntentMessageSimpleResponses from a JSON string
google_cloud_dialogflow_v2_intent_message_simple_responses_instance = GoogleCloudDialogflowV2IntentMessageSimpleResponses.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2IntentMessageSimpleResponses.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_intent_message_simple_responses_dict = google_cloud_dialogflow_v2_intent_message_simple_responses_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2IntentMessageSimpleResponses from a dict
google_cloud_dialogflow_v2_intent_message_simple_responses_from_dict = GoogleCloudDialogflowV2IntentMessageSimpleResponses.from_dict(google_cloud_dialogflow_v2_intent_message_simple_responses_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


