# Job

Defines a job to be run by the Cloud Dataflow service. Do not enter confidential information when you supply string values using the API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_request_id** | **str** | The client&#39;s unique identifier of the job, re-used across retried attempts. If this field is set, the service will ensure its uniqueness. The request to create a job will fail if the service has knowledge of a previously submitted job with the same client&#39;s ID and job name. The caller may use this field to ensure idempotence of job creation across retried attempts to create a job. By default, the field is empty and, in that case, the service ignores it. | [optional] 
**create_time** | **str** | The timestamp when the job was initially created. Immutable and set by the Cloud Dataflow service. | [optional] 
**created_from_snapshot_id** | **str** | If this is specified, the job&#39;s initial state is populated from the given snapshot. | [optional] 
**current_state** | **str** | The current state of the job. Jobs are created in the &#x60;JOB_STATE_STOPPED&#x60; state unless otherwise specified. A job in the &#x60;JOB_STATE_RUNNING&#x60; state may asynchronously enter a terminal state. After a job has reached a terminal state, no further state updates may be made. This field might be mutated by the Dataflow service; callers cannot mutate it. | [optional] 
**current_state_time** | **str** | The timestamp associated with the current state. | [optional] 
**environment** | [**Environment**](Environment.md) |  | [optional] 
**execution_info** | [**JobExecutionInfo**](JobExecutionInfo.md) |  | [optional] 
**id** | **str** | The unique ID of this job. This field is set by the Dataflow service when the job is created, and is immutable for the life of the job. | [optional] 
**job_metadata** | [**JobMetadata**](JobMetadata.md) |  | [optional] 
**labels** | **Dict[str, str]** | User-defined labels for this job. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \\p{Ll}\\p{Lo}{0,62} * Values must conform to regexp: [\\p{Ll}\\p{Lo}\\p{N}_-]{0,63} * Both keys and values are additionally constrained to be &lt;&#x3D; 128 bytes in size. | [optional] 
**location** | **str** | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. | [optional] 
**name** | **str** | The user-specified Dataflow job name. Only one active job with a given name can exist in a project within one region at any given time. Jobs in different regions can have the same name. If a caller attempts to create a job with the same name as an active job that already exists, the attempt returns the existing job. The name must match the regular expression &#x60;[a-z]([-a-z0-9]{0,1022}[a-z0-9])?&#x60; | [optional] 
**pipeline_description** | [**PipelineDescription**](PipelineDescription.md) |  | [optional] 
**project_id** | **str** | The ID of the Google Cloud project that the job belongs to. | [optional] 
**replace_job_id** | **str** | If this job is an update of an existing job, this field is the job ID of the job it replaced. When sending a &#x60;CreateJobRequest&#x60;, you can update a job by specifying it here. The job named here is stopped, and its intermediate state is transferred to this job. | [optional] 
**replaced_by_job_id** | **str** | If another job is an update of this job (and thus, this job is in &#x60;JOB_STATE_UPDATED&#x60;), this field contains the ID of that job. | [optional] 
**requested_state** | **str** | The job&#39;s requested state. Applies to &#x60;UpdateJob&#x60; requests. Set &#x60;requested_state&#x60; with &#x60;UpdateJob&#x60; requests to switch between the states &#x60;JOB_STATE_STOPPED&#x60; and &#x60;JOB_STATE_RUNNING&#x60;. You can also use &#x60;UpdateJob&#x60; requests to change a job&#39;s state from &#x60;JOB_STATE_RUNNING&#x60; to &#x60;JOB_STATE_CANCELLED&#x60;, &#x60;JOB_STATE_DONE&#x60;, or &#x60;JOB_STATE_DRAINED&#x60;. These states irrevocably terminate the job if it hasn&#39;t already reached a terminal state. This field has no effect on &#x60;CreateJob&#x60; requests. | [optional] 
**runtime_updatable_params** | [**RuntimeUpdatableParams**](RuntimeUpdatableParams.md) |  | [optional] 
**satisfies_pzi** | **bool** | Output only. Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests. | [optional] [readonly] 
**satisfies_pzs** | **bool** | Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests. | [optional] 
**stage_states** | [**List[ExecutionStageState]**](ExecutionStageState.md) | This field may be mutated by the Cloud Dataflow service; callers cannot mutate it. | [optional] 
**start_time** | **str** | The timestamp when the job was started (transitioned to JOB_STATE_PENDING). Flexible resource scheduling jobs are started with some delay after job creation, so start_time is unset before start and is updated when the job is started by the Cloud Dataflow service. For other jobs, start_time always equals to create_time and is immutable and set by the Cloud Dataflow service. | [optional] 
**steps** | [**List[Step]**](Step.md) | Exactly one of step or steps_location should be specified. The top-level steps that constitute the entire job. Only retrieved with JOB_VIEW_ALL. | [optional] 
**steps_location** | **str** | The Cloud Storage location where the steps are stored. | [optional] 
**temp_files** | **List[str]** | A set of files the system should be aware of that are used for temporary storage. These temporary files will be removed on job completion. No duplicates are allowed. No file patterns are supported. The supported files are: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object} | [optional] 
**transform_name_mapping** | **Dict[str, str]** | The map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job. | [optional] 
**type** | **str** | The type of Dataflow job. | [optional] 

## Example

```python
from openapi_client.models.job import Job

# TODO update the JSON string below
json = "{}"
# create an instance of Job from a JSON string
job_instance = Job.from_json(json)
# print the JSON string representation of the object
print(Job.to_json())

# convert the object into a dict
job_dict = job_instance.to_dict()
# create an instance of Job from a dict
job_from_dict = Job.from_dict(job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


