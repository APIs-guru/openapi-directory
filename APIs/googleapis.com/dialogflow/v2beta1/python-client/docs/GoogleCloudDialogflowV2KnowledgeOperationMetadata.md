# GoogleCloudDialogflowV2KnowledgeOperationMetadata

Metadata in google::longrunning::Operation for Knowledge operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**export_operation_metadata** | [**GoogleCloudDialogflowV2ExportOperationMetadata**](GoogleCloudDialogflowV2ExportOperationMetadata.md) |  | [optional] 
**knowledge_base** | **str** | The name of the knowledge base interacted with during the operation. | [optional] 
**state** | **str** | Output only. The current state of this operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_knowledge_operation_metadata import GoogleCloudDialogflowV2KnowledgeOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2KnowledgeOperationMetadata from a JSON string
google_cloud_dialogflow_v2_knowledge_operation_metadata_instance = GoogleCloudDialogflowV2KnowledgeOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2KnowledgeOperationMetadata.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_knowledge_operation_metadata_dict = google_cloud_dialogflow_v2_knowledge_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2KnowledgeOperationMetadata from a dict
google_cloud_dialogflow_v2_knowledge_operation_metadata_from_dict = GoogleCloudDialogflowV2KnowledgeOperationMetadata.from_dict(google_cloud_dialogflow_v2_knowledge_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


