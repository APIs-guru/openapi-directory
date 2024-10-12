# GoogleCloudDialogflowV2beta1IntentMessageListSelect

The card for presenting a list of options to select from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[GoogleCloudDialogflowV2beta1IntentMessageListSelectItem]**](GoogleCloudDialogflowV2beta1IntentMessageListSelectItem.md) | Required. List items. | [optional] 
**subtitle** | **str** | Optional. Subtitle of the list. | [optional] 
**title** | **str** | Optional. The overall title of the list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message_list_select import GoogleCloudDialogflowV2beta1IntentMessageListSelect

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageListSelect from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_list_select_instance = GoogleCloudDialogflowV2beta1IntentMessageListSelect.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessageListSelect.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_list_select_dict = google_cloud_dialogflow_v2beta1_intent_message_list_select_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageListSelect from a dict
google_cloud_dialogflow_v2beta1_intent_message_list_select_from_dict = GoogleCloudDialogflowV2beta1IntentMessageListSelect.from_dict(google_cloud_dialogflow_v2beta1_intent_message_list_select_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


