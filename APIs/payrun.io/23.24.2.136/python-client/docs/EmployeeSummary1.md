# EmployeeSummary1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The employee summarys&#39; code | [optional] 
**effective_date** | **date** | The employee summarys&#39; effective date | [optional] 
**employee_link** | [**EmployeeLink**](EmployeeLink.md) |  | [optional] 
**employer_link** | [**EmployerLink**](EmployerLink.md) |  | [optional] 
**first_name** | **str** | The employee summarys&#39; first name | [optional] 
**initials** | **str** | The employee summarys&#39; initials | [optional] 
**last_name** | **str** | The employee summarys&#39; last name | [optional] 
**last_pay_day** | **date** | The employee summarys&#39; last pay day | [optional] 
**last_pay_day_schedule** | **str** | The employee summarys&#39; last pay day schedule | [optional] 
**last_pay_day_tax_year** | **int** | The employee summarys&#39; last pay day tax year | [optional] 
**leaving_date** | **date** | The employee summarys&#39; leaving date | [optional] 
**meta_data** | **object** | The employee summarys&#39; meta data | [optional] 
**next_pay_day** | **date** | The employee summarys&#39; next pay day | [optional] 
**next_revision_date** | **date** | The employee summarys&#39; next revision date | [optional] 
**ni_letter** | **str** | The employee summarys&#39; ni letter | [optional] 
**ni_number** | **str** | The employee summarys&#39; ni number | [optional] 
**pay_schedule_link** | [**PayScheduleLink**](PayScheduleLink.md) |  | [optional] 
**pay_schedule_name** | **str** | The employee summarys&#39; pay schedule name | [optional] 
**revision** | **int** | The employee summarys&#39; revision | [optional] 
**start_date** | **date** | The employee summarys&#39; start date | [optional] 
**status** | **str** | The employee summarys&#39; status | [optional] 
**tax_basis** | **str** | The employee summarys&#39; tax basis | [optional] 
**tax_code** | **str** | The employee summarys&#39; tax code | [optional] 
**title** | **str** | The employee summarys&#39; title | [optional] 
**unique_key** | **str** | The employee summarys&#39; unique key | [optional] 

## Example

```python
from openapi_client.models.employee_summary1 import EmployeeSummary1

# TODO update the JSON string below
json = "{}"
# create an instance of EmployeeSummary1 from a JSON string
employee_summary1_instance = EmployeeSummary1.from_json(json)
# print the JSON string representation of the object
print(EmployeeSummary1.to_json())

# convert the object into a dict
employee_summary1_dict = employee_summary1_instance.to_dict()
# create an instance of EmployeeSummary1 from a dict
employee_summary1_from_dict = EmployeeSummary1.from_dict(employee_summary1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


