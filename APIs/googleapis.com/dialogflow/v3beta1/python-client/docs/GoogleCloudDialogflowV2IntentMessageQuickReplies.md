# GoogleCloudDialogflowV2IntentMessageQuickReplies

The quick replies response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quick_replies** | **List[str]** | Optional. The collection of quick replies. | [optional] 
**title** | **str** | Optional. The title of the collection of quick replies. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_intent_message_quick_replies import GoogleCloudDialogflowV2IntentMessageQuickReplies

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2IntentMessageQuickReplies from a JSON string
google_cloud_dialogflow_v2_intent_message_quick_replies_instance = GoogleCloudDialogflowV2IntentMessageQuickReplies.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2IntentMessageQuickReplies.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_intent_message_quick_replies_dict = google_cloud_dialogflow_v2_intent_message_quick_replies_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2IntentMessageQuickReplies from a dict
google_cloud_dialogflow_v2_intent_message_quick_replies_from_dict = GoogleCloudDialogflowV2IntentMessageQuickReplies.from_dict(google_cloud_dialogflow_v2_intent_message_quick_replies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


