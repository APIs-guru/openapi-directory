# GoogleCloudAiplatformV1CreateFeatureRequest

Request message for FeaturestoreService.CreateFeature. Request message for FeatureRegistryService.CreateFeature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature** | [**GoogleCloudAiplatformV1Feature**](GoogleCloudAiplatformV1Feature.md) |  | [optional] 
**feature_id** | **str** | Required. The ID to use for the Feature, which will become the final component of the Feature&#39;s resource name. This value may be up to 128 characters, and valid characters are &#x60;[a-z0-9_]&#x60;. The first character cannot be a number. The value must be unique within an EntityType/FeatureGroup. | [optional] 
**parent** | **str** | Required. The resource name of the EntityType or FeatureGroup to create a Feature. Format for entity_type as parent: &#x60;projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entity_type}&#x60; Format for feature_group as parent: &#x60;projects/{project}/locations/{location}/featureGroups/{feature_group}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_create_feature_request import GoogleCloudAiplatformV1CreateFeatureRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1CreateFeatureRequest from a JSON string
google_cloud_aiplatform_v1_create_feature_request_instance = GoogleCloudAiplatformV1CreateFeatureRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1CreateFeatureRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_create_feature_request_dict = google_cloud_aiplatform_v1_create_feature_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1CreateFeatureRequest from a dict
google_cloud_aiplatform_v1_create_feature_request_from_dict = GoogleCloudAiplatformV1CreateFeatureRequest.from_dict(google_cloud_aiplatform_v1_create_feature_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


