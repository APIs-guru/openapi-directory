# GoogleCloudRunV2Task

Task represents a single run of a container to completion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | Output only. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. | [optional] [readonly] 
**completion_time** | **str** | Output only. Represents time when the Task was completed. It is not guaranteed to be set in happens-before order across separate operations. | [optional] [readonly] 
**conditions** | [**List[GoogleCloudRunV2Condition]**](GoogleCloudRunV2Condition.md) | Output only. The Condition of this Task, containing its readiness status, and detailed error information in case it did not reach the desired state. | [optional] [readonly] 
**containers** | [**List[GoogleCloudRunV2Container]**](GoogleCloudRunV2Container.md) | Holds the single container that defines the unit of execution for this task. | [optional] 
**create_time** | **str** | Output only. Represents time when the task was created by the system. It is not guaranteed to be set in happens-before order across separate operations. | [optional] [readonly] 
**delete_time** | **str** | Output only. For a deleted resource, the deletion time. It is only populated as a response to a Delete request. | [optional] [readonly] 
**encryption_key** | **str** | Output only. A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek | [optional] [readonly] 
**etag** | **str** | Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. | [optional] [readonly] 
**execution** | **str** | Output only. The name of the parent Execution. | [optional] [readonly] 
**execution_environment** | **str** | The execution environment being used to host this Task. | [optional] 
**expire_time** | **str** | Output only. For a deleted resource, the time after which it will be permamently deleted. It is only populated as a response to a Delete request. | [optional] [readonly] 
**generation** | **str** | Output only. A number that monotonically increases every time the user modifies the desired state. | [optional] [readonly] 
**index** | **int** | Output only. Index of the Task, unique per execution, and beginning at 0. | [optional] [readonly] 
**job** | **str** | Output only. The name of the parent Job. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Output only. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google&#39;s billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels | [optional] [readonly] 
**last_attempt_result** | [**GoogleCloudRunV2TaskAttemptResult**](GoogleCloudRunV2TaskAttemptResult.md) |  | [optional] 
**log_uri** | **str** | Output only. URI where logs for this execution can be found in Cloud Console. | [optional] [readonly] 
**max_retries** | **int** | Number of retries allowed per Task, before marking this Task failed. | [optional] 
**name** | **str** | Output only. The unique name of this Task. | [optional] [readonly] 
**observed_generation** | **str** | Output only. The generation of this Task. See comments in &#x60;Job.reconciling&#x60; for additional information on reconciliation process in Cloud Run. | [optional] [readonly] 
**reconciling** | **bool** | Output only. Indicates whether the resource&#39;s reconciliation is still in progress. See comments in &#x60;Job.reconciling&#x60; for additional information on reconciliation process in Cloud Run. | [optional] [readonly] 
**retried** | **int** | Output only. The number of times this Task was retried. Tasks are retried when they fail up to the maxRetries limit. | [optional] [readonly] 
**satisfies_pzs** | **bool** | Output only. Reserved for future use. | [optional] [readonly] 
**scheduled_time** | **str** | Output only. Represents time when the task was scheduled to run by the system. It is not guaranteed to be set in happens-before order across separate operations. | [optional] [readonly] 
**service_account** | **str** | Email address of the IAM service account associated with the Task of a Job. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project&#39;s default service account. | [optional] 
**start_time** | **str** | Output only. Represents time when the task started to run. It is not guaranteed to be set in happens-before order across separate operations. | [optional] [readonly] 
**timeout** | **str** | Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout. | [optional] 
**uid** | **str** | Output only. Server assigned unique identifier for the Task. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. | [optional] [readonly] 
**update_time** | **str** | Output only. The last-modified time. | [optional] [readonly] 
**volumes** | [**List[GoogleCloudRunV2Volume]**](GoogleCloudRunV2Volume.md) | A list of Volumes to make available to containers. | [optional] 
**vpc_access** | [**GoogleCloudRunV2VpcAccess**](GoogleCloudRunV2VpcAccess.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_task import GoogleCloudRunV2Task

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2Task from a JSON string
google_cloud_run_v2_task_instance = GoogleCloudRunV2Task.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2Task.to_json())

# convert the object into a dict
google_cloud_run_v2_task_dict = google_cloud_run_v2_task_instance.to_dict()
# create an instance of GoogleCloudRunV2Task from a dict
google_cloud_run_v2_task_from_dict = GoogleCloudRunV2Task.from_dict(google_cloud_run_v2_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


