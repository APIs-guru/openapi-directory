# GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData

The input data used to train a new ProcessorVersion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**test_documents** | [**GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig**](GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig.md) |  | [optional] 
**training_documents** | [**GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig**](GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_train_processor_version_request_input_data import GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData from a JSON string
google_cloud_documentai_v1beta3_train_processor_version_request_input_data_instance = GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_train_processor_version_request_input_data_dict = google_cloud_documentai_v1beta3_train_processor_version_request_input_data_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData from a dict
google_cloud_documentai_v1beta3_train_processor_version_request_input_data_from_dict = GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData.from_dict(google_cloud_documentai_v1beta3_train_processor_version_request_input_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


