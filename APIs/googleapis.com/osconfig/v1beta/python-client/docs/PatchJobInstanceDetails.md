# PatchJobInstanceDetails

Patch details for a VM instance. For more information about reviewing VM instance details, see [Listing all VM instance details for a specific patch job](https://cloud.google.com/compute/docs/os-patch-management/manage-patch-jobs#list-instance-details).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempt_count** | **str** | The number of times the agent that the agent attempts to apply the patch. | [optional] 
**failure_reason** | **str** | If the patch fails, this field provides the reason. | [optional] 
**instance_system_id** | **str** | The unique identifier for the instance. This identifier is defined by the server. | [optional] 
**name** | **str** | The instance name in the form &#x60;projects/*/zones/*/instances/*&#x60; | [optional] 
**state** | **str** | Current state of instance patch. | [optional] 

## Example

```python
from openapi_client.models.patch_job_instance_details import PatchJobInstanceDetails

# TODO update the JSON string below
json = "{}"
# create an instance of PatchJobInstanceDetails from a JSON string
patch_job_instance_details_instance = PatchJobInstanceDetails.from_json(json)
# print the JSON string representation of the object
print(PatchJobInstanceDetails.to_json())

# convert the object into a dict
patch_job_instance_details_dict = patch_job_instance_details_instance.to_dict()
# create an instance of PatchJobInstanceDetails from a dict
patch_job_instance_details_from_dict = PatchJobInstanceDetails.from_dict(patch_job_instance_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


