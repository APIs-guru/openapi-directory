# GoogleCloudAiplatformV1beta1FeatureStatsAnomaly

Stats and Anomaly generated at specific timestamp for specific Feature. The start_time and end_time are used to define the time range of the dataset that current stats belongs to, e.g. prediction traffic is bucketed into prediction datasets by time window. If the Dataset is not defined by time window, start_time = end_time. Timestamp of the stats and anomalies always refers to end_time. Raw stats and anomalies are stored in stats_uri or anomaly_uri in the tensorflow defined protos. Field data_stats contains almost identical information with the raw stats in Vertex AI defined proto, for UI to display.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anomaly_detection_threshold** | **float** | This is the threshold used when detecting anomalies. The threshold can be changed by user, so this one might be different from ThresholdConfig.value. | [optional] 
**anomaly_uri** | **str** | Path of the anomaly file for current feature values in Cloud Storage bucket. Format: gs:////anomalies. Example: gs://monitoring_bucket/feature_name/anomalies. Stats are stored as binary format with Protobuf message Anoamlies are stored as binary format with Protobuf message [tensorflow.metadata.v0.AnomalyInfo] (https://github.com/tensorflow/metadata/blob/master/tensorflow_metadata/proto/v0/anomalies.proto). | [optional] 
**distribution_deviation** | **float** | Deviation from the current stats to baseline stats. 1. For categorical feature, the distribution distance is calculated by L-inifinity norm. 2. For numerical feature, the distribution distance is calculated by Jensen–Shannon divergence. | [optional] 
**end_time** | **str** | The end timestamp of window where stats were generated. For objectives where time window doesn&#39;t make sense (e.g. Featurestore Snapshot Monitoring), end_time indicates the timestamp of the data used to generate stats (e.g. timestamp we take snapshots for feature values). | [optional] 
**score** | **float** | Feature importance score, only populated when cross-feature monitoring is enabled. For now only used to represent feature attribution score within range [0, 1] for ModelDeploymentMonitoringObjectiveType.FEATURE_ATTRIBUTION_SKEW and ModelDeploymentMonitoringObjectiveType.FEATURE_ATTRIBUTION_DRIFT. | [optional] 
**start_time** | **str** | The start timestamp of window where stats were generated. For objectives where time window doesn&#39;t make sense (e.g. Featurestore Snapshot Monitoring), start_time is only used to indicate the monitoring intervals, so it always equals to (end_time - monitoring_interval). | [optional] 
**stats_uri** | **str** | Path of the stats file for current feature values in Cloud Storage bucket. Format: gs:////stats. Example: gs://monitoring_bucket/feature_name/stats. Stats are stored as binary format with Protobuf message [tensorflow.metadata.v0.FeatureNameStatistics](https://github.com/tensorflow/metadata/blob/master/tensorflow_metadata/proto/v0/statistics.proto). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_feature_stats_anomaly import GoogleCloudAiplatformV1beta1FeatureStatsAnomaly

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1FeatureStatsAnomaly from a JSON string
google_cloud_aiplatform_v1beta1_feature_stats_anomaly_instance = GoogleCloudAiplatformV1beta1FeatureStatsAnomaly.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1FeatureStatsAnomaly.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_feature_stats_anomaly_dict = google_cloud_aiplatform_v1beta1_feature_stats_anomaly_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1FeatureStatsAnomaly from a dict
google_cloud_aiplatform_v1beta1_feature_stats_anomaly_from_dict = GoogleCloudAiplatformV1beta1FeatureStatsAnomaly.from_dict(google_cloud_aiplatform_v1beta1_feature_stats_anomaly_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


