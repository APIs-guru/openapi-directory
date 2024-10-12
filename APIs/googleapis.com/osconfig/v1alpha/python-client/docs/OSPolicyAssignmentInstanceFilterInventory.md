# OSPolicyAssignmentInstanceFilterInventory

VM inventory details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**os_short_name** | **str** | Required. The OS short name | [optional] 
**os_version** | **str** | The OS version Prefix matches are supported if asterisk(*) is provided as the last character. For example, to match all versions with a major version of &#x60;7&#x60;, specify the following value for this field &#x60;7.*&#x60; An empty string matches all OS versions. | [optional] 

## Example

```python
from openapi_client.models.os_policy_assignment_instance_filter_inventory import OSPolicyAssignmentInstanceFilterInventory

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyAssignmentInstanceFilterInventory from a JSON string
os_policy_assignment_instance_filter_inventory_instance = OSPolicyAssignmentInstanceFilterInventory.from_json(json)
# print the JSON string representation of the object
print(OSPolicyAssignmentInstanceFilterInventory.to_json())

# convert the object into a dict
os_policy_assignment_instance_filter_inventory_dict = os_policy_assignment_instance_filter_inventory_instance.to_dict()
# create an instance of OSPolicyAssignmentInstanceFilterInventory from a dict
os_policy_assignment_instance_filter_inventory_from_dict = OSPolicyAssignmentInstanceFilterInventory.from_dict(os_policy_assignment_instance_filter_inventory_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


