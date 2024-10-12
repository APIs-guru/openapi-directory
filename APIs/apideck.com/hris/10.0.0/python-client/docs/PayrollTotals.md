# PayrollTotals


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_amount** | **float** | The total check amount for the payroll. | [optional] 
**company_debit** | **float** | The total company debit for the payroll. | [optional] 
**employee_benefit_deductions** | **float** | The total amount of employee deducted benefits for the payroll. | [optional] 
**employee_taxes** | **float** | The total amount of employee paid taxes for the payroll. | [optional] 
**employer_benefit_contributions** | **float** | The total amount of company contributed benefits for the payroll. | [optional] 
**employer_taxes** | **float** | The total amount of employer paid taxes for the payroll. | [optional] 
**gross_pay** | **float** | The gross pay amount for the payroll. | [optional] 
**net_pay** | **float** | The net pay amount for the payroll. | [optional] 
**tax_debit** | **float** | The total tax debit for the payroll. | [optional] 

## Example

```python
from openapi_client.models.payroll_totals import PayrollTotals

# TODO update the JSON string below
json = "{}"
# create an instance of PayrollTotals from a JSON string
payroll_totals_instance = PayrollTotals.from_json(json)
# print the JSON string representation of the object
print(PayrollTotals.to_json())

# convert the object into a dict
payroll_totals_dict = payroll_totals_instance.to_dict()
# create an instance of PayrollTotals from a dict
payroll_totals_from_dict = PayrollTotals.from_dict(payroll_totals_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


