# RegistrationAssignmentList

List of registration assignments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of registration assignments. | [optional] [readonly] 
**value** | [**List[RegistrationAssignment]**](RegistrationAssignment.md) | List of registration assignments. | [optional] [readonly] 

## Example

```python
from openapi_client.models.registration_assignment_list import RegistrationAssignmentList

# TODO update the JSON string below
json = "{}"
# create an instance of RegistrationAssignmentList from a JSON string
registration_assignment_list_instance = RegistrationAssignmentList.from_json(json)
# print the JSON string representation of the object
print(RegistrationAssignmentList.to_json())

# convert the object into a dict
registration_assignment_list_dict = registration_assignment_list_instance.to_dict()
# create an instance of RegistrationAssignmentList from a dict
registration_assignment_list_from_dict = RegistrationAssignmentList.from_dict(registration_assignment_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


