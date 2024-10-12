# GoogleCloudRecommenderV1beta1InsightTypeConfig

Configuration for an InsightType.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | Allows clients to store small amounts of arbitrary data. Annotations must follow the Kubernetes syntax. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. | [optional] 
**display_name** | **str** | A user-settable field to provide a human-readable name to be used in user interfaces. | [optional] 
**etag** | **str** | Fingerprint of the InsightTypeConfig. Provides optimistic locking when updating. | [optional] 
**insight_type_generation_config** | [**GoogleCloudRecommenderV1beta1InsightTypeGenerationConfig**](GoogleCloudRecommenderV1beta1InsightTypeGenerationConfig.md) |  | [optional] 
**name** | **str** | Name of insight type config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config | [optional] 
**revision_id** | **str** | Output only. Immutable. The revision ID of the config. A new revision is committed whenever the config is changed in any way. The format is an 8-character hexadecimal string. | [optional] [readonly] 
**update_time** | **str** | Last time when the config was updated. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1beta1_insight_type_config import GoogleCloudRecommenderV1beta1InsightTypeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1beta1InsightTypeConfig from a JSON string
google_cloud_recommender_v1beta1_insight_type_config_instance = GoogleCloudRecommenderV1beta1InsightTypeConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1beta1InsightTypeConfig.to_json())

# convert the object into a dict
google_cloud_recommender_v1beta1_insight_type_config_dict = google_cloud_recommender_v1beta1_insight_type_config_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1beta1InsightTypeConfig from a dict
google_cloud_recommender_v1beta1_insight_type_config_from_dict = GoogleCloudRecommenderV1beta1InsightTypeConfig.from_dict(google_cloud_recommender_v1beta1_insight_type_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


