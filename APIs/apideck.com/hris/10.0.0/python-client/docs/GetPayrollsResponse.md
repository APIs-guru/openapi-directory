# GetPayrollsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Payroll]**](Payroll.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_payrolls_response import GetPayrollsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetPayrollsResponse from a JSON string
get_payrolls_response_instance = GetPayrollsResponse.from_json(json)
# print the JSON string representation of the object
print(GetPayrollsResponse.to_json())

# convert the object into a dict
get_payrolls_response_dict = get_payrolls_response_instance.to_dict()
# create an instance of GetPayrollsResponse from a dict
get_payrolls_response_from_dict = GetPayrollsResponse.from_dict(get_payrolls_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


