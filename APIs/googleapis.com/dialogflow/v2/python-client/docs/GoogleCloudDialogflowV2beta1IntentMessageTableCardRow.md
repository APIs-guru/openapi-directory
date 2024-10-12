# GoogleCloudDialogflowV2beta1IntentMessageTableCardRow

Row of TableCard.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cells** | [**List[GoogleCloudDialogflowV2beta1IntentMessageTableCardCell]**](GoogleCloudDialogflowV2beta1IntentMessageTableCardCell.md) | Optional. List of cells that make up this row. | [optional] 
**divider_after** | **bool** | Optional. Whether to add a visual divider after this row. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message_table_card_row import GoogleCloudDialogflowV2beta1IntentMessageTableCardRow

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageTableCardRow from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_table_card_row_instance = GoogleCloudDialogflowV2beta1IntentMessageTableCardRow.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessageTableCardRow.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_table_card_row_dict = google_cloud_dialogflow_v2beta1_intent_message_table_card_row_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageTableCardRow from a dict
google_cloud_dialogflow_v2beta1_intent_message_table_card_row_from_dict = GoogleCloudDialogflowV2beta1IntentMessageTableCardRow.from_dict(google_cloud_dialogflow_v2beta1_intent_message_table_card_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


