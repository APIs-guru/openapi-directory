# GoogleCloudVisionV1p4beta1BatchOperationMetadata

Metadata for the batch operations such as the current state. This is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The time when the batch request is finished and google.longrunning.Operation.done is set to true. | [optional] 
**state** | **str** | The current state of the batch operation. | [optional] 
**submit_time** | **str** | The time when the batch request was submitted to the server. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p4beta1_batch_operation_metadata import GoogleCloudVisionV1p4beta1BatchOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p4beta1BatchOperationMetadata from a JSON string
google_cloud_vision_v1p4beta1_batch_operation_metadata_instance = GoogleCloudVisionV1p4beta1BatchOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p4beta1BatchOperationMetadata.to_json())

# convert the object into a dict
google_cloud_vision_v1p4beta1_batch_operation_metadata_dict = google_cloud_vision_v1p4beta1_batch_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudVisionV1p4beta1BatchOperationMetadata from a dict
google_cloud_vision_v1p4beta1_batch_operation_metadata_from_dict = GoogleCloudVisionV1p4beta1BatchOperationMetadata.from_dict(google_cloud_vision_v1p4beta1_batch_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


