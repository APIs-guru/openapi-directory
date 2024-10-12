# APISchoolFinance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spending_federal_non_personnel** | **float** | Spending per student for Non-personnel at the Federal Level (Enterprise level only) | [optional] 
**spending_federal_personnel** | **float** | Spending per student for Personnel at the Federal Level (Enterprise level only) | [optional] 
**spending_per_student** | **float** | Total spending per student from all funds (Pro or Enterprise level only) | [optional] 
**spending_per_student_federal** | **float** | Spending per student at the Federal Level (Enterprise level only) | [optional] 
**spending_per_student_state_local** | **float** | Spending per student at the State and Local Level (Enterprise level only) | [optional] 
**spending_state_local_non_personnel** | **float** | Spending per student for Non-personnel at the State and Local Level (Enterprise level only) | [optional] 
**spending_state_local_personnel** | **float** | Spending per student for Personnel at the State and Local Level (Enterprise level only) | [optional] 
**year** | **int** | Fiscal School year (2021 &#x3D; 2020-2021 year) | [optional] 

## Example

```python
from openapi_client.models.api_school_finance import APISchoolFinance

# TODO update the JSON string below
json = "{}"
# create an instance of APISchoolFinance from a JSON string
api_school_finance_instance = APISchoolFinance.from_json(json)
# print the JSON string representation of the object
print(APISchoolFinance.to_json())

# convert the object into a dict
api_school_finance_dict = api_school_finance_instance.to_dict()
# create an instance of APISchoolFinance from a dict
api_school_finance_from_dict = APISchoolFinance.from_dict(api_school_finance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


