# GoogleCloudAiplatformV1beta1DeleteFeatureValuesResponse

Response message for FeaturestoreService.DeleteFeatureValues.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**select_entity** | [**GoogleCloudAiplatformV1beta1DeleteFeatureValuesResponseSelectEntity**](GoogleCloudAiplatformV1beta1DeleteFeatureValuesResponseSelectEntity.md) |  | [optional] 
**select_time_range_and_feature** | [**GoogleCloudAiplatformV1beta1DeleteFeatureValuesResponseSelectTimeRangeAndFeature**](GoogleCloudAiplatformV1beta1DeleteFeatureValuesResponseSelectTimeRangeAndFeature.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_delete_feature_values_response import GoogleCloudAiplatformV1beta1DeleteFeatureValuesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1DeleteFeatureValuesResponse from a JSON string
google_cloud_aiplatform_v1beta1_delete_feature_values_response_instance = GoogleCloudAiplatformV1beta1DeleteFeatureValuesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1DeleteFeatureValuesResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_delete_feature_values_response_dict = google_cloud_aiplatform_v1beta1_delete_feature_values_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1DeleteFeatureValuesResponse from a dict
google_cloud_aiplatform_v1beta1_delete_feature_values_response_from_dict = GoogleCloudAiplatformV1beta1DeleteFeatureValuesResponse.from_dict(google_cloud_aiplatform_v1beta1_delete_feature_values_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


