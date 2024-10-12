# EmployeeCompensation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | [**Currency**](Currency.md) |  | [optional] 
**effective_date** | **str** | The date on which a change to an employee&#39;s compensation takes effect. | [optional] 
**flsa_status** | **str** | The FLSA status for this compensation. | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**job_id** | **str** | The ID of the job to which the compensation belongs. | [optional] [readonly] 
**payment_frequency** | [**PaymentFrequency**](PaymentFrequency.md) |  | [optional] 
**payment_unit** | [**PaymentUnit**](PaymentUnit.md) |  | [optional] 
**rate** | **float** | The amount paid per payment unit. | [optional] 

## Example

```python
from openapi_client.models.employee_compensation import EmployeeCompensation

# TODO update the JSON string below
json = "{}"
# create an instance of EmployeeCompensation from a JSON string
employee_compensation_instance = EmployeeCompensation.from_json(json)
# print the JSON string representation of the object
print(EmployeeCompensation.to_json())

# convert the object into a dict
employee_compensation_dict = employee_compensation_instance.to_dict()
# create an instance of EmployeeCompensation from a dict
employee_compensation_from_dict = EmployeeCompensation.from_dict(employee_compensation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


