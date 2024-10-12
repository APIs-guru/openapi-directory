# RegistrationAssignment

Registration assignment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The fully qualified path of the registration assignment. | [optional] [readonly] 
**name** | **str** | Name of the registration assignment. | [optional] [readonly] 
**properties** | [**RegistrationAssignmentProperties**](RegistrationAssignmentProperties.md) |  | [optional] 
**type** | **str** | Type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.registration_assignment import RegistrationAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of RegistrationAssignment from a JSON string
registration_assignment_instance = RegistrationAssignment.from_json(json)
# print the JSON string representation of the object
print(RegistrationAssignment.to_json())

# convert the object into a dict
registration_assignment_dict = registration_assignment_instance.to_dict()
# create an instance of RegistrationAssignment from a dict
registration_assignment_from_dict = RegistrationAssignment.from_dict(registration_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


