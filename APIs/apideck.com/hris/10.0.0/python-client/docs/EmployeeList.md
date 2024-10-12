# EmployeeList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**first_name** | **str** | The first name of the person. | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**last_name** | **str** | The last name of the person. | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.employee_list import EmployeeList

# TODO update the JSON string below
json = "{}"
# create an instance of EmployeeList from a JSON string
employee_list_instance = EmployeeList.from_json(json)
# print the JSON string representation of the object
print(EmployeeList.to_json())

# convert the object into a dict
employee_list_dict = employee_list_instance.to_dict()
# create an instance of EmployeeList from a dict
employee_list_from_dict = EmployeeList.from_dict(employee_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


