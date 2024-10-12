# GoogleCloudAiplatformV1AssignNotebookRuntimeRequest

Request message for NotebookService.AssignNotebookRuntime.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notebook_runtime** | [**GoogleCloudAiplatformV1NotebookRuntime**](GoogleCloudAiplatformV1NotebookRuntime.md) |  | [optional] 
**notebook_runtime_id** | **str** | Optional. User specified ID for the notebook runtime. | [optional] 
**notebook_runtime_template** | **str** | Required. The resource name of the NotebookRuntimeTemplate based on which a NotebookRuntime will be assigned (reuse or create a new one). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_assign_notebook_runtime_request import GoogleCloudAiplatformV1AssignNotebookRuntimeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1AssignNotebookRuntimeRequest from a JSON string
google_cloud_aiplatform_v1_assign_notebook_runtime_request_instance = GoogleCloudAiplatformV1AssignNotebookRuntimeRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1AssignNotebookRuntimeRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_assign_notebook_runtime_request_dict = google_cloud_aiplatform_v1_assign_notebook_runtime_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1AssignNotebookRuntimeRequest from a dict
google_cloud_aiplatform_v1_assign_notebook_runtime_request_from_dict = GoogleCloudAiplatformV1AssignNotebookRuntimeRequest.from_dict(google_cloud_aiplatform_v1_assign_notebook_runtime_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


