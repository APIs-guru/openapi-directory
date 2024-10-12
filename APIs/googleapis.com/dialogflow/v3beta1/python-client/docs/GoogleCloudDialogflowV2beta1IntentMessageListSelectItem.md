# GoogleCloudDialogflowV2beta1IntentMessageListSelectItem

An item in the list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. The main text describing the item. | [optional] 
**image** | [**GoogleCloudDialogflowV2beta1IntentMessageImage**](GoogleCloudDialogflowV2beta1IntentMessageImage.md) |  | [optional] 
**info** | [**GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo**](GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo.md) |  | [optional] 
**title** | **str** | Required. The title of the list item. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message_list_select_item import GoogleCloudDialogflowV2beta1IntentMessageListSelectItem

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageListSelectItem from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_list_select_item_instance = GoogleCloudDialogflowV2beta1IntentMessageListSelectItem.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessageListSelectItem.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_list_select_item_dict = google_cloud_dialogflow_v2beta1_intent_message_list_select_item_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageListSelectItem from a dict
google_cloud_dialogflow_v2beta1_intent_message_list_select_item_from_dict = GoogleCloudDialogflowV2beta1IntentMessageListSelectItem.from_dict(google_cloud_dialogflow_v2beta1_intent_message_list_select_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


