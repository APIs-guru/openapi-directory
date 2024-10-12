# GoogleCloudAiplatformV1beta1ListPersistentResourcesResponse

Response message for PersistentResourceService.ListPersistentResources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve next page of results. Pass to ListPersistentResourcesRequest.page_token to obtain that page. | [optional] 
**persistent_resources** | [**List[GoogleCloudAiplatformV1beta1PersistentResource]**](GoogleCloudAiplatformV1beta1PersistentResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_persistent_resources_response import GoogleCloudAiplatformV1beta1ListPersistentResourcesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ListPersistentResourcesResponse from a JSON string
google_cloud_aiplatform_v1beta1_list_persistent_resources_response_instance = GoogleCloudAiplatformV1beta1ListPersistentResourcesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ListPersistentResourcesResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_list_persistent_resources_response_dict = google_cloud_aiplatform_v1beta1_list_persistent_resources_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ListPersistentResourcesResponse from a dict
google_cloud_aiplatform_v1beta1_list_persistent_resources_response_from_dict = GoogleCloudAiplatformV1beta1ListPersistentResourcesResponse.from_dict(google_cloud_aiplatform_v1beta1_list_persistent_resources_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


