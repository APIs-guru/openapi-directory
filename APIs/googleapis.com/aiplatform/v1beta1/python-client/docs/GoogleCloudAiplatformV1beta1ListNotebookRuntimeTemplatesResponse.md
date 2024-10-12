# GoogleCloudAiplatformV1beta1ListNotebookRuntimeTemplatesResponse

Response message for NotebookService.ListNotebookRuntimeTemplates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve next page of results. Pass to ListNotebookRuntimeTemplatesRequest.page_token to obtain that page. | [optional] 
**notebook_runtime_templates** | [**List[GoogleCloudAiplatformV1beta1NotebookRuntimeTemplate]**](GoogleCloudAiplatformV1beta1NotebookRuntimeTemplate.md) | List of NotebookRuntimeTemplates in the requested page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_notebook_runtime_templates_response import GoogleCloudAiplatformV1beta1ListNotebookRuntimeTemplatesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ListNotebookRuntimeTemplatesResponse from a JSON string
google_cloud_aiplatform_v1beta1_list_notebook_runtime_templates_response_instance = GoogleCloudAiplatformV1beta1ListNotebookRuntimeTemplatesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ListNotebookRuntimeTemplatesResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_list_notebook_runtime_templates_response_dict = google_cloud_aiplatform_v1beta1_list_notebook_runtime_templates_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ListNotebookRuntimeTemplatesResponse from a dict
google_cloud_aiplatform_v1beta1_list_notebook_runtime_templates_response_from_dict = GoogleCloudAiplatformV1beta1ListNotebookRuntimeTemplatesResponse.from_dict(google_cloud_aiplatform_v1beta1_list_notebook_runtime_templates_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


