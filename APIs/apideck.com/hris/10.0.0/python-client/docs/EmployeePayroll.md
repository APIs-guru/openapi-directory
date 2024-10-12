# EmployeePayroll


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_date** | **str** | The date on which employees will be paid for the payroll. | 
**company_id** | **str** | The unique identifier of the company. | [optional] 
**compensations** | [**List[Compensation]**](Compensation.md) | An array of compensations for the payroll. | [optional] 
**employee_id** | **str** | ID of the employee | [optional] 
**end_date** | **str** | The end date, inclusive, of the pay period. | 
**id** | **str** | A unique identifier for an object. | [readonly] 
**processed** | **bool** | Whether or not the payroll has been successfully processed. Note that processed payrolls cannot be updated. | 
**processed_date** | **str** | The date the payroll was processed. | [optional] 
**start_date** | **str** | The start date, inclusive, of the pay period. | 
**totals** | [**PayrollTotals**](.md) |  | [optional] 

## Example

```python
from openapi_client.models.employee_payroll import EmployeePayroll

# TODO update the JSON string below
json = "{}"
# create an instance of EmployeePayroll from a JSON string
employee_payroll_instance = EmployeePayroll.from_json(json)
# print the JSON string representation of the object
print(EmployeePayroll.to_json())

# convert the object into a dict
employee_payroll_dict = employee_payroll_instance.to_dict()
# create an instance of EmployeePayroll from a dict
employee_payroll_from_dict = EmployeePayroll.from_dict(employee_payroll_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


