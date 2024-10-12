# GoogleCloudRunV2ExecutionTemplate

ExecutionTemplate describes the data an execution should have when created from a template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with &#x60;run.googleapis.com&#x60;, &#x60;cloud.googleapis.com&#x60;, &#x60;serving.knative.dev&#x60;, or &#x60;autoscaling.knative.dev&#x60; namespaces, and they will be rejected. All system annotations in v1 now have a corresponding field in v2 ExecutionTemplate. This field follows Kubernetes annotations&#39; namespacing, limits, and rules. | [optional] 
**labels** | **Dict[str, str]** | Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google&#39;s billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with &#x60;run.googleapis.com&#x60;, &#x60;cloud.googleapis.com&#x60;, &#x60;serving.knative.dev&#x60;, or &#x60;autoscaling.knative.dev&#x60; namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 ExecutionTemplate. | [optional] 
**parallelism** | **int** | Specifies the maximum desired number of tasks the execution should run at given time. Must be &lt;&#x3D; task_count. When the job is run, if this field is 0 or unset, the maximum possible value will be used for that execution. The actual number of tasks running in steady state will be less than this number when there are fewer tasks waiting to be completed remaining, i.e. when the work left to do is less than max parallelism. | [optional] 
**task_count** | **int** | Specifies the desired number of tasks the execution should run. Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution. Defaults to 1. | [optional] 
**template** | [**GoogleCloudRunV2TaskTemplate**](GoogleCloudRunV2TaskTemplate.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_execution_template import GoogleCloudRunV2ExecutionTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2ExecutionTemplate from a JSON string
google_cloud_run_v2_execution_template_instance = GoogleCloudRunV2ExecutionTemplate.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2ExecutionTemplate.to_json())

# convert the object into a dict
google_cloud_run_v2_execution_template_dict = google_cloud_run_v2_execution_template_instance.to_dict()
# create an instance of GoogleCloudRunV2ExecutionTemplate from a dict
google_cloud_run_v2_execution_template_from_dict = GoogleCloudRunV2ExecutionTemplate.from_dict(google_cloud_run_v2_execution_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


