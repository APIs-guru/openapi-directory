# GoogleCloudAiplatformV1FeatureMonitoringStatsAnomaly

A list of historical SnapshotAnalysis or ImportFeaturesAnalysis stats requested by user, sorted by FeatureStatsAnomaly.start_time descending.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature_stats_anomaly** | [**GoogleCloudAiplatformV1FeatureStatsAnomaly**](GoogleCloudAiplatformV1FeatureStatsAnomaly.md) |  | [optional] 
**objective** | **str** | Output only. The objective for each stats. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_feature_monitoring_stats_anomaly import GoogleCloudAiplatformV1FeatureMonitoringStatsAnomaly

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1FeatureMonitoringStatsAnomaly from a JSON string
google_cloud_aiplatform_v1_feature_monitoring_stats_anomaly_instance = GoogleCloudAiplatformV1FeatureMonitoringStatsAnomaly.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1FeatureMonitoringStatsAnomaly.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_feature_monitoring_stats_anomaly_dict = google_cloud_aiplatform_v1_feature_monitoring_stats_anomaly_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1FeatureMonitoringStatsAnomaly from a dict
google_cloud_aiplatform_v1_feature_monitoring_stats_anomaly_from_dict = GoogleCloudAiplatformV1FeatureMonitoringStatsAnomaly.from_dict(google_cloud_aiplatform_v1_feature_monitoring_stats_anomaly_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


