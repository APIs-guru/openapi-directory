# GoogleCloudAiplatformV1beta1ListFeatureOnlineStoresResponse

Response message for FeatureOnlineStoreAdminService.ListFeatureOnlineStores.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature_online_stores** | [**List[GoogleCloudAiplatformV1beta1FeatureOnlineStore]**](GoogleCloudAiplatformV1beta1FeatureOnlineStore.md) | The FeatureOnlineStores matching the request. | [optional] 
**next_page_token** | **str** | A token, which can be sent as ListFeatureOnlineStoresRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_feature_online_stores_response import GoogleCloudAiplatformV1beta1ListFeatureOnlineStoresResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ListFeatureOnlineStoresResponse from a JSON string
google_cloud_aiplatform_v1beta1_list_feature_online_stores_response_instance = GoogleCloudAiplatformV1beta1ListFeatureOnlineStoresResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ListFeatureOnlineStoresResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_list_feature_online_stores_response_dict = google_cloud_aiplatform_v1beta1_list_feature_online_stores_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ListFeatureOnlineStoresResponse from a dict
google_cloud_aiplatform_v1beta1_list_feature_online_stores_response_from_dict = GoogleCloudAiplatformV1beta1ListFeatureOnlineStoresResponse.from_dict(google_cloud_aiplatform_v1beta1_list_feature_online_stores_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


