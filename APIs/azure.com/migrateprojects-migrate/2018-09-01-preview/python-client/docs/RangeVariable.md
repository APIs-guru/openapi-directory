# RangeVariable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **int** |  | [optional] [readonly] 
**name** | **str** |  | [optional] [readonly] 
**type_reference** | [**IEdmTypeReference**](IEdmTypeReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.range_variable import RangeVariable

# TODO update the JSON string below
json = "{}"
# create an instance of RangeVariable from a JSON string
range_variable_instance = RangeVariable.from_json(json)
# print the JSON string representation of the object
print(RangeVariable.to_json())

# convert the object into a dict
range_variable_dict = range_variable_instance.to_dict()
# create an instance of RangeVariable from a dict
range_variable_from_dict = RangeVariable.from_dict(range_variable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


