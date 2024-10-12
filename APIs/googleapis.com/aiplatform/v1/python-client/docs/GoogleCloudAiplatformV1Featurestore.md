# GoogleCloudAiplatformV1Featurestore

Vertex AI Feature Store provides a centralized repository for organizing, storing, and serving ML features. The Featurestore is a top-level container for your features and their values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when this Featurestore was created. | [optional] [readonly] 
**encryption_spec** | [**GoogleCloudAiplatformV1EncryptionSpec**](GoogleCloudAiplatformV1EncryptionSpec.md) |  | [optional] 
**etag** | **str** | Optional. Used to perform consistent read-modify-write updates. If not set, a blind \&quot;overwrite\&quot; update happens. | [optional] 
**labels** | **Dict[str, str]** | Optional. The labels with user-defined metadata to organize your Featurestore. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information on and examples of labels. No more than 64 user labels can be associated with one Featurestore(System labels are excluded).\&quot; System reserved label keys are prefixed with \&quot;aiplatform.googleapis.com/\&quot; and are immutable. | [optional] 
**name** | **str** | Output only. Name of the Featurestore. Format: &#x60;projects/{project}/locations/{location}/featurestores/{featurestore}&#x60; | [optional] [readonly] 
**online_serving_config** | [**GoogleCloudAiplatformV1FeaturestoreOnlineServingConfig**](GoogleCloudAiplatformV1FeaturestoreOnlineServingConfig.md) |  | [optional] 
**online_storage_ttl_days** | **int** | Optional. TTL in days for feature values that will be stored in online serving storage. The Feature Store online storage periodically removes obsolete feature values older than &#x60;online_storage_ttl_days&#x60; since the feature generation time. Note that &#x60;online_storage_ttl_days&#x60; should be less than or equal to &#x60;offline_storage_ttl_days&#x60; for each EntityType under a featurestore. If not set, default to 4000 days | [optional] 
**state** | **str** | Output only. State of the featurestore. | [optional] [readonly] 
**update_time** | **str** | Output only. Timestamp when this Featurestore was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_featurestore import GoogleCloudAiplatformV1Featurestore

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1Featurestore from a JSON string
google_cloud_aiplatform_v1_featurestore_instance = GoogleCloudAiplatformV1Featurestore.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1Featurestore.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_featurestore_dict = google_cloud_aiplatform_v1_featurestore_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1Featurestore from a dict
google_cloud_aiplatform_v1_featurestore_from_dict = GoogleCloudAiplatformV1Featurestore.from_dict(google_cloud_aiplatform_v1_featurestore_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


