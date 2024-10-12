# GoogleCloudDataplexV1TaskExecutionSpec

Execution related settings, like retry and service_account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**args** | **Dict[str, str]** | Optional. The arguments to pass to the task. The args can use placeholders of the format ${placeholder} as part of key/value string. These will be interpolated before passing the args to the driver. Currently supported placeholders: - ${task_id} - ${job_time} To pass positional args, set the key as TASK_ARGS. The value should be a comma-separated string of all the positional arguments. To use a delimiter other than comma, refer to https://cloud.google.com/sdk/gcloud/reference/topic/escaping. In case of other keys being present in the args, then TASK_ARGS will be passed as the last argument. | [optional] 
**kms_key** | **str** | Optional. The Cloud KMS key to use for encryption, of the form: projects/{project_number}/locations/{location_id}/keyRings/{key-ring-name}/cryptoKeys/{key-name}. | [optional] 
**max_job_execution_lifetime** | **str** | Optional. The maximum duration after which the job execution is expired. | [optional] 
**project** | **str** | Optional. The project in which jobs are run. By default, the project containing the Lake is used. If a project is provided, the ExecutionSpec.service_account must belong to this project. | [optional] 
**service_account** | **str** | Required. Service account to use to execute a task. If not provided, the default Compute service account for the project is used. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_task_execution_spec import GoogleCloudDataplexV1TaskExecutionSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1TaskExecutionSpec from a JSON string
google_cloud_dataplex_v1_task_execution_spec_instance = GoogleCloudDataplexV1TaskExecutionSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1TaskExecutionSpec.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_task_execution_spec_dict = google_cloud_dataplex_v1_task_execution_spec_instance.to_dict()
# create an instance of GoogleCloudDataplexV1TaskExecutionSpec from a dict
google_cloud_dataplex_v1_task_execution_spec_from_dict = GoogleCloudDataplexV1TaskExecutionSpec.from_dict(google_cloud_dataplex_v1_task_execution_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


