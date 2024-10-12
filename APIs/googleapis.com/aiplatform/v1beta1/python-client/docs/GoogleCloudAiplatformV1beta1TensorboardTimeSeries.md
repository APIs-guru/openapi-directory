# GoogleCloudAiplatformV1beta1TensorboardTimeSeries

TensorboardTimeSeries maps to times series produced in training runs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when this TensorboardTimeSeries was created. | [optional] [readonly] 
**description** | **str** | Description of this TensorboardTimeSeries. | [optional] 
**display_name** | **str** | Required. User provided name of this TensorboardTimeSeries. This value should be unique among all TensorboardTimeSeries resources belonging to the same TensorboardRun resource (parent resource). | [optional] 
**etag** | **str** | Used to perform a consistent read-modify-write updates. If not set, a blind \&quot;overwrite\&quot; update happens. | [optional] 
**metadata** | [**GoogleCloudAiplatformV1beta1TensorboardTimeSeriesMetadata**](GoogleCloudAiplatformV1beta1TensorboardTimeSeriesMetadata.md) |  | [optional] 
**name** | **str** | Output only. Name of the TensorboardTimeSeries. | [optional] [readonly] 
**plugin_data** | **bytearray** | Data of the current plugin, with the size limited to 65KB. | [optional] 
**plugin_name** | **str** | Immutable. Name of the plugin this time series pertain to. Such as Scalar, Tensor, Blob | [optional] 
**update_time** | **str** | Output only. Timestamp when this TensorboardTimeSeries was last updated. | [optional] [readonly] 
**value_type** | **str** | Required. Immutable. Type of TensorboardTimeSeries value. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_tensorboard_time_series import GoogleCloudAiplatformV1beta1TensorboardTimeSeries

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1TensorboardTimeSeries from a JSON string
google_cloud_aiplatform_v1beta1_tensorboard_time_series_instance = GoogleCloudAiplatformV1beta1TensorboardTimeSeries.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1TensorboardTimeSeries.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_tensorboard_time_series_dict = google_cloud_aiplatform_v1beta1_tensorboard_time_series_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1TensorboardTimeSeries from a dict
google_cloud_aiplatform_v1beta1_tensorboard_time_series_from_dict = GoogleCloudAiplatformV1beta1TensorboardTimeSeries.from_dict(google_cloud_aiplatform_v1beta1_tensorboard_time_series_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


