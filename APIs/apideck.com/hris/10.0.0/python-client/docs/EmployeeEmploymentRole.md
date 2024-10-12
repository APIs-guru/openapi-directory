# EmployeeEmploymentRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sub_type** | **str** | The work schedule of the employee. | [optional] 
**type** | **str** | The type of employment relationship the employee has with the organization. | [optional] 

## Example

```python
from openapi_client.models.employee_employment_role import EmployeeEmploymentRole

# TODO update the JSON string below
json = "{}"
# create an instance of EmployeeEmploymentRole from a JSON string
employee_employment_role_instance = EmployeeEmploymentRole.from_json(json)
# print the JSON string representation of the object
print(EmployeeEmploymentRole.to_json())

# convert the object into a dict
employee_employment_role_dict = employee_employment_role_instance.to_dict()
# create an instance of EmployeeEmploymentRole from a dict
employee_employment_role_from_dict = EmployeeEmploymentRole.from_dict(employee_employment_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


