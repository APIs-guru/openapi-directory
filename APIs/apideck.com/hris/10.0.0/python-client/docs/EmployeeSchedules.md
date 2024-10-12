# EmployeeSchedules


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**employee** | [**Employee**](Employee.md) |  | [optional] 
**schedules** | [**List[Schedule]**](Schedule.md) |  | [optional] 

## Example

```python
from openapi_client.models.employee_schedules import EmployeeSchedules

# TODO update the JSON string below
json = "{}"
# create an instance of EmployeeSchedules from a JSON string
employee_schedules_instance = EmployeeSchedules.from_json(json)
# print the JSON string representation of the object
print(EmployeeSchedules.to_json())

# convert the object into a dict
employee_schedules_dict = employee_schedules_instance.to_dict()
# create an instance of EmployeeSchedules from a dict
employee_schedules_from_dict = EmployeeSchedules.from_dict(employee_schedules_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


