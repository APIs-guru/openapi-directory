# GoogleCloudAiplatformV1ModelMonitoringObjectiveConfigTrainingDataset

Training Dataset information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_source** | [**GoogleCloudAiplatformV1BigQuerySource**](GoogleCloudAiplatformV1BigQuerySource.md) |  | [optional] 
**data_format** | **str** | Data format of the dataset, only applicable if the input is from Google Cloud Storage. The possible formats are: \&quot;tf-record\&quot; The source file is a TFRecord file. \&quot;csv\&quot; The source file is a CSV file. \&quot;jsonl\&quot; The source file is a JSONL file. | [optional] 
**dataset** | **str** | The resource name of the Dataset used to train this Model. | [optional] 
**gcs_source** | [**GoogleCloudAiplatformV1GcsSource**](GoogleCloudAiplatformV1GcsSource.md) |  | [optional] 
**logging_sampling_strategy** | [**GoogleCloudAiplatformV1SamplingStrategy**](GoogleCloudAiplatformV1SamplingStrategy.md) |  | [optional] 
**target_field** | **str** | The target field name the model is to predict. This field will be excluded when doing Predict and (or) Explain for the training data. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_model_monitoring_objective_config_training_dataset import GoogleCloudAiplatformV1ModelMonitoringObjectiveConfigTrainingDataset

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ModelMonitoringObjectiveConfigTrainingDataset from a JSON string
google_cloud_aiplatform_v1_model_monitoring_objective_config_training_dataset_instance = GoogleCloudAiplatformV1ModelMonitoringObjectiveConfigTrainingDataset.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ModelMonitoringObjectiveConfigTrainingDataset.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_model_monitoring_objective_config_training_dataset_dict = google_cloud_aiplatform_v1_model_monitoring_objective_config_training_dataset_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ModelMonitoringObjectiveConfigTrainingDataset from a dict
google_cloud_aiplatform_v1_model_monitoring_objective_config_training_dataset_from_dict = GoogleCloudAiplatformV1ModelMonitoringObjectiveConfigTrainingDataset.from_dict(google_cloud_aiplatform_v1_model_monitoring_objective_config_training_dataset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


