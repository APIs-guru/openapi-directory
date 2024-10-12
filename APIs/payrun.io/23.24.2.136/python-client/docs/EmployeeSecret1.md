# EmployeeSecret1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | The employee secrets&#39; created | [optional] 
**name** | **str** | The employee secrets&#39; name | [optional] 
**value** | **str** | The employee secrets&#39; value | [optional] 

## Example

```python
from openapi_client.models.employee_secret1 import EmployeeSecret1

# TODO update the JSON string below
json = "{}"
# create an instance of EmployeeSecret1 from a JSON string
employee_secret1_instance = EmployeeSecret1.from_json(json)
# print the JSON string representation of the object
print(EmployeeSecret1.to_json())

# convert the object into a dict
employee_secret1_dict = employee_secret1_instance.to_dict()
# create an instance of EmployeeSecret1 from a dict
employee_secret1_from_dict = EmployeeSecret1.from_dict(employee_secret1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


