# GuestConfigurationAssignmentList

The response of the list guest configuration assignment operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[GuestConfigurationAssignment]**](GuestConfigurationAssignment.md) | Result of the list guest configuration assignment operation. | [optional] 

## Example

```python
from openapi_client.models.guest_configuration_assignment_list import GuestConfigurationAssignmentList

# TODO update the JSON string below
json = "{}"
# create an instance of GuestConfigurationAssignmentList from a JSON string
guest_configuration_assignment_list_instance = GuestConfigurationAssignmentList.from_json(json)
# print the JSON string representation of the object
print(GuestConfigurationAssignmentList.to_json())

# convert the object into a dict
guest_configuration_assignment_list_dict = guest_configuration_assignment_list_instance.to_dict()
# create an instance of GuestConfigurationAssignmentList from a dict
guest_configuration_assignment_list_from_dict = GuestConfigurationAssignmentList.from_dict(guest_configuration_assignment_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


