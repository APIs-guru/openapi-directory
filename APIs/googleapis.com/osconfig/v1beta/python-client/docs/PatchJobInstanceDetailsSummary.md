# PatchJobInstanceDetailsSummary

A summary of the current patch state across all instances that this patch job affects. Contains counts of instances in different states. These states map to `InstancePatchState`. List patch job instance details to see the specific states of each instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acked_instance_count** | **str** | Number of instances that have acked and will start shortly. | [optional] 
**applying_patches_instance_count** | **str** | Number of instances that are applying patches. | [optional] 
**downloading_patches_instance_count** | **str** | Number of instances that are downloading patches. | [optional] 
**failed_instance_count** | **str** | Number of instances that failed. | [optional] 
**inactive_instance_count** | **str** | Number of instances that are inactive. | [optional] 
**no_agent_detected_instance_count** | **str** | Number of instances that do not appear to be running the agent. Check to ensure that the agent is installed, running, and able to communicate with the service. | [optional] 
**notified_instance_count** | **str** | Number of instances notified about patch job. | [optional] 
**pending_instance_count** | **str** | Number of instances pending patch job. | [optional] 
**post_patch_step_instance_count** | **str** | Number of instances that are running the post-patch step. | [optional] 
**pre_patch_step_instance_count** | **str** | Number of instances that are running the pre-patch step. | [optional] 
**rebooting_instance_count** | **str** | Number of instances rebooting. | [optional] 
**started_instance_count** | **str** | Number of instances that have started. | [optional] 
**succeeded_instance_count** | **str** | Number of instances that have completed successfully. | [optional] 
**succeeded_reboot_required_instance_count** | **str** | Number of instances that require reboot. | [optional] 
**timed_out_instance_count** | **str** | Number of instances that exceeded the time out while applying the patch. | [optional] 

## Example

```python
from openapi_client.models.patch_job_instance_details_summary import PatchJobInstanceDetailsSummary

# TODO update the JSON string below
json = "{}"
# create an instance of PatchJobInstanceDetailsSummary from a JSON string
patch_job_instance_details_summary_instance = PatchJobInstanceDetailsSummary.from_json(json)
# print the JSON string representation of the object
print(PatchJobInstanceDetailsSummary.to_json())

# convert the object into a dict
patch_job_instance_details_summary_dict = patch_job_instance_details_summary_instance.to_dict()
# create an instance of PatchJobInstanceDetailsSummary from a dict
patch_job_instance_details_summary_from_dict = PatchJobInstanceDetailsSummary.from_dict(patch_job_instance_details_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


