# GoogleCloudAiplatformV1beta1FeatureGroupBigQuery

Input source type for BigQuery Tables and Views.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**big_query_source** | [**GoogleCloudAiplatformV1beta1BigQuerySource**](GoogleCloudAiplatformV1beta1BigQuerySource.md) |  | [optional] 
**entity_id_columns** | **List[str]** | Optional. Columns to construct entity_id / row keys. If not provided defaults to &#x60;entity_id&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_feature_group_big_query import GoogleCloudAiplatformV1beta1FeatureGroupBigQuery

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1FeatureGroupBigQuery from a JSON string
google_cloud_aiplatform_v1beta1_feature_group_big_query_instance = GoogleCloudAiplatformV1beta1FeatureGroupBigQuery.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1FeatureGroupBigQuery.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_feature_group_big_query_dict = google_cloud_aiplatform_v1beta1_feature_group_big_query_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1FeatureGroupBigQuery from a dict
google_cloud_aiplatform_v1beta1_feature_group_big_query_from_dict = GoogleCloudAiplatformV1beta1FeatureGroupBigQuery.from_dict(google_cloud_aiplatform_v1beta1_feature_group_big_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


