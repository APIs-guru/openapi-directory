# GoogleCloudAiplatformV1beta1PredictRequestResponseLoggingConfig

Configuration for logging request-response to a BigQuery table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_destination** | [**GoogleCloudAiplatformV1beta1BigQueryDestination**](GoogleCloudAiplatformV1beta1BigQueryDestination.md) |  | [optional] 
**enabled** | **bool** | If logging is enabled or not. | [optional] 
**sampling_rate** | **float** | Percentage of requests to be logged, expressed as a fraction in range(0,1]. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_predict_request_response_logging_config import GoogleCloudAiplatformV1beta1PredictRequestResponseLoggingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1PredictRequestResponseLoggingConfig from a JSON string
google_cloud_aiplatform_v1beta1_predict_request_response_logging_config_instance = GoogleCloudAiplatformV1beta1PredictRequestResponseLoggingConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1PredictRequestResponseLoggingConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_predict_request_response_logging_config_dict = google_cloud_aiplatform_v1beta1_predict_request_response_logging_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1PredictRequestResponseLoggingConfig from a dict
google_cloud_aiplatform_v1beta1_predict_request_response_logging_config_from_dict = GoogleCloudAiplatformV1beta1PredictRequestResponseLoggingConfig.from_dict(google_cloud_aiplatform_v1beta1_predict_request_response_logging_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


