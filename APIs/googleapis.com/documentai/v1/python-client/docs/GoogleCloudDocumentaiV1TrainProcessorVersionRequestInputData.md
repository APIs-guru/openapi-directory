# GoogleCloudDocumentaiV1TrainProcessorVersionRequestInputData

The input data used to train a new ProcessorVersion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**test_documents** | [**GoogleCloudDocumentaiV1BatchDocumentsInputConfig**](GoogleCloudDocumentaiV1BatchDocumentsInputConfig.md) |  | [optional] 
**training_documents** | [**GoogleCloudDocumentaiV1BatchDocumentsInputConfig**](GoogleCloudDocumentaiV1BatchDocumentsInputConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_train_processor_version_request_input_data import GoogleCloudDocumentaiV1TrainProcessorVersionRequestInputData

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1TrainProcessorVersionRequestInputData from a JSON string
google_cloud_documentai_v1_train_processor_version_request_input_data_instance = GoogleCloudDocumentaiV1TrainProcessorVersionRequestInputData.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1TrainProcessorVersionRequestInputData.to_json())

# convert the object into a dict
google_cloud_documentai_v1_train_processor_version_request_input_data_dict = google_cloud_documentai_v1_train_processor_version_request_input_data_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1TrainProcessorVersionRequestInputData from a dict
google_cloud_documentai_v1_train_processor_version_request_input_data_from_dict = GoogleCloudDocumentaiV1TrainProcessorVersionRequestInputData.from_dict(google_cloud_documentai_v1_train_processor_version_request_input_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


