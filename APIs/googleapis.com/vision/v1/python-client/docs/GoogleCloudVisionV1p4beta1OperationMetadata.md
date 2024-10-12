# GoogleCloudVisionV1p4beta1OperationMetadata

Contains metadata for the BatchAnnotateImages operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The time when the batch request was received. | [optional] 
**state** | **str** | Current state of the batch operation. | [optional] 
**update_time** | **str** | The time when the operation result was last updated. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p4beta1_operation_metadata import GoogleCloudVisionV1p4beta1OperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p4beta1OperationMetadata from a JSON string
google_cloud_vision_v1p4beta1_operation_metadata_instance = GoogleCloudVisionV1p4beta1OperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p4beta1OperationMetadata.to_json())

# convert the object into a dict
google_cloud_vision_v1p4beta1_operation_metadata_dict = google_cloud_vision_v1p4beta1_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudVisionV1p4beta1OperationMetadata from a dict
google_cloud_vision_v1p4beta1_operation_metadata_from_dict = GoogleCloudVisionV1p4beta1OperationMetadata.from_dict(google_cloud_vision_v1p4beta1_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


