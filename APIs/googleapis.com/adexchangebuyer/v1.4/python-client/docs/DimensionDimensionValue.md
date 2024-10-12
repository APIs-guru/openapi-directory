# DimensionDimensionValue

Value of the dimension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Id of the dimension. | [optional] 
**name** | **str** | Name of the dimension mainly for debugging purposes, except for the case of CREATIVE_SIZE. For CREATIVE_SIZE, strings are used instead of ids. | [optional] 
**percentage** | **int** | Percent of total impressions for a dimension type. e.g. {dimension_type: &#39;GENDER&#39;, [{dimension_value: {id: 1, name: &#39;MALE&#39;, percentage: 60}}]} Gender MALE is 60% of all impressions which have gender. | [optional] 

## Example

```python
from openapi_client.models.dimension_dimension_value import DimensionDimensionValue

# TODO update the JSON string below
json = "{}"
# create an instance of DimensionDimensionValue from a JSON string
dimension_dimension_value_instance = DimensionDimensionValue.from_json(json)
# print the JSON string representation of the object
print(DimensionDimensionValue.to_json())

# convert the object into a dict
dimension_dimension_value_dict = dimension_dimension_value_instance.to_dict()
# create an instance of DimensionDimensionValue from a dict
dimension_dimension_value_from_dict = DimensionDimensionValue.from_dict(dimension_dimension_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


