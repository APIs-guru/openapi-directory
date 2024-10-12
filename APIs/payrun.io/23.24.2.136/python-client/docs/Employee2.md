# Employee2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ae_assessment_override** | **str** | The employees&#39; a e assessment override | [optional] 
**ae_assessment_override_date** | **date** | The employees&#39; a e assessment override date | [optional] 
**ae_exclusion_reason_code** | **str** | The employees&#39; a e exclusion reason code | [optional] 
**ae_postponement_date** | **date** | The employees&#39; a e postponement date | [optional] 
**address** | [**Address**](Address.md) |  | [optional] 
**bank_account** | [**BankAccount**](BankAccount.md) |  | [optional] 
**code** | **str** | The employees&#39; code | [optional] 
**date_of_birth** | **date** | The employees&#39; date of birth | [optional] 
**deactivated** | **bool** | The employees&#39; deactivated | [optional] 
**directorship_appointment_date** | **date** | The employees&#39; directorship appointment date | [optional] 
**eea_citizen** | **bool** | The employees&#39; e e a citizen | [optional] 
**epm6** | **bool** | The employees&#39; e p m6 | [optional] 
**effective_date** | **date** | The employees&#39; effective date | [optional] 
**employee_partner** | [**EmployeePartner**](EmployeePartner.md) |  | [optional] 
**first_name** | **str** | The employees&#39; the first name | [optional] 
**gender** | **str** | The employees&#39; gender | [optional] 
**hours_per_week** | **float** | The employees&#39; hours per week | [optional] 
**initials** | **str** | The employees&#39; initials | [optional] 
**irregular_employment** | **bool** | The employees&#39; irregular employment | [optional] 
**is_agency_worker** | **bool** | The employees&#39; is agency worker | [optional] 
**last_name** | **str** | The employees&#39; last name | [optional] 
**leaver_reason** | **str** | The employees&#39; leaver reason | [optional] 
**leaving_date** | **date** | The employees&#39; leaving date | [optional] 
**marital_status** | **str** | The employees&#39; marital status | [optional] 
**meta_data** | **object** | The employees&#39; meta data | [optional] 
**middle_name** | **str** | The employees&#39; middle name | [optional] 
**next_revision_date** | **date** | The employees&#39; next revision date | [optional] 
**ni_number** | **str** | The employees&#39; ni number | [optional] 
**nic_liability** | **str** | The employees&#39; nic liability | [optional] 
**off_payroll_worker** | **bool** | The employees&#39; off payroll worker | [optional] 
**on_strike** | **bool** | The employees&#39; on strike | [optional] 
**p45_issued_date** | **date** | The employees&#39; p45 issued date | [optional] 
**passport_number** | **str** | The employees&#39; passport number | [optional] 
**pay_schedule** | [**PaySchedule1**](PaySchedule1.md) |  | [optional] 
**payment_method** | **str** | The employees&#39; payment method | [optional] 
**payment_to_a_non_individual** | **bool** | The employees&#39; payment to a non individual | [optional] 
**region** | **str** | The employees&#39; region | [optional] 
**revision** | **int** | The employees&#39; revision | [optional] 
**rule_exclusions** | **str** | The employees&#39; rule exclusions | [optional] 
**seconded** | **str** | The employees&#39; seconded | [optional] 
**start_date** | **date** | The employees&#39; start date | [optional] 
**starter_declaration** | **str** | The employees&#39; starter declaration | [optional] 
**territory** | **str** | The employees&#39; territory | [optional] 
**title** | **str** | The employees&#39; title | [optional] 
**veteran_period_start_date** | **date** | The employees&#39; veteran period start date | [optional] 
**working_week** | **str** | The employees&#39; working week | [optional] 

## Example

```python
from openapi_client.models.employee2 import Employee2

# TODO update the JSON string below
json = "{}"
# create an instance of Employee2 from a JSON string
employee2_instance = Employee2.from_json(json)
# print the JSON string representation of the object
print(Employee2.to_json())

# convert the object into a dict
employee2_dict = employee2_instance.to_dict()
# create an instance of Employee2 from a dict
employee2_from_dict = Employee2.from_dict(employee2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


