# GoogleCloudAiplatformV1Feature

Feature Metadata information. For example, color is a feature that describes an apple.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Only applicable for Vertex AI Feature Store (Legacy). Timestamp when this EntityType was created. | [optional] [readonly] 
**description** | **str** | Description of the Feature. | [optional] 
**disable_monitoring** | **bool** | Optional. Only applicable for Vertex AI Feature Store (Legacy). If not set, use the monitoring_config defined for the EntityType this Feature belongs to. Only Features with type (Feature.ValueType) BOOL, STRING, DOUBLE or INT64 can enable monitoring. If set to true, all types of data monitoring are disabled despite the config on EntityType. | [optional] 
**etag** | **str** | Used to perform a consistent read-modify-write updates. If not set, a blind \&quot;overwrite\&quot; update happens. | [optional] 
**labels** | **Dict[str, str]** | Optional. The labels with user-defined metadata to organize your Features. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information on and examples of labels. No more than 64 user labels can be associated with one Feature (System labels are excluded).\&quot; System reserved label keys are prefixed with \&quot;aiplatform.googleapis.com/\&quot; and are immutable. | [optional] 
**monitoring_stats_anomalies** | [**List[GoogleCloudAiplatformV1FeatureMonitoringStatsAnomaly]**](GoogleCloudAiplatformV1FeatureMonitoringStatsAnomaly.md) | Output only. Only applicable for Vertex AI Feature Store (Legacy). The list of historical stats and anomalies with specified objectives. | [optional] [readonly] 
**name** | **str** | Immutable. Name of the Feature. Format: &#x60;projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}/features/{feature}&#x60; &#x60;projects/{project}/locations/{location}/featureGroups/{feature_group}/features/{feature}&#x60; The last part feature is assigned by the client. The feature can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscore(_), and ASCII digits 0-9 starting with a letter. The value will be unique given an entity type. | [optional] 
**point_of_contact** | **str** | Entity responsible for maintaining this feature. Can be comma separated list of email addresses or URIs. | [optional] 
**update_time** | **str** | Output only. Only applicable for Vertex AI Feature Store (Legacy). Timestamp when this EntityType was most recently updated. | [optional] [readonly] 
**value_type** | **str** | Immutable. Only applicable for Vertex AI Feature Store (Legacy). Type of Feature value. | [optional] 
**version_column_name** | **str** | Only applicable for Vertex AI Feature Store. The name of the BigQuery Table/View column hosting data for this version. If no value is provided, will use feature_id. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_feature import GoogleCloudAiplatformV1Feature

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1Feature from a JSON string
google_cloud_aiplatform_v1_feature_instance = GoogleCloudAiplatformV1Feature.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1Feature.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_feature_dict = google_cloud_aiplatform_v1_feature_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1Feature from a dict
google_cloud_aiplatform_v1_feature_from_dict = GoogleCloudAiplatformV1Feature.from_dict(google_cloud_aiplatform_v1_feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


