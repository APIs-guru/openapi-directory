# InkPointValueAttribute

A container for the attributes of a value contained in the ink point object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logical_maximum** | **float** | The maximum value for the attribute | [optional] 
**logical_minimum** | **float** | The minimum value for the attribute | [optional] 
**name** | **str** | The name of the point attribute. | [optional] 

## Example

```python
from openapi_client.models.ink_point_value_attribute import InkPointValueAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of InkPointValueAttribute from a JSON string
ink_point_value_attribute_instance = InkPointValueAttribute.from_json(json)
# print the JSON string representation of the object
print(InkPointValueAttribute.to_json())

# convert the object into a dict
ink_point_value_attribute_dict = ink_point_value_attribute_instance.to_dict()
# create an instance of InkPointValueAttribute from a dict
ink_point_value_attribute_from_dict = InkPointValueAttribute.from_dict(ink_point_value_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


