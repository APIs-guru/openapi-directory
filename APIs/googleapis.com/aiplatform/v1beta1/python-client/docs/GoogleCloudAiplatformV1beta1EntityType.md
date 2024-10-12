# GoogleCloudAiplatformV1beta1EntityType

An entity type is a type of object in a system that needs to be modeled and have stored information about. For example, driver is an entity type, and driver0 is an instance of an entity type driver.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when this EntityType was created. | [optional] [readonly] 
**description** | **str** | Optional. Description of the EntityType. | [optional] 
**etag** | **str** | Optional. Used to perform a consistent read-modify-write updates. If not set, a blind \&quot;overwrite\&quot; update happens. | [optional] 
**labels** | **Dict[str, str]** | Optional. The labels with user-defined metadata to organize your EntityTypes. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information on and examples of labels. No more than 64 user labels can be associated with one EntityType (System labels are excluded).\&quot; System reserved label keys are prefixed with \&quot;aiplatform.googleapis.com/\&quot; and are immutable. | [optional] 
**monitoring_config** | [**GoogleCloudAiplatformV1beta1FeaturestoreMonitoringConfig**](GoogleCloudAiplatformV1beta1FeaturestoreMonitoringConfig.md) |  | [optional] 
**name** | **str** | Immutable. Name of the EntityType. Format: &#x60;projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}&#x60; The last part entity_type is assigned by the client. The entity_type can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and a-z and underscore(_), and ASCII digits 0-9 starting with a letter. The value will be unique given a featurestore. | [optional] 
**offline_storage_ttl_days** | **int** | Optional. Config for data retention policy in offline storage. TTL in days for feature values that will be stored in offline storage. The Feature Store offline storage periodically removes obsolete feature values older than &#x60;offline_storage_ttl_days&#x60; since the feature generation time. If unset (or explicitly set to 0), default to 4000 days TTL. | [optional] 
**update_time** | **str** | Output only. Timestamp when this EntityType was most recently updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_entity_type import GoogleCloudAiplatformV1beta1EntityType

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1EntityType from a JSON string
google_cloud_aiplatform_v1beta1_entity_type_instance = GoogleCloudAiplatformV1beta1EntityType.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1EntityType.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_entity_type_dict = google_cloud_aiplatform_v1beta1_entity_type_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1EntityType from a dict
google_cloud_aiplatform_v1beta1_entity_type_from_dict = GoogleCloudAiplatformV1beta1EntityType.from_dict(google_cloud_aiplatform_v1beta1_entity_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


