# GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadata

Metadata in google::longrunning::Operation for Knowledge operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | Required. Output only. The current state of this operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_generic_knowledge_operation_metadata import GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadata from a JSON string
google_cloud_dialogflow_cx_v3_generic_knowledge_operation_metadata_instance = GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadata.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_generic_knowledge_operation_metadata_dict = google_cloud_dialogflow_cx_v3_generic_knowledge_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadata from a dict
google_cloud_dialogflow_cx_v3_generic_knowledge_operation_metadata_from_dict = GoogleCloudDialogflowCxV3GenericKnowledgeOperationMetadata.from_dict(google_cloud_dialogflow_cx_v3_generic_knowledge_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


