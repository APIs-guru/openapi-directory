# GoogleCloudAiplatformV1beta1ListFeatureGroupsResponse

Response message for FeatureRegistryService.ListFeatureGroups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature_groups** | [**List[GoogleCloudAiplatformV1beta1FeatureGroup]**](GoogleCloudAiplatformV1beta1FeatureGroup.md) | The FeatureGroups matching the request. | [optional] 
**next_page_token** | **str** | A token, which can be sent as ListFeatureGroupsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_feature_groups_response import GoogleCloudAiplatformV1beta1ListFeatureGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ListFeatureGroupsResponse from a JSON string
google_cloud_aiplatform_v1beta1_list_feature_groups_response_instance = GoogleCloudAiplatformV1beta1ListFeatureGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ListFeatureGroupsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_list_feature_groups_response_dict = google_cloud_aiplatform_v1beta1_list_feature_groups_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ListFeatureGroupsResponse from a dict
google_cloud_aiplatform_v1beta1_list_feature_groups_response_from_dict = GoogleCloudAiplatformV1beta1ListFeatureGroupsResponse.from_dict(google_cloud_aiplatform_v1beta1_list_feature_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


