# Compensation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**benefits** | [**List[Benefit]**](Benefit.md) | An array of employee benefits for the pay period. | [optional] 
**deductions** | [**List[Deduction]**](Deduction.md) | An array of employee deductions for the pay period. | [optional] 
**employee_id** | **str** | A unique identifier for an object. | [readonly] 
**gross_pay** | **float** | The employee&#39;s gross pay. Only available when payroll has been processed | [optional] 
**net_pay** | **float** | The employee&#39;s net pay. Only available when payroll has been processed | [optional] 
**taxes** | [**List[Tax]**](Tax.md) | An array of employer and employee taxes for the pay period. | [optional] 

## Example

```python
from openapi_client.models.compensation import Compensation

# TODO update the JSON string below
json = "{}"
# create an instance of Compensation from a JSON string
compensation_instance = Compensation.from_json(json)
# print the JSON string representation of the object
print(Compensation.to_json())

# convert the object into a dict
compensation_dict = compensation_instance.to_dict()
# create an instance of Compensation from a dict
compensation_from_dict = Compensation.from_dict(compensation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


