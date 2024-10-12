# GoogleCloudRecommenderV1RecommenderConfig

Configuration for a Recommender.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | Allows clients to store small amounts of arbitrary data. Annotations must follow the Kubernetes syntax. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between. | [optional] 
**display_name** | **str** | A user-settable field to provide a human-readable name to be used in user interfaces. | [optional] 
**etag** | **str** | Fingerprint of the RecommenderConfig. Provides optimistic locking when updating. | [optional] 
**name** | **str** | Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config | [optional] 
**recommender_generation_config** | [**GoogleCloudRecommenderV1RecommenderGenerationConfig**](GoogleCloudRecommenderV1RecommenderGenerationConfig.md) |  | [optional] 
**revision_id** | **str** | Output only. Immutable. The revision ID of the config. A new revision is committed whenever the config is changed in any way. The format is an 8-character hexadecimal string. | [optional] [readonly] 
**update_time** | **str** | Last time when the config was updated. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1_recommender_config import GoogleCloudRecommenderV1RecommenderConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1RecommenderConfig from a JSON string
google_cloud_recommender_v1_recommender_config_instance = GoogleCloudRecommenderV1RecommenderConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1RecommenderConfig.to_json())

# convert the object into a dict
google_cloud_recommender_v1_recommender_config_dict = google_cloud_recommender_v1_recommender_config_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1RecommenderConfig from a dict
google_cloud_recommender_v1_recommender_config_from_dict = GoogleCloudRecommenderV1RecommenderConfig.from_dict(google_cloud_recommender_v1_recommender_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


