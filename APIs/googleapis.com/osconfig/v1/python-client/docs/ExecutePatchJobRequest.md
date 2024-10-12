# ExecutePatchJobRequest

A request message to initiate patching across Compute Engine instances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the patch job. Length of the description is limited to 1024 characters. | [optional] 
**display_name** | **str** | Display name for this patch job. This does not have to be unique. | [optional] 
**dry_run** | **bool** | If this patch is a dry-run only, instances are contacted but will do nothing. | [optional] 
**duration** | **str** | Duration of the patch job. After the duration ends, the patch job times out. | [optional] 
**instance_filter** | [**PatchInstanceFilter**](PatchInstanceFilter.md) |  | [optional] 
**patch_config** | [**PatchConfig**](PatchConfig.md) |  | [optional] 
**rollout** | [**PatchRollout**](PatchRollout.md) |  | [optional] 

## Example

```python
from openapi_client.models.execute_patch_job_request import ExecutePatchJobRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExecutePatchJobRequest from a JSON string
execute_patch_job_request_instance = ExecutePatchJobRequest.from_json(json)
# print the JSON string representation of the object
print(ExecutePatchJobRequest.to_json())

# convert the object into a dict
execute_patch_job_request_dict = execute_patch_job_request_instance.to_dict()
# create an instance of ExecutePatchJobRequest from a dict
execute_patch_job_request_from_dict = ExecutePatchJobRequest.from_dict(execute_patch_job_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


