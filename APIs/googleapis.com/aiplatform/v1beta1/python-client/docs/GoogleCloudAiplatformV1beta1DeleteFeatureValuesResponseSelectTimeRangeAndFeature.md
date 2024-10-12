# GoogleCloudAiplatformV1beta1DeleteFeatureValuesResponseSelectTimeRangeAndFeature

Response message if the request uses the SelectTimeRangeAndFeature option.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**impacted_feature_count** | **str** | The count of the features or columns impacted. This is the same as the feature count in the request. | [optional] 
**offline_storage_modified_entity_row_count** | **str** | The count of modified entity rows in the offline storage. Each row corresponds to the combination of an entity ID and a timestamp. One entity ID can have multiple rows in the offline storage. Within each row, only the features specified in the request are deleted. | [optional] 
**online_storage_modified_entity_count** | **str** | The count of modified entities in the online storage. Each entity ID corresponds to one entity. Within each entity, only the features specified in the request are deleted. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_delete_feature_values_response_select_time_range_and_feature import GoogleCloudAiplatformV1beta1DeleteFeatureValuesResponseSelectTimeRangeAndFeature

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1DeleteFeatureValuesResponseSelectTimeRangeAndFeature from a JSON string
google_cloud_aiplatform_v1beta1_delete_feature_values_response_select_time_range_and_feature_instance = GoogleCloudAiplatformV1beta1DeleteFeatureValuesResponseSelectTimeRangeAndFeature.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1DeleteFeatureValuesResponseSelectTimeRangeAndFeature.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_delete_feature_values_response_select_time_range_and_feature_dict = google_cloud_aiplatform_v1beta1_delete_feature_values_response_select_time_range_and_feature_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1DeleteFeatureValuesResponseSelectTimeRangeAndFeature from a dict
google_cloud_aiplatform_v1beta1_delete_feature_values_response_select_time_range_and_feature_from_dict = GoogleCloudAiplatformV1beta1DeleteFeatureValuesResponseSelectTimeRangeAndFeature.from_dict(google_cloud_aiplatform_v1beta1_delete_feature_values_response_select_time_range_and_feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


