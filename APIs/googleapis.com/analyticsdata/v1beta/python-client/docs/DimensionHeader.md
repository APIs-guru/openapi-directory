# DimensionHeader

Describes a dimension column in the report. Dimensions requested in a report produce column entries within rows and DimensionHeaders. However, dimensions used exclusively within filters or expressions do not produce columns in a report; correspondingly, those dimensions do not produce headers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The dimension&#39;s name. | [optional] 

## Example

```python
from openapi_client.models.dimension_header import DimensionHeader

# TODO update the JSON string below
json = "{}"
# create an instance of DimensionHeader from a JSON string
dimension_header_instance = DimensionHeader.from_json(json)
# print the JSON string representation of the object
print(DimensionHeader.to_json())

# convert the object into a dict
dimension_header_dict = dimension_header_instance.to_dict()
# create an instance of DimensionHeader from a dict
dimension_header_from_dict = DimensionHeader.from_dict(dimension_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


