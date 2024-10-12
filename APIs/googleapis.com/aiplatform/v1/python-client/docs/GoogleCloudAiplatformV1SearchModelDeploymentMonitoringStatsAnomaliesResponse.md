# GoogleCloudAiplatformV1SearchModelDeploymentMonitoringStatsAnomaliesResponse

Response message for JobService.SearchModelDeploymentMonitoringStatsAnomalies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**monitoring_stats** | [**List[GoogleCloudAiplatformV1ModelMonitoringStatsAnomalies]**](GoogleCloudAiplatformV1ModelMonitoringStatsAnomalies.md) | Stats retrieved for requested objectives. There are at most 1000 ModelMonitoringStatsAnomalies.FeatureHistoricStatsAnomalies.prediction_stats in the response. | [optional] 
**next_page_token** | **str** | The page token that can be used by the next JobService.SearchModelDeploymentMonitoringStatsAnomalies call. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_search_model_deployment_monitoring_stats_anomalies_response import GoogleCloudAiplatformV1SearchModelDeploymentMonitoringStatsAnomaliesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SearchModelDeploymentMonitoringStatsAnomaliesResponse from a JSON string
google_cloud_aiplatform_v1_search_model_deployment_monitoring_stats_anomalies_response_instance = GoogleCloudAiplatformV1SearchModelDeploymentMonitoringStatsAnomaliesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SearchModelDeploymentMonitoringStatsAnomaliesResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_search_model_deployment_monitoring_stats_anomalies_response_dict = google_cloud_aiplatform_v1_search_model_deployment_monitoring_stats_anomalies_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SearchModelDeploymentMonitoringStatsAnomaliesResponse from a dict
google_cloud_aiplatform_v1_search_model_deployment_monitoring_stats_anomalies_response_from_dict = GoogleCloudAiplatformV1SearchModelDeploymentMonitoringStatsAnomaliesResponse.from_dict(google_cloud_aiplatform_v1_search_model_deployment_monitoring_stats_anomalies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


