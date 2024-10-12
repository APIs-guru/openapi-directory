# OSPolicy

An OS policy defines the desired state configuration for a VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_no_resource_group_match** | **bool** | This flag determines the OS policy compliance status when none of the resource groups within the policy are applicable for a VM. Set this value to &#x60;true&#x60; if the policy needs to be reported as compliant even if the policy has nothing to validate or enforce. | [optional] 
**description** | **str** | Policy description. Length of the description is limited to 1024 characters. | [optional] 
**id** | **str** | Required. The id of the OS policy with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the assignment. | [optional] 
**mode** | **str** | Required. Policy mode | [optional] 
**resource_groups** | [**List[OSPolicyResourceGroup]**](OSPolicyResourceGroup.md) | Required. List of resource groups for the policy. For a particular VM, resource groups are evaluated in the order specified and the first resource group that is applicable is selected and the rest are ignored. If none of the resource groups are applicable for a VM, the VM is considered to be non-compliant w.r.t this policy. This behavior can be toggled by the flag &#x60;allow_no_resource_group_match&#x60; | [optional] 

## Example

```python
from openapi_client.models.os_policy import OSPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicy from a JSON string
os_policy_instance = OSPolicy.from_json(json)
# print the JSON string representation of the object
print(OSPolicy.to_json())

# convert the object into a dict
os_policy_dict = os_policy_instance.to_dict()
# create an instance of OSPolicy from a dict
os_policy_from_dict = OSPolicy.from_dict(os_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


