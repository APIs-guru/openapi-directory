# GoogleCloudDialogflowV2IntentMessageTableCardRow

Row of TableCard.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cells** | [**List[GoogleCloudDialogflowV2IntentMessageTableCardCell]**](GoogleCloudDialogflowV2IntentMessageTableCardCell.md) | Optional. List of cells that make up this row. | [optional] 
**divider_after** | **bool** | Optional. Whether to add a visual divider after this row. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_intent_message_table_card_row import GoogleCloudDialogflowV2IntentMessageTableCardRow

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2IntentMessageTableCardRow from a JSON string
google_cloud_dialogflow_v2_intent_message_table_card_row_instance = GoogleCloudDialogflowV2IntentMessageTableCardRow.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2IntentMessageTableCardRow.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_intent_message_table_card_row_dict = google_cloud_dialogflow_v2_intent_message_table_card_row_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2IntentMessageTableCardRow from a dict
google_cloud_dialogflow_v2_intent_message_table_card_row_from_dict = GoogleCloudDialogflowV2IntentMessageTableCardRow.from_dict(google_cloud_dialogflow_v2_intent_message_table_card_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


