# Department

A department resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DepartmentProperties**](DepartmentProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.department import Department

# TODO update the JSON string below
json = "{}"
# create an instance of Department from a JSON string
department_instance = Department.from_json(json)
# print the JSON string representation of the object
print(Department.to_json())

# convert the object into a dict
department_dict = department_instance.to_dict()
# create an instance of Department from a dict
department_from_dict = Department.from_dict(department_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


