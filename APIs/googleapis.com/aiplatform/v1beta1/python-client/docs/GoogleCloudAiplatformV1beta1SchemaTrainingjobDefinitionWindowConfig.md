# GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionWindowConfig

Config that contains the strategy used to generate sliding windows in time series training. A window is a series of rows that comprise the context up to the time of prediction, and the horizon following. The corresponding row for each window marks the start of the forecast horizon. Each window is used as an input example for training/evaluation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column** | **str** | Name of the column that should be used to generate sliding windows. The column should contain either booleans or string booleans; if the value of the row is True, generate a sliding window with the horizon starting at that row. The column will not be used as a feature in training. | [optional] 
**max_count** | **str** | Maximum number of windows that should be generated across all time series. | [optional] 
**stride_length** | **str** | Stride length used to generate input examples. Within one time series, every {$STRIDE_LENGTH} rows will be used to generate a sliding window. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_window_config import GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionWindowConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionWindowConfig from a JSON string
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_window_config_instance = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionWindowConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionWindowConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_window_config_dict = google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_window_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionWindowConfig from a dict
google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_window_config_from_dict = GoogleCloudAiplatformV1beta1SchemaTrainingjobDefinitionWindowConfig.from_dict(google_cloud_aiplatform_v1beta1_schema_trainingjob_definition_window_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


