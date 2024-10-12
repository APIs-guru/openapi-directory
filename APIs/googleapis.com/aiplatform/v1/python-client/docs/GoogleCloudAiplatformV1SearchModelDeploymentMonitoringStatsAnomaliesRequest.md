# GoogleCloudAiplatformV1SearchModelDeploymentMonitoringStatsAnomaliesRequest

Request message for JobService.SearchModelDeploymentMonitoringStatsAnomalies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployed_model_id** | **str** | Required. The DeployedModel ID of the [ModelDeploymentMonitoringObjectiveConfig.deployed_model_id]. | [optional] 
**end_time** | **str** | The latest timestamp of stats being generated. If not set, indicates feching stats till the latest possible one. | [optional] 
**feature_display_name** | **str** | The feature display name. If specified, only return the stats belonging to this feature. Format: ModelMonitoringStatsAnomalies.FeatureHistoricStatsAnomalies.feature_display_name, example: \&quot;user_destination\&quot;. | [optional] 
**objectives** | [**List[GoogleCloudAiplatformV1SearchModelDeploymentMonitoringStatsAnomaliesRequestStatsAnomaliesObjective]**](GoogleCloudAiplatformV1SearchModelDeploymentMonitoringStatsAnomaliesRequestStatsAnomaliesObjective.md) | Required. Objectives of the stats to retrieve. | [optional] 
**page_size** | **int** | The standard list page size. | [optional] 
**page_token** | **str** | A page token received from a previous JobService.SearchModelDeploymentMonitoringStatsAnomalies call. | [optional] 
**start_time** | **str** | The earliest timestamp of stats being generated. If not set, indicates fetching stats till the earliest possible one. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_search_model_deployment_monitoring_stats_anomalies_request import GoogleCloudAiplatformV1SearchModelDeploymentMonitoringStatsAnomaliesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SearchModelDeploymentMonitoringStatsAnomaliesRequest from a JSON string
google_cloud_aiplatform_v1_search_model_deployment_monitoring_stats_anomalies_request_instance = GoogleCloudAiplatformV1SearchModelDeploymentMonitoringStatsAnomaliesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SearchModelDeploymentMonitoringStatsAnomaliesRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_search_model_deployment_monitoring_stats_anomalies_request_dict = google_cloud_aiplatform_v1_search_model_deployment_monitoring_stats_anomalies_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SearchModelDeploymentMonitoringStatsAnomaliesRequest from a dict
google_cloud_aiplatform_v1_search_model_deployment_monitoring_stats_anomalies_request_from_dict = GoogleCloudAiplatformV1SearchModelDeploymentMonitoringStatsAnomaliesRequest.from_dict(google_cloud_aiplatform_v1_search_model_deployment_monitoring_stats_anomalies_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


