# GoogleCloudAiplatformV1beta1ListNotebookRuntimesResponse

Response message for NotebookService.ListNotebookRuntimes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve next page of results. Pass to ListNotebookRuntimesRequest.page_token to obtain that page. | [optional] 
**notebook_runtimes** | [**List[GoogleCloudAiplatformV1beta1NotebookRuntime]**](GoogleCloudAiplatformV1beta1NotebookRuntime.md) | List of NotebookRuntimes in the requested page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_notebook_runtimes_response import GoogleCloudAiplatformV1beta1ListNotebookRuntimesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ListNotebookRuntimesResponse from a JSON string
google_cloud_aiplatform_v1beta1_list_notebook_runtimes_response_instance = GoogleCloudAiplatformV1beta1ListNotebookRuntimesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ListNotebookRuntimesResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_list_notebook_runtimes_response_dict = google_cloud_aiplatform_v1beta1_list_notebook_runtimes_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ListNotebookRuntimesResponse from a dict
google_cloud_aiplatform_v1beta1_list_notebook_runtimes_response_from_dict = GoogleCloudAiplatformV1beta1ListNotebookRuntimesResponse.from_dict(google_cloud_aiplatform_v1beta1_list_notebook_runtimes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


