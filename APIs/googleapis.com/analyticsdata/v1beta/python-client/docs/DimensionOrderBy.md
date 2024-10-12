# DimensionOrderBy

Sorts by dimension values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_name** | **str** | A dimension name in the request to order by. | [optional] 
**order_type** | **str** | Controls the rule for dimension value ordering. | [optional] 

## Example

```python
from openapi_client.models.dimension_order_by import DimensionOrderBy

# TODO update the JSON string below
json = "{}"
# create an instance of DimensionOrderBy from a JSON string
dimension_order_by_instance = DimensionOrderBy.from_json(json)
# print the JSON string representation of the object
print(DimensionOrderBy.to_json())

# convert the object into a dict
dimension_order_by_dict = dimension_order_by_instance.to_dict()
# create an instance of DimensionOrderBy from a dict
dimension_order_by_from_dict = DimensionOrderBy.from_dict(dimension_order_by_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


