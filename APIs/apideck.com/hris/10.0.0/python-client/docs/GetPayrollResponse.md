# GetPayrollResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Payroll**](Payroll.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_payroll_response import GetPayrollResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetPayrollResponse from a JSON string
get_payroll_response_instance = GetPayrollResponse.from_json(json)
# print the JSON string representation of the object
print(GetPayrollResponse.to_json())

# convert the object into a dict
get_payroll_response_dict = get_payroll_response_instance.to_dict()
# create an instance of GetPayrollResponse from a dict
get_payroll_response_from_dict = GetPayrollResponse.from_dict(get_payroll_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


