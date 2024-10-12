# GoogleCloudAiplatformV1beta1FeatureViewBigQuerySource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_id_columns** | **List[str]** | Required. Columns to construct entity_id / row keys. | [optional] 
**uri** | **str** | Required. The BigQuery view URI that will be materialized on each sync trigger based on FeatureView.SyncConfig. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_feature_view_big_query_source import GoogleCloudAiplatformV1beta1FeatureViewBigQuerySource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1FeatureViewBigQuerySource from a JSON string
google_cloud_aiplatform_v1beta1_feature_view_big_query_source_instance = GoogleCloudAiplatformV1beta1FeatureViewBigQuerySource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1FeatureViewBigQuerySource.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_feature_view_big_query_source_dict = google_cloud_aiplatform_v1beta1_feature_view_big_query_source_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1FeatureViewBigQuerySource from a dict
google_cloud_aiplatform_v1beta1_feature_view_big_query_source_from_dict = GoogleCloudAiplatformV1beta1FeatureViewBigQuerySource.from_dict(google_cloud_aiplatform_v1beta1_feature_view_big_query_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


