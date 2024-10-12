# GoogleCloudDialogflowV2DeployConversationModelOperationMetadata

Metadata for a ConversationModels.DeployConversationModel operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_model** | **str** | The resource name of the conversation model. Format: &#x60;projects//conversationModels/&#x60; | [optional] 
**create_time** | **str** | Timestamp when request to deploy conversation model was submitted. The time is measured on server side. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_deploy_conversation_model_operation_metadata import GoogleCloudDialogflowV2DeployConversationModelOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2DeployConversationModelOperationMetadata from a JSON string
google_cloud_dialogflow_v2_deploy_conversation_model_operation_metadata_instance = GoogleCloudDialogflowV2DeployConversationModelOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2DeployConversationModelOperationMetadata.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_deploy_conversation_model_operation_metadata_dict = google_cloud_dialogflow_v2_deploy_conversation_model_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2DeployConversationModelOperationMetadata from a dict
google_cloud_dialogflow_v2_deploy_conversation_model_operation_metadata_from_dict = GoogleCloudDialogflowV2DeployConversationModelOperationMetadata.from_dict(google_cloud_dialogflow_v2_deploy_conversation_model_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


