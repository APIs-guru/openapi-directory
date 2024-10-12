# OSPolicyAssignmentLabelSet

Message representing label set. * A label is a key value pair set for a VM. * A LabelSet is a set of labels. * Labels within a LabelSet are ANDed. In other words, a LabelSet is applicable for a VM only if it matches all the labels in the LabelSet. * Example: A LabelSet with 2 labels: `env=prod` and `type=webserver` will only be applicable for those VMs with both labels present.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **Dict[str, str]** | Labels are identified by key/value pairs in this map. A VM should contain all the key/value pairs specified in this map to be selected. | [optional] 

## Example

```python
from openapi_client.models.os_policy_assignment_label_set import OSPolicyAssignmentLabelSet

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyAssignmentLabelSet from a JSON string
os_policy_assignment_label_set_instance = OSPolicyAssignmentLabelSet.from_json(json)
# print the JSON string representation of the object
print(OSPolicyAssignmentLabelSet.to_json())

# convert the object into a dict
os_policy_assignment_label_set_dict = os_policy_assignment_label_set_instance.to_dict()
# create an instance of OSPolicyAssignmentLabelSet from a dict
os_policy_assignment_label_set_from_dict = OSPolicyAssignmentLabelSet.from_dict(os_policy_assignment_label_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


