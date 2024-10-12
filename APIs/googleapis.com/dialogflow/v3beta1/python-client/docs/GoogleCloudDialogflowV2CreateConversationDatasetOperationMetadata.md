# GoogleCloudDialogflowV2CreateConversationDatasetOperationMetadata

Metadata for ConversationDatasets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_dataset** | **str** | The resource name of the conversation dataset that will be created. Format: &#x60;projects//locations//conversationDatasets/&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_create_conversation_dataset_operation_metadata import GoogleCloudDialogflowV2CreateConversationDatasetOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2CreateConversationDatasetOperationMetadata from a JSON string
google_cloud_dialogflow_v2_create_conversation_dataset_operation_metadata_instance = GoogleCloudDialogflowV2CreateConversationDatasetOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2CreateConversationDatasetOperationMetadata.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_create_conversation_dataset_operation_metadata_dict = google_cloud_dialogflow_v2_create_conversation_dataset_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2CreateConversationDatasetOperationMetadata from a dict
google_cloud_dialogflow_v2_create_conversation_dataset_operation_metadata_from_dict = GoogleCloudDialogflowV2CreateConversationDatasetOperationMetadata.from_dict(google_cloud_dialogflow_v2_create_conversation_dataset_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


