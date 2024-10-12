# GoogleCloudAiplatformV1ReadFeatureValuesResponseEntityView

Entity view with Feature values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[GoogleCloudAiplatformV1ReadFeatureValuesResponseEntityViewData]**](GoogleCloudAiplatformV1ReadFeatureValuesResponseEntityViewData.md) | Each piece of data holds the k requested values for one requested Feature. If no values for the requested Feature exist, the corresponding cell will be empty. This has the same size and is in the same order as the features from the header ReadFeatureValuesResponse.header. | [optional] 
**entity_id** | **str** | ID of the requested entity. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_read_feature_values_response_entity_view import GoogleCloudAiplatformV1ReadFeatureValuesResponseEntityView

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ReadFeatureValuesResponseEntityView from a JSON string
google_cloud_aiplatform_v1_read_feature_values_response_entity_view_instance = GoogleCloudAiplatformV1ReadFeatureValuesResponseEntityView.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ReadFeatureValuesResponseEntityView.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_read_feature_values_response_entity_view_dict = google_cloud_aiplatform_v1_read_feature_values_response_entity_view_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ReadFeatureValuesResponseEntityView from a dict
google_cloud_aiplatform_v1_read_feature_values_response_entity_view_from_dict = GoogleCloudAiplatformV1ReadFeatureValuesResponseEntityView.from_dict(google_cloud_aiplatform_v1_read_feature_values_response_entity_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


