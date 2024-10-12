# GoogleCloudAiplatformV1beta1FeatureViewFeatureRegistrySourceFeatureGroup

Features belonging to a single feature group that will be synced to Online Store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature_group_id** | **str** | Required. Identifier of the feature group. | [optional] 
**feature_ids** | **List[str]** | Required. Identifiers of features under the feature group. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_feature_view_feature_registry_source_feature_group import GoogleCloudAiplatformV1beta1FeatureViewFeatureRegistrySourceFeatureGroup

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1FeatureViewFeatureRegistrySourceFeatureGroup from a JSON string
google_cloud_aiplatform_v1beta1_feature_view_feature_registry_source_feature_group_instance = GoogleCloudAiplatformV1beta1FeatureViewFeatureRegistrySourceFeatureGroup.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1FeatureViewFeatureRegistrySourceFeatureGroup.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_feature_view_feature_registry_source_feature_group_dict = google_cloud_aiplatform_v1beta1_feature_view_feature_registry_source_feature_group_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1FeatureViewFeatureRegistrySourceFeatureGroup from a dict
google_cloud_aiplatform_v1beta1_feature_view_feature_registry_source_feature_group_from_dict = GoogleCloudAiplatformV1beta1FeatureViewFeatureRegistrySourceFeatureGroup.from_dict(google_cloud_aiplatform_v1beta1_feature_view_feature_registry_source_feature_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


