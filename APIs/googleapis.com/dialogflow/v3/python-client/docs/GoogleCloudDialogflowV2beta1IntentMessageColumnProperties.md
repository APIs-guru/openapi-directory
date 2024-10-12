# GoogleCloudDialogflowV2beta1IntentMessageColumnProperties

Column properties for TableCard.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | **str** | Required. Column heading. | [optional] 
**horizontal_alignment** | **str** | Optional. Defines text alignment for all cells in this column. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message_column_properties import GoogleCloudDialogflowV2beta1IntentMessageColumnProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageColumnProperties from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_column_properties_instance = GoogleCloudDialogflowV2beta1IntentMessageColumnProperties.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessageColumnProperties.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_column_properties_dict = google_cloud_dialogflow_v2beta1_intent_message_column_properties_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageColumnProperties from a dict
google_cloud_dialogflow_v2beta1_intent_message_column_properties_from_dict = GoogleCloudDialogflowV2beta1IntentMessageColumnProperties.from_dict(google_cloud_dialogflow_v2beta1_intent_message_column_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


