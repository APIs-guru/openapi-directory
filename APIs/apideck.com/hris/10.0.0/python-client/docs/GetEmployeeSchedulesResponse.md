# GetEmployeeSchedulesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**EmployeeSchedules**](EmployeeSchedules.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_employee_schedules_response import GetEmployeeSchedulesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetEmployeeSchedulesResponse from a JSON string
get_employee_schedules_response_instance = GetEmployeeSchedulesResponse.from_json(json)
# print the JSON string representation of the object
print(GetEmployeeSchedulesResponse.to_json())

# convert the object into a dict
get_employee_schedules_response_dict = get_employee_schedules_response_instance.to_dict()
# create an instance of GetEmployeeSchedulesResponse from a dict
get_employee_schedules_response_from_dict = GetEmployeeSchedulesResponse.from_dict(get_employee_schedules_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


