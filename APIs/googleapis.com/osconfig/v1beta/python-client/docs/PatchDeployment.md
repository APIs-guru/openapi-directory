# PatchDeployment

Patch deployments are configurations that individual patch jobs use to complete a patch. These configurations include instance filter, package repository settings, and a schedule. For more information about creating and managing patch deployments, see [Scheduling patch jobs](https://cloud.google.com/compute/docs/os-patch-management/schedule-patch-jobs).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time the patch deployment was created. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. | [optional] [readonly] 
**description** | **str** | Optional. Description of the patch deployment. Length of the description is limited to 1024 characters. | [optional] 
**duration** | **str** | Optional. Duration of the patch. After the duration ends, the patch times out. | [optional] 
**instance_filter** | [**PatchInstanceFilter**](PatchInstanceFilter.md) |  | [optional] 
**last_execute_time** | **str** | Output only. The last time a patch job was started by this deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. | [optional] [readonly] 
**name** | **str** | Unique name for the patch deployment resource in a project. The patch deployment name is in the form: &#x60;projects/{project_id}/patchDeployments/{patch_deployment_id}&#x60;. This field is ignored when you create a new patch deployment. | [optional] 
**one_time_schedule** | [**OneTimeSchedule**](OneTimeSchedule.md) |  | [optional] 
**patch_config** | [**PatchConfig**](PatchConfig.md) |  | [optional] 
**recurring_schedule** | [**RecurringSchedule**](RecurringSchedule.md) |  | [optional] 
**rollout** | [**PatchRollout**](PatchRollout.md) |  | [optional] 
**state** | **str** | Output only. Current state of the patch deployment. | [optional] [readonly] 
**update_time** | **str** | Output only. Time the patch deployment was last updated. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. | [optional] [readonly] 

## Example

```python
from openapi_client.models.patch_deployment import PatchDeployment

# TODO update the JSON string below
json = "{}"
# create an instance of PatchDeployment from a JSON string
patch_deployment_instance = PatchDeployment.from_json(json)
# print the JSON string representation of the object
print(PatchDeployment.to_json())

# convert the object into a dict
patch_deployment_dict = patch_deployment_instance.to_dict()
# create an instance of PatchDeployment from a dict
patch_deployment_from_dict = PatchDeployment.from_dict(patch_deployment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


