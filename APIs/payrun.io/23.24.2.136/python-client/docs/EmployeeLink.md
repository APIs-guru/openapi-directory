# EmployeeLink

The employee summarys' employee link

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | The links&#39; href | [optional] 
**rel** | **str** | The links&#39; target type | [optional] 
**title** | **str** | The links&#39; title | [optional] 

## Example

```python
from openapi_client.models.employee_link import EmployeeLink

# TODO update the JSON string below
json = "{}"
# create an instance of EmployeeLink from a JSON string
employee_link_instance = EmployeeLink.from_json(json)
# print the JSON string representation of the object
print(EmployeeLink.to_json())

# convert the object into a dict
employee_link_dict = employee_link_instance.to_dict()
# create an instance of EmployeeLink from a dict
employee_link_from_dict = EmployeeLink.from_dict(employee_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


