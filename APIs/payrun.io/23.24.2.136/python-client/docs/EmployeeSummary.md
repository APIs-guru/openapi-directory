# EmployeeSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**employee_summary** | [**EmployeeSummary1**](EmployeeSummary1.md) |  | [optional] 

## Example

```python
from openapi_client.models.employee_summary import EmployeeSummary

# TODO update the JSON string below
json = "{}"
# create an instance of EmployeeSummary from a JSON string
employee_summary_instance = EmployeeSummary.from_json(json)
# print the JSON string representation of the object
print(EmployeeSummary.to_json())

# convert the object into a dict
employee_summary_dict = employee_summary_instance.to_dict()
# create an instance of EmployeeSummary from a dict
employee_summary_from_dict = EmployeeSummary.from_dict(employee_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


