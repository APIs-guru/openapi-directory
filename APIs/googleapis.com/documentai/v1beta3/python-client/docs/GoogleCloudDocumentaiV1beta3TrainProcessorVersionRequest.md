# GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest

Request message for the TrainProcessorVersion method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_processor_version** | **str** | Optional. The processor version to use as a base for training. This processor version must be a child of &#x60;parent&#x60;. Format: &#x60;projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}&#x60;. | [optional] 
**custom_document_extraction_options** | [**GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestCustomDocumentExtractionOptions**](GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestCustomDocumentExtractionOptions.md) |  | [optional] 
**document_schema** | [**GoogleCloudDocumentaiV1beta3DocumentSchema**](GoogleCloudDocumentaiV1beta3DocumentSchema.md) |  | [optional] 
**foundation_model_tuning_options** | [**GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestFoundationModelTuningOptions**](GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestFoundationModelTuningOptions.md) |  | [optional] 
**input_data** | [**GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData**](GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData.md) |  | [optional] 
**processor_version** | [**GoogleCloudDocumentaiV1beta3ProcessorVersion**](GoogleCloudDocumentaiV1beta3ProcessorVersion.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_train_processor_version_request import GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest from a JSON string
google_cloud_documentai_v1beta3_train_processor_version_request_instance = GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_train_processor_version_request_dict = google_cloud_documentai_v1beta3_train_processor_version_request_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest from a dict
google_cloud_documentai_v1beta3_train_processor_version_request_from_dict = GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest.from_dict(google_cloud_documentai_v1beta3_train_processor_version_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


