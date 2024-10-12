# DimensionCompatibility

The compatibility for a single dimension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compatibility** | **str** | The compatibility of this dimension. If the compatibility is COMPATIBLE, this dimension can be successfully added to the report. | [optional] 
**dimension_metadata** | [**DimensionMetadata**](DimensionMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.dimension_compatibility import DimensionCompatibility

# TODO update the JSON string below
json = "{}"
# create an instance of DimensionCompatibility from a JSON string
dimension_compatibility_instance = DimensionCompatibility.from_json(json)
# print the JSON string representation of the object
print(DimensionCompatibility.to_json())

# convert the object into a dict
dimension_compatibility_dict = dimension_compatibility_instance.to_dict()
# create an instance of DimensionCompatibility from a dict
dimension_compatibility_from_dict = DimensionCompatibility.from_dict(dimension_compatibility_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


