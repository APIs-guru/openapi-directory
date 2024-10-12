# GoogleCloudDialogflowV2ConversationModel

Represents a conversation model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**article_suggestion_model_metadata** | [**GoogleCloudDialogflowV2ArticleSuggestionModelMetadata**](GoogleCloudDialogflowV2ArticleSuggestionModelMetadata.md) |  | [optional] 
**create_time** | **str** | Output only. Creation time of this model. | [optional] [readonly] 
**datasets** | [**List[GoogleCloudDialogflowV2InputDataset]**](GoogleCloudDialogflowV2InputDataset.md) | Required. Datasets used to create model. | [optional] 
**display_name** | **str** | Required. The display name of the model. At most 64 bytes long. | [optional] 
**language_code** | **str** | Language code for the conversation model. If not specified, the language is en-US. Language at ConversationModel should be set for all non en-us languages. This should be a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: \&quot;en-US\&quot;. | [optional] 
**name** | **str** | ConversationModel resource name. Format: &#x60;projects//conversationModels/&#x60; | [optional] 
**smart_reply_model_metadata** | [**GoogleCloudDialogflowV2SmartReplyModelMetadata**](GoogleCloudDialogflowV2SmartReplyModelMetadata.md) |  | [optional] 
**state** | **str** | Output only. State of the model. A model can only serve prediction requests after it gets deployed. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_conversation_model import GoogleCloudDialogflowV2ConversationModel

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2ConversationModel from a JSON string
google_cloud_dialogflow_v2_conversation_model_instance = GoogleCloudDialogflowV2ConversationModel.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2ConversationModel.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_conversation_model_dict = google_cloud_dialogflow_v2_conversation_model_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2ConversationModel from a dict
google_cloud_dialogflow_v2_conversation_model_from_dict = GoogleCloudDialogflowV2ConversationModel.from_dict(google_cloud_dialogflow_v2_conversation_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


