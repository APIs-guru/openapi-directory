# GoogleCloudDatalabelingV1alpha1CreateInstructionMetadata

Metadata of a CreateInstruction operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Timestamp when create instruction request was created. | [optional] 
**instruction** | **str** | The name of the created Instruction. projects/{project_id}/instructions/{instruction_id} | [optional] 
**partial_failures** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | Partial failures encountered. E.g. single files that couldn&#39;t be read. Status details field will contain standard GCP error details. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1alpha1_create_instruction_metadata import GoogleCloudDatalabelingV1alpha1CreateInstructionMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1alpha1CreateInstructionMetadata from a JSON string
google_cloud_datalabeling_v1alpha1_create_instruction_metadata_instance = GoogleCloudDatalabelingV1alpha1CreateInstructionMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1alpha1CreateInstructionMetadata.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1alpha1_create_instruction_metadata_dict = google_cloud_datalabeling_v1alpha1_create_instruction_metadata_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1alpha1CreateInstructionMetadata from a dict
google_cloud_datalabeling_v1alpha1_create_instruction_metadata_from_dict = GoogleCloudDatalabelingV1alpha1CreateInstructionMetadata.from_dict(google_cloud_datalabeling_v1alpha1_create_instruction_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


