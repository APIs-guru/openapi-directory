# GoogleCloudAiplatformV1beta1ReadFeatureValuesRequest

Request message for FeaturestoreOnlineServingService.ReadFeatureValues.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_id** | **str** | Required. ID for a specific entity. For example, for a machine learning model predicting user clicks on a website, an entity ID could be &#x60;user_123&#x60;. | [optional] 
**feature_selector** | [**GoogleCloudAiplatformV1beta1FeatureSelector**](GoogleCloudAiplatformV1beta1FeatureSelector.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_read_feature_values_request import GoogleCloudAiplatformV1beta1ReadFeatureValuesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ReadFeatureValuesRequest from a JSON string
google_cloud_aiplatform_v1beta1_read_feature_values_request_instance = GoogleCloudAiplatformV1beta1ReadFeatureValuesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ReadFeatureValuesRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_read_feature_values_request_dict = google_cloud_aiplatform_v1beta1_read_feature_values_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ReadFeatureValuesRequest from a dict
google_cloud_aiplatform_v1beta1_read_feature_values_request_from_dict = GoogleCloudAiplatformV1beta1ReadFeatureValuesRequest.from_dict(google_cloud_aiplatform_v1beta1_read_feature_values_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


