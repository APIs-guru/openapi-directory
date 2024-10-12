# GoogleCloudAiplatformV1beta1ReadFeatureValuesResponse

Response message for FeaturestoreOnlineServingService.ReadFeatureValues.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_view** | [**GoogleCloudAiplatformV1beta1ReadFeatureValuesResponseEntityView**](GoogleCloudAiplatformV1beta1ReadFeatureValuesResponseEntityView.md) |  | [optional] 
**header** | [**GoogleCloudAiplatformV1beta1ReadFeatureValuesResponseHeader**](GoogleCloudAiplatformV1beta1ReadFeatureValuesResponseHeader.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_read_feature_values_response import GoogleCloudAiplatformV1beta1ReadFeatureValuesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ReadFeatureValuesResponse from a JSON string
google_cloud_aiplatform_v1beta1_read_feature_values_response_instance = GoogleCloudAiplatformV1beta1ReadFeatureValuesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ReadFeatureValuesResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_read_feature_values_response_dict = google_cloud_aiplatform_v1beta1_read_feature_values_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ReadFeatureValuesResponse from a dict
google_cloud_aiplatform_v1beta1_read_feature_values_response_from_dict = GoogleCloudAiplatformV1beta1ReadFeatureValuesResponse.from_dict(google_cloud_aiplatform_v1beta1_read_feature_values_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


