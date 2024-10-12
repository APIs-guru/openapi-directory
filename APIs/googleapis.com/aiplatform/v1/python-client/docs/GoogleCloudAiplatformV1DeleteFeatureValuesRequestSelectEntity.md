# GoogleCloudAiplatformV1DeleteFeatureValuesRequestSelectEntity

Message to select entity. If an entity id is selected, all the feature values corresponding to the entity id will be deleted, including the entityId.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_id_selector** | [**GoogleCloudAiplatformV1EntityIdSelector**](GoogleCloudAiplatformV1EntityIdSelector.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_delete_feature_values_request_select_entity import GoogleCloudAiplatformV1DeleteFeatureValuesRequestSelectEntity

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1DeleteFeatureValuesRequestSelectEntity from a JSON string
google_cloud_aiplatform_v1_delete_feature_values_request_select_entity_instance = GoogleCloudAiplatformV1DeleteFeatureValuesRequestSelectEntity.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1DeleteFeatureValuesRequestSelectEntity.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_delete_feature_values_request_select_entity_dict = google_cloud_aiplatform_v1_delete_feature_values_request_select_entity_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1DeleteFeatureValuesRequestSelectEntity from a dict
google_cloud_aiplatform_v1_delete_feature_values_request_select_entity_from_dict = GoogleCloudAiplatformV1DeleteFeatureValuesRequestSelectEntity.from_dict(google_cloud_aiplatform_v1_delete_feature_values_request_select_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


