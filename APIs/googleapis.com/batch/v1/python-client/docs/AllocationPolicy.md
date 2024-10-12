# AllocationPolicy

A Job's resource allocation policy describes when, where, and how compute resources should be allocated for the Job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instances** | [**List[InstancePolicyOrTemplate]**](InstancePolicyOrTemplate.md) | Describe instances that can be created by this AllocationPolicy. Only instances[0] is supported now. | [optional] 
**labels** | **Dict[str, str]** | Labels applied to all VM instances and other resources created by AllocationPolicy. Labels could be user provided or system generated. You can assign up to 64 labels. [Google Compute Engine label restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) apply. Label names that start with \&quot;goog-\&quot; or \&quot;google-\&quot; are reserved. | [optional] 
**location** | [**LocationPolicy**](LocationPolicy.md) |  | [optional] 
**network** | [**NetworkPolicy**](NetworkPolicy.md) |  | [optional] 
**placement** | [**PlacementPolicy**](PlacementPolicy.md) |  | [optional] 
**service_account** | [**ServiceAccount**](ServiceAccount.md) |  | [optional] 
**tags** | **List[str]** | Optional. Tags applied to the VM instances. The tags identify valid sources or targets for network firewalls. Each tag must be 1-63 characters long, and comply with [RFC1035](https://www.ietf.org/rfc/rfc1035.txt). | [optional] 

## Example

```python
from openapi_client.models.allocation_policy import AllocationPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of AllocationPolicy from a JSON string
allocation_policy_instance = AllocationPolicy.from_json(json)
# print the JSON string representation of the object
print(AllocationPolicy.to_json())

# convert the object into a dict
allocation_policy_dict = allocation_policy_instance.to_dict()
# create an instance of AllocationPolicy from a dict
allocation_policy_from_dict = AllocationPolicy.from_dict(allocation_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


