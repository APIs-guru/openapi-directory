# GoogleCloudDataplexV1TaskNotebookTaskConfig

Config for running scheduled notebooks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archive_uris** | **List[str]** | Optional. Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. | [optional] 
**file_uris** | **List[str]** | Optional. Cloud Storage URIs of files to be placed in the working directory of each executor. | [optional] 
**infrastructure_spec** | [**GoogleCloudDataplexV1TaskInfrastructureSpec**](GoogleCloudDataplexV1TaskInfrastructureSpec.md) |  | [optional] 
**notebook** | **str** | Required. Path to input notebook. This can be the Cloud Storage URI of the notebook file or the path to a Notebook Content. The execution args are accessible as environment variables (TASK_key&#x3D;value). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_task_notebook_task_config import GoogleCloudDataplexV1TaskNotebookTaskConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1TaskNotebookTaskConfig from a JSON string
google_cloud_dataplex_v1_task_notebook_task_config_instance = GoogleCloudDataplexV1TaskNotebookTaskConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1TaskNotebookTaskConfig.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_task_notebook_task_config_dict = google_cloud_dataplex_v1_task_notebook_task_config_instance.to_dict()
# create an instance of GoogleCloudDataplexV1TaskNotebookTaskConfig from a dict
google_cloud_dataplex_v1_task_notebook_task_config_from_dict = GoogleCloudDataplexV1TaskNotebookTaskConfig.from_dict(google_cloud_dataplex_v1_task_notebook_task_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


