# GoogleCloudAiplatformV1beta1StreamingReadFeatureValuesRequest

Request message for FeaturestoreOnlineServingService.StreamingFeatureValuesRead.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_ids** | **List[str]** | Required. IDs of entities to read Feature values of. The maximum number of IDs is 100. For example, for a machine learning model predicting user clicks on a website, an entity ID could be &#x60;user_123&#x60;. | [optional] 
**feature_selector** | [**GoogleCloudAiplatformV1beta1FeatureSelector**](GoogleCloudAiplatformV1beta1FeatureSelector.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_streaming_read_feature_values_request import GoogleCloudAiplatformV1beta1StreamingReadFeatureValuesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1StreamingReadFeatureValuesRequest from a JSON string
google_cloud_aiplatform_v1beta1_streaming_read_feature_values_request_instance = GoogleCloudAiplatformV1beta1StreamingReadFeatureValuesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1StreamingReadFeatureValuesRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_streaming_read_feature_values_request_dict = google_cloud_aiplatform_v1beta1_streaming_read_feature_values_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1StreamingReadFeatureValuesRequest from a dict
google_cloud_aiplatform_v1beta1_streaming_read_feature_values_request_from_dict = GoogleCloudAiplatformV1beta1StreamingReadFeatureValuesRequest.from_dict(google_cloud_aiplatform_v1beta1_streaming_read_feature_values_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


