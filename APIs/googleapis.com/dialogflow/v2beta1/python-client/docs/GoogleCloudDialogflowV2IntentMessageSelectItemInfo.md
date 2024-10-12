# GoogleCloudDialogflowV2IntentMessageSelectItemInfo

Additional info about the select item for when it is triggered in a dialog.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Required. A unique key that will be sent back to the agent if this response is given. | [optional] 
**synonyms** | **List[str]** | Optional. A list of synonyms that can also be used to trigger this item in dialog. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_intent_message_select_item_info import GoogleCloudDialogflowV2IntentMessageSelectItemInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2IntentMessageSelectItemInfo from a JSON string
google_cloud_dialogflow_v2_intent_message_select_item_info_instance = GoogleCloudDialogflowV2IntentMessageSelectItemInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2IntentMessageSelectItemInfo.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_intent_message_select_item_info_dict = google_cloud_dialogflow_v2_intent_message_select_item_info_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2IntentMessageSelectItemInfo from a dict
google_cloud_dialogflow_v2_intent_message_select_item_info_from_dict = GoogleCloudDialogflowV2IntentMessageSelectItemInfo.from_dict(google_cloud_dialogflow_v2_intent_message_select_item_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


