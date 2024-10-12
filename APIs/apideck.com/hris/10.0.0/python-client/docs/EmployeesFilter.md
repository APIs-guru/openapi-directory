# EmployeesFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_id** | **str** | Company ID to filter on | [optional] 
**department_id** | **str** | ID of the department to filter on | [optional] 
**email** | **str** | Email to filter on | [optional] 
**employee_number** | **str** | Employee number to filter on | [optional] 
**employment_status** | **str** | Employment status to filter on | [optional] 
**first_name** | **str** | First Name to filter on | [optional] 
**last_name** | **str** | Last Name to filter on | [optional] 
**manager_id** | **str** | Manager id to filter on | [optional] 
**title** | **str** | Job title to filter on | [optional] 

## Example

```python
from openapi_client.models.employees_filter import EmployeesFilter

# TODO update the JSON string below
json = "{}"
# create an instance of EmployeesFilter from a JSON string
employees_filter_instance = EmployeesFilter.from_json(json)
# print the JSON string representation of the object
print(EmployeesFilter.to_json())

# convert the object into a dict
employees_filter_dict = employees_filter_instance.to_dict()
# create an instance of EmployeesFilter from a dict
employees_filter_from_dict = EmployeesFilter.from_dict(employees_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


