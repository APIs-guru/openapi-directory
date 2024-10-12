# GoogleCloudAiplatformV1beta1FetchFeatureValuesRequest

Request message for FeatureOnlineStoreService.FetchFeatureValues. All the features under the requested feature view will be returned.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_format** | **str** | Optional. Response data format. If not set, FeatureViewDataFormat.KEY_VALUE will be used. | [optional] 
**data_key** | [**GoogleCloudAiplatformV1beta1FeatureViewDataKey**](GoogleCloudAiplatformV1beta1FeatureViewDataKey.md) |  | [optional] 
**format** | **str** | Specify response data format. If not set, KeyValue format will be used. Deprecated. Use FetchFeatureValuesRequest.data_format. | [optional] 
**id** | **str** | Simple ID. The whole string will be used as is to identify Entity to fetch feature values for. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_fetch_feature_values_request import GoogleCloudAiplatformV1beta1FetchFeatureValuesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1FetchFeatureValuesRequest from a JSON string
google_cloud_aiplatform_v1beta1_fetch_feature_values_request_instance = GoogleCloudAiplatformV1beta1FetchFeatureValuesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1FetchFeatureValuesRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_fetch_feature_values_request_dict = google_cloud_aiplatform_v1beta1_fetch_feature_values_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1FetchFeatureValuesRequest from a dict
google_cloud_aiplatform_v1beta1_fetch_feature_values_request_from_dict = GoogleCloudAiplatformV1beta1FetchFeatureValuesRequest.from_dict(google_cloud_aiplatform_v1beta1_fetch_feature_values_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


