# GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent

Rich Business Messaging (RBM) Card content

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. Description of the card (at most 2000 bytes). At least one of the title, description or media must be set. | [optional] 
**media** | [**GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia**](GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia.md) |  | [optional] 
**suggestions** | [**List[GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion]**](GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion.md) | Optional. List of suggestions to include in the card. | [optional] 
**title** | **str** | Optional. Title of the card (at most 200 bytes). At least one of the title, description or media must be set. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message_rbm_card_content import GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_rbm_card_content_instance = GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_rbm_card_content_dict = google_cloud_dialogflow_v2beta1_intent_message_rbm_card_content_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent from a dict
google_cloud_dialogflow_v2beta1_intent_message_rbm_card_content_from_dict = GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent.from_dict(google_cloud_dialogflow_v2beta1_intent_message_rbm_card_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


