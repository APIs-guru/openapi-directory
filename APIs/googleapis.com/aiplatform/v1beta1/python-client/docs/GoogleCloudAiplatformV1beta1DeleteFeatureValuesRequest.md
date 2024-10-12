# GoogleCloudAiplatformV1beta1DeleteFeatureValuesRequest

Request message for FeaturestoreService.DeleteFeatureValues.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**select_entity** | [**GoogleCloudAiplatformV1beta1DeleteFeatureValuesRequestSelectEntity**](GoogleCloudAiplatformV1beta1DeleteFeatureValuesRequestSelectEntity.md) |  | [optional] 
**select_time_range_and_feature** | [**GoogleCloudAiplatformV1beta1DeleteFeatureValuesRequestSelectTimeRangeAndFeature**](GoogleCloudAiplatformV1beta1DeleteFeatureValuesRequestSelectTimeRangeAndFeature.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_delete_feature_values_request import GoogleCloudAiplatformV1beta1DeleteFeatureValuesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1DeleteFeatureValuesRequest from a JSON string
google_cloud_aiplatform_v1beta1_delete_feature_values_request_instance = GoogleCloudAiplatformV1beta1DeleteFeatureValuesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1DeleteFeatureValuesRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_delete_feature_values_request_dict = google_cloud_aiplatform_v1beta1_delete_feature_values_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1DeleteFeatureValuesRequest from a dict
google_cloud_aiplatform_v1beta1_delete_feature_values_request_from_dict = GoogleCloudAiplatformV1beta1DeleteFeatureValuesRequest.from_dict(google_cloud_aiplatform_v1beta1_delete_feature_values_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


