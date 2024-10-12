# DepartmentListResult

Result of listing departments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[Department]**](Department.md) | The list of departments. | [optional] [readonly] 

## Example

```python
from openapi_client.models.department_list_result import DepartmentListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DepartmentListResult from a JSON string
department_list_result_instance = DepartmentListResult.from_json(json)
# print the JSON string representation of the object
print(DepartmentListResult.to_json())

# convert the object into a dict
department_list_result_dict = department_list_result_instance.to_dict()
# create an instance of DepartmentListResult from a dict
department_list_result_from_dict = DepartmentListResult.from_dict(department_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


