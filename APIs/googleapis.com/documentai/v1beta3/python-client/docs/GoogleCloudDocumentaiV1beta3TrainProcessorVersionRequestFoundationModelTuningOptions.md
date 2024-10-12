# GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestFoundationModelTuningOptions

Options to control foundation model tuning of the processor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**learning_rate_multiplier** | **float** | Optional. The multiplier to apply to the recommended learning rate. Valid values are between 0.1 and 10. If not provided, recommended learning rate will be used. | [optional] 
**train_steps** | **int** | Optional. The number of steps to run for model tuning. Valid values are between 1 and 400. If not provided, recommended steps will be used. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_train_processor_version_request_foundation_model_tuning_options import GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestFoundationModelTuningOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestFoundationModelTuningOptions from a JSON string
google_cloud_documentai_v1beta3_train_processor_version_request_foundation_model_tuning_options_instance = GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestFoundationModelTuningOptions.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestFoundationModelTuningOptions.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_train_processor_version_request_foundation_model_tuning_options_dict = google_cloud_documentai_v1beta3_train_processor_version_request_foundation_model_tuning_options_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestFoundationModelTuningOptions from a dict
google_cloud_documentai_v1beta3_train_processor_version_request_foundation_model_tuning_options_from_dict = GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestFoundationModelTuningOptions.from_dict(google_cloud_documentai_v1beta3_train_processor_version_request_foundation_model_tuning_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


