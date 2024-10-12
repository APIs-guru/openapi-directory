# GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata

Metadata for a ConversationModels.DeleteConversationModel operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_model** | **str** | The resource name of the conversation model. Format: &#x60;projects//conversationModels/&#x60; | [optional] 
**create_time** | **str** | Timestamp when delete conversation model request was created. The time is measured on server side. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_delete_conversation_model_operation_metadata import GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata from a JSON string
google_cloud_dialogflow_v2_delete_conversation_model_operation_metadata_instance = GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_delete_conversation_model_operation_metadata_dict = google_cloud_dialogflow_v2_delete_conversation_model_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata from a dict
google_cloud_dialogflow_v2_delete_conversation_model_operation_metadata_from_dict = GoogleCloudDialogflowV2DeleteConversationModelOperationMetadata.from_dict(google_cloud_dialogflow_v2_delete_conversation_model_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


