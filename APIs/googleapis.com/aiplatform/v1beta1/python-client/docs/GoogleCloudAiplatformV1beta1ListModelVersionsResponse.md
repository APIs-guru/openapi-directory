# GoogleCloudAiplatformV1beta1ListModelVersionsResponse

Response message for ModelService.ListModelVersions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**models** | [**List[GoogleCloudAiplatformV1beta1Model]**](GoogleCloudAiplatformV1beta1Model.md) | List of Model versions in the requested page. In the returned Model name field, version ID instead of regvision tag will be included. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass to ListModelVersionsRequest.page_token to obtain that page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_model_versions_response import GoogleCloudAiplatformV1beta1ListModelVersionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ListModelVersionsResponse from a JSON string
google_cloud_aiplatform_v1beta1_list_model_versions_response_instance = GoogleCloudAiplatformV1beta1ListModelVersionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ListModelVersionsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_list_model_versions_response_dict = google_cloud_aiplatform_v1beta1_list_model_versions_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ListModelVersionsResponse from a dict
google_cloud_aiplatform_v1beta1_list_model_versions_response_from_dict = GoogleCloudAiplatformV1beta1ListModelVersionsResponse.from_dict(google_cloud_aiplatform_v1beta1_list_model_versions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


