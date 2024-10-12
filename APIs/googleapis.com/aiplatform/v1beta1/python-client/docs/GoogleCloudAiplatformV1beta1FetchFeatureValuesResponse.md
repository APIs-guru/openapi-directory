# GoogleCloudAiplatformV1beta1FetchFeatureValuesResponse

Response message for FeatureOnlineStoreService.FetchFeatureValues

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_values** | [**GoogleCloudAiplatformV1beta1FetchFeatureValuesResponseFeatureNameValuePairList**](GoogleCloudAiplatformV1beta1FetchFeatureValuesResponseFeatureNameValuePairList.md) |  | [optional] 
**proto_struct** | **Dict[str, object]** | Feature values in proto Struct format. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_fetch_feature_values_response import GoogleCloudAiplatformV1beta1FetchFeatureValuesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1FetchFeatureValuesResponse from a JSON string
google_cloud_aiplatform_v1beta1_fetch_feature_values_response_instance = GoogleCloudAiplatformV1beta1FetchFeatureValuesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1FetchFeatureValuesResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_fetch_feature_values_response_dict = google_cloud_aiplatform_v1beta1_fetch_feature_values_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1FetchFeatureValuesResponse from a dict
google_cloud_aiplatform_v1beta1_fetch_feature_values_response_from_dict = GoogleCloudAiplatformV1beta1FetchFeatureValuesResponse.from_dict(google_cloud_aiplatform_v1beta1_fetch_feature_values_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


