# GoogleCloudDocumentaiV1TrainProcessorVersionMetadata

The metadata that represents a processor version being created.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_metadata** | [**GoogleCloudDocumentaiV1CommonOperationMetadata**](GoogleCloudDocumentaiV1CommonOperationMetadata.md) |  | [optional] 
**test_dataset_validation** | [**GoogleCloudDocumentaiV1TrainProcessorVersionMetadataDatasetValidation**](GoogleCloudDocumentaiV1TrainProcessorVersionMetadataDatasetValidation.md) |  | [optional] 
**training_dataset_validation** | [**GoogleCloudDocumentaiV1TrainProcessorVersionMetadataDatasetValidation**](GoogleCloudDocumentaiV1TrainProcessorVersionMetadataDatasetValidation.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_train_processor_version_metadata import GoogleCloudDocumentaiV1TrainProcessorVersionMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1TrainProcessorVersionMetadata from a JSON string
google_cloud_documentai_v1_train_processor_version_metadata_instance = GoogleCloudDocumentaiV1TrainProcessorVersionMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1TrainProcessorVersionMetadata.to_json())

# convert the object into a dict
google_cloud_documentai_v1_train_processor_version_metadata_dict = google_cloud_documentai_v1_train_processor_version_metadata_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1TrainProcessorVersionMetadata from a dict
google_cloud_documentai_v1_train_processor_version_metadata_from_dict = GoogleCloudDocumentaiV1TrainProcessorVersionMetadata.from_dict(google_cloud_documentai_v1_train_processor_version_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


