# GuestConfigurationAssignment

Guest configuration assignment is an association between a VM and guest configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**GuestConfigurationAssignmentProperties**](GuestConfigurationAssignmentProperties.md) |  | [optional] 
**id** | **str** | ARM resource id of the guest configuration assignment. | [optional] [readonly] 
**location** | **str** | Region where the VM is located. | [optional] [readonly] 
**name** | **str** | Name of the guest configuration assignment. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.guest_configuration_assignment import GuestConfigurationAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of GuestConfigurationAssignment from a JSON string
guest_configuration_assignment_instance = GuestConfigurationAssignment.from_json(json)
# print the JSON string representation of the object
print(GuestConfigurationAssignment.to_json())

# convert the object into a dict
guest_configuration_assignment_dict = guest_configuration_assignment_instance.to_dict()
# create an instance of GuestConfigurationAssignment from a dict
guest_configuration_assignment_from_dict = GuestConfigurationAssignment.from_dict(guest_configuration_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


