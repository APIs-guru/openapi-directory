# GoogleCloudAiplatformV1FeaturestoreMonitoringConfigSnapshotAnalysis

Configuration of the Featurestore's Snapshot Analysis Based Monitoring. This type of analysis generates statistics for each Feature based on a snapshot of the latest feature value of each entities every monitoring_interval.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** | The monitoring schedule for snapshot analysis. For EntityType-level config: unset / disabled &#x3D; true indicates disabled by default for Features under it; otherwise by default enable snapshot analysis monitoring with monitoring_interval for Features under it. Feature-level config: disabled &#x3D; true indicates disabled regardless of the EntityType-level config; unset monitoring_interval indicates going with EntityType-level config; otherwise run snapshot analysis monitoring with monitoring_interval regardless of the EntityType-level config. Explicitly Disable the snapshot analysis based monitoring. | [optional] 
**monitoring_interval_days** | **int** | Configuration of the snapshot analysis based monitoring pipeline running interval. The value indicates number of days. | [optional] 
**staleness_days** | **int** | Customized export features time window for snapshot analysis. Unit is one day. Default value is 3 weeks. Minimum value is 1 day. Maximum value is 4000 days. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_featurestore_monitoring_config_snapshot_analysis import GoogleCloudAiplatformV1FeaturestoreMonitoringConfigSnapshotAnalysis

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1FeaturestoreMonitoringConfigSnapshotAnalysis from a JSON string
google_cloud_aiplatform_v1_featurestore_monitoring_config_snapshot_analysis_instance = GoogleCloudAiplatformV1FeaturestoreMonitoringConfigSnapshotAnalysis.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1FeaturestoreMonitoringConfigSnapshotAnalysis.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_featurestore_monitoring_config_snapshot_analysis_dict = google_cloud_aiplatform_v1_featurestore_monitoring_config_snapshot_analysis_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1FeaturestoreMonitoringConfigSnapshotAnalysis from a dict
google_cloud_aiplatform_v1_featurestore_monitoring_config_snapshot_analysis_from_dict = GoogleCloudAiplatformV1FeaturestoreMonitoringConfigSnapshotAnalysis.from_dict(google_cloud_aiplatform_v1_featurestore_monitoring_config_snapshot_analysis_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


