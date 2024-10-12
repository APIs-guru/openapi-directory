# GoogleCloudDialogflowV2ImportConversationDataOperationMetadata

Metadata for a ConversationDatasets.ImportConversationData operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_dataset** | **str** | The resource name of the imported conversation dataset. Format: &#x60;projects//locations//conversationDatasets/&#x60; | [optional] 
**create_time** | **str** | Timestamp when import conversation data request was created. The time is measured on server side. | [optional] 
**partial_failures** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | Partial failures are failures that don&#39;t fail the whole long running operation, e.g. single files that couldn&#39;t be read. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_import_conversation_data_operation_metadata import GoogleCloudDialogflowV2ImportConversationDataOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2ImportConversationDataOperationMetadata from a JSON string
google_cloud_dialogflow_v2_import_conversation_data_operation_metadata_instance = GoogleCloudDialogflowV2ImportConversationDataOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2ImportConversationDataOperationMetadata.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_import_conversation_data_operation_metadata_dict = google_cloud_dialogflow_v2_import_conversation_data_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2ImportConversationDataOperationMetadata from a dict
google_cloud_dialogflow_v2_import_conversation_data_operation_metadata_from_dict = GoogleCloudDialogflowV2ImportConversationDataOperationMetadata.from_dict(google_cloud_dialogflow_v2_import_conversation_data_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


