# GoogleCloudRecommendationengineV1beta1GcsSource

Google Cloud Storage location for input content. format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_uris** | **List[str]** | Required. Google Cloud Storage URIs to input files. URI can be up to 2000 characters long. URIs can match the full object path (for example, &#x60;gs://bucket/directory/object.json&#x60;) or a pattern matching one or more files, such as &#x60;gs://bucket/directory/*.json&#x60;. A request can contain at most 100 files, and each file can be up to 2 GB. See [Importing catalog information](/recommendations-ai/docs/upload-catalog) for the expected file format and setup instructions. | [optional] 
**json_schema** | **str** | Optional. The schema to use when parsing the data from the source. Supported values for catalog imports: 1: \&quot;catalog_recommendations_ai\&quot; using https://cloud.google.com/recommendations-ai/docs/upload-catalog#json (Default for catalogItems.import) 2: \&quot;catalog_merchant_center\&quot; using https://cloud.google.com/recommendations-ai/docs/upload-catalog#mc Supported values for user events imports: 1: \&quot;user_events_recommendations_ai\&quot; using https://cloud.google.com/recommendations-ai/docs/manage-user-events#import (Default for userEvents.import) 2. \&quot;user_events_ga360\&quot; using https://support.google.com/analytics/answer/3437719?hl&#x3D;en | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_gcs_source import GoogleCloudRecommendationengineV1beta1GcsSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1GcsSource from a JSON string
google_cloud_recommendationengine_v1beta1_gcs_source_instance = GoogleCloudRecommendationengineV1beta1GcsSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1GcsSource.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_gcs_source_dict = google_cloud_recommendationengine_v1beta1_gcs_source_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1GcsSource from a dict
google_cloud_recommendationengine_v1beta1_gcs_source_from_dict = GoogleCloudRecommendationengineV1beta1GcsSource.from_dict(google_cloud_recommendationengine_v1beta1_gcs_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


