# FormatComplexity

Information on the complexity of this Format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lod_hint** | **int** | A non-negative integer that represents the level of detail (LOD) of this format relative to other formats of the same asset with the same format_type. This hint allows you to sort formats from the most-detailed (0) to least-detailed (integers greater than 0). | [optional] 
**triangle_count** | **str** | The estimated number of triangles. | [optional] 

## Example

```python
from openapi_client.models.format_complexity import FormatComplexity

# TODO update the JSON string below
json = "{}"
# create an instance of FormatComplexity from a JSON string
format_complexity_instance = FormatComplexity.from_json(json)
# print the JSON string representation of the object
print(FormatComplexity.to_json())

# convert the object into a dict
format_complexity_dict = format_complexity_instance.to_dict()
# create an instance of FormatComplexity from a dict
format_complexity_from_dict = FormatComplexity.from_dict(format_complexity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


