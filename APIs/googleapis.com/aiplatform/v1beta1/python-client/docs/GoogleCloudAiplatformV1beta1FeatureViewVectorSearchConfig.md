# GoogleCloudAiplatformV1beta1FeatureViewVectorSearchConfig

Deprecated. Use IndexConfig instead.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brute_force_config** | **object** |  | [optional] 
**crowding_column** | **str** | Optional. Column of crowding. This column contains crowding attribute which is a constraint on a neighbor list produced by nearest neighbor search requiring that no more than some value k&#39; of the k neighbors returned have the same value of crowding_attribute. | [optional] 
**distance_measure_type** | **str** | Optional. The distance measure used in nearest neighbor search. | [optional] 
**embedding_column** | **str** | Optional. Column of embedding. This column contains the source data to create index for vector search. embedding_column must be set when using vector search. | [optional] 
**embedding_dimension** | **int** | Optional. The number of dimensions of the input embedding. | [optional] 
**filter_columns** | **List[str]** | Optional. Columns of features that&#39;re used to filter vector search results. | [optional] 
**tree_ah_config** | [**GoogleCloudAiplatformV1beta1FeatureViewVectorSearchConfigTreeAHConfig**](GoogleCloudAiplatformV1beta1FeatureViewVectorSearchConfigTreeAHConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_feature_view_vector_search_config import GoogleCloudAiplatformV1beta1FeatureViewVectorSearchConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1FeatureViewVectorSearchConfig from a JSON string
google_cloud_aiplatform_v1beta1_feature_view_vector_search_config_instance = GoogleCloudAiplatformV1beta1FeatureViewVectorSearchConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1FeatureViewVectorSearchConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_feature_view_vector_search_config_dict = google_cloud_aiplatform_v1beta1_feature_view_vector_search_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1FeatureViewVectorSearchConfig from a dict
google_cloud_aiplatform_v1beta1_feature_view_vector_search_config_from_dict = GoogleCloudAiplatformV1beta1FeatureViewVectorSearchConfig.from_dict(google_cloud_aiplatform_v1beta1_feature_view_vector_search_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


