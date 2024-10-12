# GoogleCloudAiplatformV1beta1ListDatasetVersionsResponse

Response message for DatasetService.ListDatasetVersions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_versions** | [**List[GoogleCloudAiplatformV1beta1DatasetVersion]**](GoogleCloudAiplatformV1beta1DatasetVersion.md) | A list of DatasetVersions that matches the specified filter in the request. | [optional] 
**next_page_token** | **str** | The standard List next-page token. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_dataset_versions_response import GoogleCloudAiplatformV1beta1ListDatasetVersionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ListDatasetVersionsResponse from a JSON string
google_cloud_aiplatform_v1beta1_list_dataset_versions_response_instance = GoogleCloudAiplatformV1beta1ListDatasetVersionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ListDatasetVersionsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_list_dataset_versions_response_dict = google_cloud_aiplatform_v1beta1_list_dataset_versions_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ListDatasetVersionsResponse from a dict
google_cloud_aiplatform_v1beta1_list_dataset_versions_response_from_dict = GoogleCloudAiplatformV1beta1ListDatasetVersionsResponse.from_dict(google_cloud_aiplatform_v1beta1_list_dataset_versions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


