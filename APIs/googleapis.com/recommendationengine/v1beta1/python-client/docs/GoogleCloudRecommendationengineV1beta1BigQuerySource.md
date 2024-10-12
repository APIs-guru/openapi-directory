# GoogleCloudRecommendationengineV1beta1BigQuerySource

BigQuery source import data from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_schema** | **str** | Optional. The schema to use when parsing the data from the source. Supported values for catalog imports: 1: \&quot;catalog_recommendations_ai\&quot; using https://cloud.google.com/recommendations-ai/docs/upload-catalog#json (Default for catalogItems.import) 2: \&quot;catalog_merchant_center\&quot; using https://cloud.google.com/recommendations-ai/docs/upload-catalog#mc Supported values for user event imports: 1: \&quot;user_events_recommendations_ai\&quot; using https://cloud.google.com/recommendations-ai/docs/manage-user-events#import (Default for userEvents.import) 2. \&quot;user_events_ga360\&quot; using https://support.google.com/analytics/answer/3437719?hl&#x3D;en | [optional] 
**dataset_id** | **str** | Required. The BigQuery data set to copy the data from. | [optional] 
**gcs_staging_dir** | **str** | Optional. Intermediate Cloud Storage directory used for the import. Can be specified if one wants to have the BigQuery export to a specific Cloud Storage directory. | [optional] 
**project_id** | **str** | Optional. The project id (can be project # or id) that the BigQuery source is in. If not specified, inherits the project id from the parent request. | [optional] 
**table_id** | **str** | Required. The BigQuery table to copy the data from. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_big_query_source import GoogleCloudRecommendationengineV1beta1BigQuerySource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1BigQuerySource from a JSON string
google_cloud_recommendationengine_v1beta1_big_query_source_instance = GoogleCloudRecommendationengineV1beta1BigQuerySource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1BigQuerySource.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_big_query_source_dict = google_cloud_recommendationengine_v1beta1_big_query_source_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1BigQuerySource from a dict
google_cloud_recommendationengine_v1beta1_big_query_source_from_dict = GoogleCloudRecommendationengineV1beta1BigQuerySource.from_dict(google_cloud_recommendationengine_v1beta1_big_query_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


