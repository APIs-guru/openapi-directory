# PatchJob

A high level representation of a patch job that is either in progress or has completed. Instance details are not included in the job. To paginate through instance details, use `ListPatchJobInstanceDetails`. For more information about patch jobs, see [Creating patch jobs](https://cloud.google.com/compute/docs/os-patch-management/create-patch-job).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Time this patch job was created. | [optional] 
**description** | **str** | Description of the patch job. Length of the description is limited to 1024 characters. | [optional] 
**display_name** | **str** | Display name for this patch job. This is not a unique identifier. | [optional] 
**dry_run** | **bool** | If this patch job is a dry run, the agent reports that it has finished without running any updates on the VM instance. | [optional] 
**duration** | **str** | Duration of the patch job. After the duration ends, the patch job times out. | [optional] 
**error_message** | **str** | If this patch job failed, this message provides information about the failure. | [optional] 
**instance_details_summary** | [**PatchJobInstanceDetailsSummary**](PatchJobInstanceDetailsSummary.md) |  | [optional] 
**instance_filter** | [**PatchInstanceFilter**](PatchInstanceFilter.md) |  | [optional] 
**name** | **str** | Unique identifier for this patch job in the form &#x60;projects/*/patchJobs/*&#x60; | [optional] 
**patch_config** | [**PatchConfig**](PatchConfig.md) |  | [optional] 
**patch_deployment** | **str** | Output only. Name of the patch deployment that created this patch job. | [optional] [readonly] 
**percent_complete** | **float** | Reflects the overall progress of the patch job in the range of 0.0 being no progress to 100.0 being complete. | [optional] 
**rollout** | [**PatchRollout**](PatchRollout.md) |  | [optional] 
**state** | **str** | The current state of the PatchJob. | [optional] 
**update_time** | **str** | Last time this patch job was updated. | [optional] 

## Example

```python
from openapi_client.models.patch_job import PatchJob

# TODO update the JSON string below
json = "{}"
# create an instance of PatchJob from a JSON string
patch_job_instance = PatchJob.from_json(json)
# print the JSON string representation of the object
print(PatchJob.to_json())

# convert the object into a dict
patch_job_dict = patch_job_instance.to_dict()
# create an instance of PatchJob from a dict
patch_job_from_dict = PatchJob.from_dict(patch_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


