# NestedParameter

JSON template for a parameter used in various reports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bool_value** | **bool** | Boolean value of the parameter. | [optional] 
**int_value** | **str** | Integer value of the parameter. | [optional] 
**multi_bool_value** | **List[bool]** | Multiple boolean values of the parameter. | [optional] 
**multi_int_value** | **List[str]** | Multiple integer values of the parameter. | [optional] 
**multi_value** | **List[str]** | Multiple string values of the parameter. | [optional] 
**name** | **str** | The name of the parameter. | [optional] 
**value** | **str** | String value of the parameter. | [optional] 

## Example

```python
from openapi_client.models.nested_parameter import NestedParameter

# TODO update the JSON string below
json = "{}"
# create an instance of NestedParameter from a JSON string
nested_parameter_instance = NestedParameter.from_json(json)
# print the JSON string representation of the object
print(NestedParameter.to_json())

# convert the object into a dict
nested_parameter_dict = nested_parameter_instance.to_dict()
# create an instance of NestedParameter from a dict
nested_parameter_from_dict = NestedParameter.from_dict(nested_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


