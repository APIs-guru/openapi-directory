# GetEmployeePayrollsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[EmployeePayroll]**](EmployeePayroll.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_employee_payrolls_response import GetEmployeePayrollsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetEmployeePayrollsResponse from a JSON string
get_employee_payrolls_response_instance = GetEmployeePayrollsResponse.from_json(json)
# print the JSON string representation of the object
print(GetEmployeePayrollsResponse.to_json())

# convert the object into a dict
get_employee_payrolls_response_dict = get_employee_payrolls_response_instance.to_dict()
# create an instance of GetEmployeePayrollsResponse from a dict
get_employee_payrolls_response_from_dict = GetEmployeePayrollsResponse.from_dict(get_employee_payrolls_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


