# GoogleCloudRunV2TaskTemplate

TaskTemplate describes the data a task should have when created from a template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containers** | [**List[GoogleCloudRunV2Container]**](GoogleCloudRunV2Container.md) | Holds the single container that defines the unit of execution for this task. | [optional] 
**encryption_key** | **str** | A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek | [optional] 
**execution_environment** | **str** | The execution environment being used to host this Task. | [optional] 
**max_retries** | **int** | Number of retries allowed per Task, before marking this Task failed. Defaults to 3. | [optional] 
**service_account** | **str** | Email address of the IAM service account associated with the Task of a Job. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project&#39;s default service account. | [optional] 
**timeout** | **str** | Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout. Defaults to 600 seconds. | [optional] 
**volumes** | [**List[GoogleCloudRunV2Volume]**](GoogleCloudRunV2Volume.md) | A list of Volumes to make available to containers. | [optional] 
**vpc_access** | [**GoogleCloudRunV2VpcAccess**](GoogleCloudRunV2VpcAccess.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_task_template import GoogleCloudRunV2TaskTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2TaskTemplate from a JSON string
google_cloud_run_v2_task_template_instance = GoogleCloudRunV2TaskTemplate.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2TaskTemplate.to_json())

# convert the object into a dict
google_cloud_run_v2_task_template_dict = google_cloud_run_v2_task_template_instance.to_dict()
# create an instance of GoogleCloudRunV2TaskTemplate from a dict
google_cloud_run_v2_task_template_from_dict = GoogleCloudRunV2TaskTemplate.from_dict(google_cloud_run_v2_task_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


