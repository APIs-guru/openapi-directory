# Employee3

The journal lines' employee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | The links&#39; href | [optional] 
**rel** | **str** | The links&#39; target type | [optional] 
**title** | **str** | The links&#39; title | [optional] 

## Example

```python
from openapi_client.models.employee3 import Employee3

# TODO update the JSON string below
json = "{}"
# create an instance of Employee3 from a JSON string
employee3_instance = Employee3.from_json(json)
# print the JSON string representation of the object
print(Employee3.to_json())

# convert the object into a dict
employee3_dict = employee3_instance.to_dict()
# create an instance of Employee3 from a dict
employee3_from_dict = Employee3.from_dict(employee3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


