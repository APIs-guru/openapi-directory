# OSPolicyAssignmentInstanceFilter

Filters to select target VMs for an assignment. If more than one filter criteria is specified below, a VM will be selected if and only if it satisfies all of them.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all** | **bool** | Target all VMs in the project. If true, no other criteria is permitted. | [optional] 
**exclusion_labels** | [**List[OSPolicyAssignmentLabelSet]**](OSPolicyAssignmentLabelSet.md) | List of label sets used for VM exclusion. If the list has more than one label set, the VM is excluded if any of the label sets are applicable for the VM. | [optional] 
**inclusion_labels** | [**List[OSPolicyAssignmentLabelSet]**](OSPolicyAssignmentLabelSet.md) | List of label sets used for VM inclusion. If the list has more than one &#x60;LabelSet&#x60;, the VM is included if any of the label sets are applicable for the VM. | [optional] 
**inventories** | [**List[OSPolicyAssignmentInstanceFilterInventory]**](OSPolicyAssignmentInstanceFilterInventory.md) | List of inventories to select VMs. A VM is selected if its inventory data matches at least one of the following inventories. | [optional] 

## Example

```python
from openapi_client.models.os_policy_assignment_instance_filter import OSPolicyAssignmentInstanceFilter

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyAssignmentInstanceFilter from a JSON string
os_policy_assignment_instance_filter_instance = OSPolicyAssignmentInstanceFilter.from_json(json)
# print the JSON string representation of the object
print(OSPolicyAssignmentInstanceFilter.to_json())

# convert the object into a dict
os_policy_assignment_instance_filter_dict = os_policy_assignment_instance_filter_instance.to_dict()
# create an instance of OSPolicyAssignmentInstanceFilter from a dict
os_policy_assignment_instance_filter_from_dict = OSPolicyAssignmentInstanceFilter.from_dict(os_policy_assignment_instance_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


