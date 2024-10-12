# GoogleCloudAiplatformV1beta1ListFeatureViewsResponse

Response message for FeatureOnlineStoreAdminService.ListFeatureViews.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature_views** | [**List[GoogleCloudAiplatformV1beta1FeatureView]**](GoogleCloudAiplatformV1beta1FeatureView.md) | The FeatureViews matching the request. | [optional] 
**next_page_token** | **str** | A token, which can be sent as ListFeatureViewsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_feature_views_response import GoogleCloudAiplatformV1beta1ListFeatureViewsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ListFeatureViewsResponse from a JSON string
google_cloud_aiplatform_v1beta1_list_feature_views_response_instance = GoogleCloudAiplatformV1beta1ListFeatureViewsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ListFeatureViewsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_list_feature_views_response_dict = google_cloud_aiplatform_v1beta1_list_feature_views_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ListFeatureViewsResponse from a dict
google_cloud_aiplatform_v1beta1_list_feature_views_response_from_dict = GoogleCloudAiplatformV1beta1ListFeatureViewsResponse.from_dict(google_cloud_aiplatform_v1beta1_list_feature_views_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


