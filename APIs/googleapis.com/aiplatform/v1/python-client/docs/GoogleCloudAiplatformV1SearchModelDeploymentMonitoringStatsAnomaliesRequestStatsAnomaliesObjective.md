# GoogleCloudAiplatformV1SearchModelDeploymentMonitoringStatsAnomaliesRequestStatsAnomaliesObjective

Stats requested for specific objective.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**top_feature_count** | **int** | If set, all attribution scores between SearchModelDeploymentMonitoringStatsAnomaliesRequest.start_time and SearchModelDeploymentMonitoringStatsAnomaliesRequest.end_time are fetched, and page token doesn&#39;t take effect in this case. Only used to retrieve attribution score for the top Features which has the highest attribution score in the latest monitoring run. | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_search_model_deployment_monitoring_stats_anomalies_request_stats_anomalies_objective import GoogleCloudAiplatformV1SearchModelDeploymentMonitoringStatsAnomaliesRequestStatsAnomaliesObjective

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SearchModelDeploymentMonitoringStatsAnomaliesRequestStatsAnomaliesObjective from a JSON string
google_cloud_aiplatform_v1_search_model_deployment_monitoring_stats_anomalies_request_stats_anomalies_objective_instance = GoogleCloudAiplatformV1SearchModelDeploymentMonitoringStatsAnomaliesRequestStatsAnomaliesObjective.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SearchModelDeploymentMonitoringStatsAnomaliesRequestStatsAnomaliesObjective.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_search_model_deployment_monitoring_stats_anomalies_request_stats_anomalies_objective_dict = google_cloud_aiplatform_v1_search_model_deployment_monitoring_stats_anomalies_request_stats_anomalies_objective_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SearchModelDeploymentMonitoringStatsAnomaliesRequestStatsAnomaliesObjective from a dict
google_cloud_aiplatform_v1_search_model_deployment_monitoring_stats_anomalies_request_stats_anomalies_objective_from_dict = GoogleCloudAiplatformV1SearchModelDeploymentMonitoringStatsAnomaliesRequestStatsAnomaliesObjective.from_dict(google_cloud_aiplatform_v1_search_model_deployment_monitoring_stats_anomalies_request_stats_anomalies_objective_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


