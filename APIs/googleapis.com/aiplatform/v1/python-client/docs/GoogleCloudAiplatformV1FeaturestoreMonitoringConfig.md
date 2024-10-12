# GoogleCloudAiplatformV1FeaturestoreMonitoringConfig

Configuration of how features in Featurestore are monitored.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categorical_threshold_config** | [**GoogleCloudAiplatformV1FeaturestoreMonitoringConfigThresholdConfig**](GoogleCloudAiplatformV1FeaturestoreMonitoringConfigThresholdConfig.md) |  | [optional] 
**import_features_analysis** | [**GoogleCloudAiplatformV1FeaturestoreMonitoringConfigImportFeaturesAnalysis**](GoogleCloudAiplatformV1FeaturestoreMonitoringConfigImportFeaturesAnalysis.md) |  | [optional] 
**numerical_threshold_config** | [**GoogleCloudAiplatformV1FeaturestoreMonitoringConfigThresholdConfig**](GoogleCloudAiplatformV1FeaturestoreMonitoringConfigThresholdConfig.md) |  | [optional] 
**snapshot_analysis** | [**GoogleCloudAiplatformV1FeaturestoreMonitoringConfigSnapshotAnalysis**](GoogleCloudAiplatformV1FeaturestoreMonitoringConfigSnapshotAnalysis.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_featurestore_monitoring_config import GoogleCloudAiplatformV1FeaturestoreMonitoringConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1FeaturestoreMonitoringConfig from a JSON string
google_cloud_aiplatform_v1_featurestore_monitoring_config_instance = GoogleCloudAiplatformV1FeaturestoreMonitoringConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1FeaturestoreMonitoringConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_featurestore_monitoring_config_dict = google_cloud_aiplatform_v1_featurestore_monitoring_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1FeaturestoreMonitoringConfig from a dict
google_cloud_aiplatform_v1_featurestore_monitoring_config_from_dict = GoogleCloudAiplatformV1FeaturestoreMonitoringConfig.from_dict(google_cloud_aiplatform_v1_featurestore_monitoring_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


