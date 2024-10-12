# GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata

Metadata in google::longrunning::Operation for Knowledge operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**export_operation_metadata** | [**GoogleCloudDialogflowV2beta1ExportOperationMetadata**](GoogleCloudDialogflowV2beta1ExportOperationMetadata.md) |  | [optional] 
**knowledge_base** | **str** | The name of the knowledge base interacted with during the operation. | [optional] 
**state** | **str** | Required. Output only. The current state of this operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_knowledge_operation_metadata import GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata from a JSON string
google_cloud_dialogflow_v2beta1_knowledge_operation_metadata_instance = GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_knowledge_operation_metadata_dict = google_cloud_dialogflow_v2beta1_knowledge_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata from a dict
google_cloud_dialogflow_v2beta1_knowledge_operation_metadata_from_dict = GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata.from_dict(google_cloud_dialogflow_v2beta1_knowledge_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


