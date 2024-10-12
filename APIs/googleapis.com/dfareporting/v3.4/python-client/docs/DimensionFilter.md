# DimensionFilter

Represents a dimension filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_name** | **str** | The name of the dimension to filter. | [optional] 
**kind** | **str** | The kind of resource this is, in this case dfareporting#dimensionFilter. | [optional] 
**value** | **str** | The value of the dimension to filter. | [optional] 

## Example

```python
from openapi_client.models.dimension_filter import DimensionFilter

# TODO update the JSON string below
json = "{}"
# create an instance of DimensionFilter from a JSON string
dimension_filter_instance = DimensionFilter.from_json(json)
# print the JSON string representation of the object
print(DimensionFilter.to_json())

# convert the object into a dict
dimension_filter_dict = dimension_filter_instance.to_dict()
# create an instance of DimensionFilter from a dict
dimension_filter_from_dict = DimensionFilter.from_dict(dimension_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


