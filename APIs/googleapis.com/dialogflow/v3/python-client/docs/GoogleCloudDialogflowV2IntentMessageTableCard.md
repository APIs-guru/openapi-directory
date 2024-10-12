# GoogleCloudDialogflowV2IntentMessageTableCard

Table card for Actions on Google.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buttons** | [**List[GoogleCloudDialogflowV2IntentMessageBasicCardButton]**](GoogleCloudDialogflowV2IntentMessageBasicCardButton.md) | Optional. List of buttons for the card. | [optional] 
**column_properties** | [**List[GoogleCloudDialogflowV2IntentMessageColumnProperties]**](GoogleCloudDialogflowV2IntentMessageColumnProperties.md) | Optional. Display properties for the columns in this table. | [optional] 
**image** | [**GoogleCloudDialogflowV2IntentMessageImage**](GoogleCloudDialogflowV2IntentMessageImage.md) |  | [optional] 
**rows** | [**List[GoogleCloudDialogflowV2IntentMessageTableCardRow]**](GoogleCloudDialogflowV2IntentMessageTableCardRow.md) | Optional. Rows in this table of data. | [optional] 
**subtitle** | **str** | Optional. Subtitle to the title. | [optional] 
**title** | **str** | Required. Title of the card. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_intent_message_table_card import GoogleCloudDialogflowV2IntentMessageTableCard

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2IntentMessageTableCard from a JSON string
google_cloud_dialogflow_v2_intent_message_table_card_instance = GoogleCloudDialogflowV2IntentMessageTableCard.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2IntentMessageTableCard.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_intent_message_table_card_dict = google_cloud_dialogflow_v2_intent_message_table_card_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2IntentMessageTableCard from a dict
google_cloud_dialogflow_v2_intent_message_table_card_from_dict = GoogleCloudDialogflowV2IntentMessageTableCard.from_dict(google_cloud_dialogflow_v2_intent_message_table_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


