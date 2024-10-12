# EmployeeManager


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email address of the manager. | [optional] 
**employment_status** | [**EmploymentStatus**](EmploymentStatus.md) |  | [optional] 
**first_name** | **str** | The first name of the person. | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] 
**last_name** | **str** | The last name of the person. | [optional] 
**name** | **str** | The name of the manager, often a combination of their first and last names. | [optional] 

## Example

```python
from openapi_client.models.employee_manager import EmployeeManager

# TODO update the JSON string below
json = "{}"
# create an instance of EmployeeManager from a JSON string
employee_manager_instance = EmployeeManager.from_json(json)
# print the JSON string representation of the object
print(EmployeeManager.to_json())

# convert the object into a dict
employee_manager_dict = employee_manager_instance.to_dict()
# create an instance of EmployeeManager from a dict
employee_manager_from_dict = EmployeeManager.from_dict(employee_manager_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


