# GoogleCloudAiplatformV1beta1BatchReadFeatureValuesRequestEntityTypeSpec

Selects Features of an EntityType to read values of and specifies read settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_type_id** | **str** | Required. ID of the EntityType to select Features. The EntityType id is the entity_type_id specified during EntityType creation. | [optional] 
**feature_selector** | [**GoogleCloudAiplatformV1beta1FeatureSelector**](GoogleCloudAiplatformV1beta1FeatureSelector.md) |  | [optional] 
**settings** | [**List[GoogleCloudAiplatformV1beta1DestinationFeatureSetting]**](GoogleCloudAiplatformV1beta1DestinationFeatureSetting.md) | Per-Feature settings for the batch read. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_batch_read_feature_values_request_entity_type_spec import GoogleCloudAiplatformV1beta1BatchReadFeatureValuesRequestEntityTypeSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1BatchReadFeatureValuesRequestEntityTypeSpec from a JSON string
google_cloud_aiplatform_v1beta1_batch_read_feature_values_request_entity_type_spec_instance = GoogleCloudAiplatformV1beta1BatchReadFeatureValuesRequestEntityTypeSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1BatchReadFeatureValuesRequestEntityTypeSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_batch_read_feature_values_request_entity_type_spec_dict = google_cloud_aiplatform_v1beta1_batch_read_feature_values_request_entity_type_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1BatchReadFeatureValuesRequestEntityTypeSpec from a dict
google_cloud_aiplatform_v1beta1_batch_read_feature_values_request_entity_type_spec_from_dict = GoogleCloudAiplatformV1beta1BatchReadFeatureValuesRequestEntityTypeSpec.from_dict(google_cloud_aiplatform_v1beta1_batch_read_feature_values_request_entity_type_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


