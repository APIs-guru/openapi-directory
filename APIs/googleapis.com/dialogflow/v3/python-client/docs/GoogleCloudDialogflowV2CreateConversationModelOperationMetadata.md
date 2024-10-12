# GoogleCloudDialogflowV2CreateConversationModelOperationMetadata

Metadata for a ConversationModels.CreateConversationModel operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_model** | **str** | The resource name of the conversation model. Format: &#x60;projects//conversationModels/&#x60; | [optional] 
**create_time** | **str** | Timestamp when the request to create conversation model is submitted. The time is measured on server side. | [optional] 
**state** | **str** | State of CreateConversationModel operation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_create_conversation_model_operation_metadata import GoogleCloudDialogflowV2CreateConversationModelOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2CreateConversationModelOperationMetadata from a JSON string
google_cloud_dialogflow_v2_create_conversation_model_operation_metadata_instance = GoogleCloudDialogflowV2CreateConversationModelOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2CreateConversationModelOperationMetadata.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_create_conversation_model_operation_metadata_dict = google_cloud_dialogflow_v2_create_conversation_model_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2CreateConversationModelOperationMetadata from a dict
google_cloud_dialogflow_v2_create_conversation_model_operation_metadata_from_dict = GoogleCloudDialogflowV2CreateConversationModelOperationMetadata.from_dict(google_cloud_dialogflow_v2_create_conversation_model_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


