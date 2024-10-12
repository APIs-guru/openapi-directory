# TaskRunnerSettings

Taskrunner configuration settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alsologtostderr** | **bool** | Whether to also send taskrunner log info to stderr. | [optional] 
**base_task_dir** | **str** | The location on the worker for task-specific subdirectories. | [optional] 
**base_url** | **str** | The base URL for the taskrunner to use when accessing Google Cloud APIs. When workers access Google Cloud APIs, they logically do so via relative URLs. If this field is specified, it supplies the base URL to use for resolving these relative URLs. The normative algorithm used is defined by RFC 1808, \&quot;Relative Uniform Resource Locators\&quot;. If not specified, the default value is \&quot;http://www.googleapis.com/\&quot; | [optional] 
**commandlines_file_name** | **str** | The file to store preprocessing commands in. | [optional] 
**continue_on_exception** | **bool** | Whether to continue taskrunner if an exception is hit. | [optional] 
**dataflow_api_version** | **str** | The API version of endpoint, e.g. \&quot;v1b3\&quot; | [optional] 
**harness_command** | **str** | The command to launch the worker harness. | [optional] 
**language_hint** | **str** | The suggested backend language. | [optional] 
**log_dir** | **str** | The directory on the VM to store logs. | [optional] 
**log_to_serialconsole** | **bool** | Whether to send taskrunner log info to Google Compute Engine VM serial console. | [optional] 
**log_upload_location** | **str** | Indicates where to put logs. If this is not specified, the logs will not be uploaded. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object} | [optional] 
**oauth_scopes** | **List[str]** | The OAuth2 scopes to be requested by the taskrunner in order to access the Cloud Dataflow API. | [optional] 
**parallel_worker_settings** | [**WorkerSettings**](WorkerSettings.md) |  | [optional] 
**streaming_worker_main_class** | **str** | The streaming worker main class name. | [optional] 
**task_group** | **str** | The UNIX group ID on the worker VM to use for tasks launched by taskrunner; e.g. \&quot;wheel\&quot;. | [optional] 
**task_user** | **str** | The UNIX user ID on the worker VM to use for tasks launched by taskrunner; e.g. \&quot;root\&quot;. | [optional] 
**temp_storage_prefix** | **str** | The prefix of the resources the taskrunner should use for temporary storage. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object} | [optional] 
**vm_id** | **str** | The ID string of the VM. | [optional] 
**workflow_file_name** | **str** | The file to store the workflow in. | [optional] 

## Example

```python
from openapi_client.models.task_runner_settings import TaskRunnerSettings

# TODO update the JSON string below
json = "{}"
# create an instance of TaskRunnerSettings from a JSON string
task_runner_settings_instance = TaskRunnerSettings.from_json(json)
# print the JSON string representation of the object
print(TaskRunnerSettings.to_json())

# convert the object into a dict
task_runner_settings_dict = task_runner_settings_instance.to_dict()
# create an instance of TaskRunnerSettings from a dict
task_runner_settings_from_dict = TaskRunnerSettings.from_dict(task_runner_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


