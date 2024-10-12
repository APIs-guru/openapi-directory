# PivotDimensionHeader

Summarizes dimension values from a row for this pivot.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_values** | [**List[DimensionValue]**](DimensionValue.md) | Values of multiple dimensions in a pivot. | [optional] 

## Example

```python
from openapi_client.models.pivot_dimension_header import PivotDimensionHeader

# TODO update the JSON string below
json = "{}"
# create an instance of PivotDimensionHeader from a JSON string
pivot_dimension_header_instance = PivotDimensionHeader.from_json(json)
# print the JSON string representation of the object
print(PivotDimensionHeader.to_json())

# convert the object into a dict
pivot_dimension_header_dict = pivot_dimension_header_instance.to_dict()
# create an instance of PivotDimensionHeader from a dict
pivot_dimension_header_from_dict = PivotDimensionHeader.from_dict(pivot_dimension_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


