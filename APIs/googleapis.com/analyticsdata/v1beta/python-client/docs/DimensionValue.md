# DimensionValue

The value of a dimension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Value as a string if the dimension type is a string. | [optional] 

## Example

```python
from openapi_client.models.dimension_value import DimensionValue

# TODO update the JSON string below
json = "{}"
# create an instance of DimensionValue from a JSON string
dimension_value_instance = DimensionValue.from_json(json)
# print the JSON string representation of the object
print(DimensionValue.to_json())

# convert the object into a dict
dimension_value_dict = dimension_value_instance.to_dict()
# create an instance of DimensionValue from a dict
dimension_value_from_dict = DimensionValue.from_dict(dimension_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


