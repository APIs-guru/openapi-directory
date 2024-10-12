# EmployeesSort


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**by** | **str** | The field on which to sort the Employees | [optional] 
**direction** | [**SortDirection**](SortDirection.md) |  | [optional] [default to SortDirection.ASC]

## Example

```python
from openapi_client.models.employees_sort import EmployeesSort

# TODO update the JSON string below
json = "{}"
# create an instance of EmployeesSort from a JSON string
employees_sort_instance = EmployeesSort.from_json(json)
# print the JSON string representation of the object
print(EmployeesSort.to_json())

# convert the object into a dict
employees_sort_dict = employees_sort_instance.to_dict()
# create an instance of EmployeesSort from a dict
employees_sort_from_dict = EmployeesSort.from_dict(employees_sort_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


