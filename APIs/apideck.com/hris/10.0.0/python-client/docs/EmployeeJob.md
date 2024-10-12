# EmployeeJob


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compensation_rate** | **float** | The rate of pay for the employee in their current job role. | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**employee_id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**end_date** | **date** | The date on which the employee leaves or is expected to leave their current job role. | [optional] 
**hired_at** | **date** | The date on which the employee was hired by the organization | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**is_primary** | **bool** | Indicates whether this the employee&#39;s primary job. | [optional] 
**location** | [**Address**](Address.md) |  | [optional] 
**payment_unit** | [**PaymentUnit**](PaymentUnit.md) |  | [optional] 
**role** | **str** | The position and responsibilities of the person within the organization. | [optional] 
**start_date** | **date** | The date on which the employee starts working in their current job role. | [optional] 
**title** | **str** | The job title of the person. | [optional] 

## Example

```python
from openapi_client.models.employee_job import EmployeeJob

# TODO update the JSON string below
json = "{}"
# create an instance of EmployeeJob from a JSON string
employee_job_instance = EmployeeJob.from_json(json)
# print the JSON string representation of the object
print(EmployeeJob.to_json())

# convert the object into a dict
employee_job_dict = employee_job_instance.to_dict()
# create an instance of EmployeeJob from a dict
employee_job_from_dict = EmployeeJob.from_dict(employee_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


