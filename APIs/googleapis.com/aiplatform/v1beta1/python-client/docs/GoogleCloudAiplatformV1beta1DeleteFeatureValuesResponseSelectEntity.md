# GoogleCloudAiplatformV1beta1DeleteFeatureValuesResponseSelectEntity

Response message if the request uses the SelectEntity option.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offline_storage_deleted_entity_row_count** | **str** | The count of deleted entity rows in the offline storage. Each row corresponds to the combination of an entity ID and a timestamp. One entity ID can have multiple rows in the offline storage. | [optional] 
**online_storage_deleted_entity_count** | **str** | The count of deleted entities in the online storage. Each entity ID corresponds to one entity. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_delete_feature_values_response_select_entity import GoogleCloudAiplatformV1beta1DeleteFeatureValuesResponseSelectEntity

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1DeleteFeatureValuesResponseSelectEntity from a JSON string
google_cloud_aiplatform_v1beta1_delete_feature_values_response_select_entity_instance = GoogleCloudAiplatformV1beta1DeleteFeatureValuesResponseSelectEntity.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1DeleteFeatureValuesResponseSelectEntity.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_delete_feature_values_response_select_entity_dict = google_cloud_aiplatform_v1beta1_delete_feature_values_response_select_entity_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1DeleteFeatureValuesResponseSelectEntity from a dict
google_cloud_aiplatform_v1beta1_delete_feature_values_response_select_entity_from_dict = GoogleCloudAiplatformV1beta1DeleteFeatureValuesResponseSelectEntity.from_dict(google_cloud_aiplatform_v1beta1_delete_feature_values_response_select_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


