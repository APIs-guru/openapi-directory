# GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataDatasetValidation

The dataset validation information. This includes any and all errors with documents and the dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_error_count** | **int** | The total number of dataset errors. | [optional] 
**dataset_errors** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | Error information for the dataset as a whole. A maximum of 10 dataset errors will be returned. A single dataset error is terminal for training. | [optional] 
**document_error_count** | **int** | The total number of document errors. | [optional] 
**document_errors** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | Error information pertaining to specific documents. A maximum of 10 document errors will be returned. Any document with errors will not be used throughout training. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_train_processor_version_metadata_dataset_validation import GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataDatasetValidation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataDatasetValidation from a JSON string
google_cloud_documentai_v1beta3_train_processor_version_metadata_dataset_validation_instance = GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataDatasetValidation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataDatasetValidation.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_train_processor_version_metadata_dataset_validation_dict = google_cloud_documentai_v1beta3_train_processor_version_metadata_dataset_validation_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataDatasetValidation from a dict
google_cloud_documentai_v1beta3_train_processor_version_metadata_dataset_validation_from_dict = GoogleCloudDocumentaiV1beta3TrainProcessorVersionMetadataDatasetValidation.from_dict(google_cloud_documentai_v1beta3_train_processor_version_metadata_dataset_validation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


