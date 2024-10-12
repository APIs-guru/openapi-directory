# GoogleCloudAiplatformV1FetchFeatureValuesRequest

Request message for FeatureOnlineStoreService.FetchFeatureValues. All the features under the requested feature view will be returned.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_format** | **str** | Optional. Response data format. If not set, FeatureViewDataFormat.KEY_VALUE will be used. | [optional] 
**data_key** | [**GoogleCloudAiplatformV1FeatureViewDataKey**](GoogleCloudAiplatformV1FeatureViewDataKey.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_fetch_feature_values_request import GoogleCloudAiplatformV1FetchFeatureValuesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1FetchFeatureValuesRequest from a JSON string
google_cloud_aiplatform_v1_fetch_feature_values_request_instance = GoogleCloudAiplatformV1FetchFeatureValuesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1FetchFeatureValuesRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_fetch_feature_values_request_dict = google_cloud_aiplatform_v1_fetch_feature_values_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1FetchFeatureValuesRequest from a dict
google_cloud_aiplatform_v1_fetch_feature_values_request_from_dict = GoogleCloudAiplatformV1FetchFeatureValuesRequest.from_dict(google_cloud_aiplatform_v1_fetch_feature_values_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


