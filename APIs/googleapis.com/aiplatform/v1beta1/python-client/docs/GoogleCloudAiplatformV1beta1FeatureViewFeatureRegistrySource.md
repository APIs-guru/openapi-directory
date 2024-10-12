# GoogleCloudAiplatformV1beta1FeatureViewFeatureRegistrySource

A Feature Registry source for features that need to be synced to Online Store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature_groups** | [**List[GoogleCloudAiplatformV1beta1FeatureViewFeatureRegistrySourceFeatureGroup]**](GoogleCloudAiplatformV1beta1FeatureViewFeatureRegistrySourceFeatureGroup.md) | Required. List of features that need to be synced to Online Store. | [optional] 
**project_number** | **str** | Optional. The project number of the parent project of the Feature Groups. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_feature_view_feature_registry_source import GoogleCloudAiplatformV1beta1FeatureViewFeatureRegistrySource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1FeatureViewFeatureRegistrySource from a JSON string
google_cloud_aiplatform_v1beta1_feature_view_feature_registry_source_instance = GoogleCloudAiplatformV1beta1FeatureViewFeatureRegistrySource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1FeatureViewFeatureRegistrySource.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_feature_view_feature_registry_source_dict = google_cloud_aiplatform_v1beta1_feature_view_feature_registry_source_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1FeatureViewFeatureRegistrySource from a dict
google_cloud_aiplatform_v1beta1_feature_view_feature_registry_source_from_dict = GoogleCloudAiplatformV1beta1FeatureViewFeatureRegistrySource.from_dict(google_cloud_aiplatform_v1beta1_feature_view_feature_registry_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


