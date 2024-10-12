# Layout

Describes the layout information of a text_segment in the document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_poly** | [**BoundingPoly**](BoundingPoly.md) |  | [optional] 
**page_number** | **int** | Page number of the text_segment in the original document, starts from 1. | [optional] 
**text_segment** | [**TextSegment**](TextSegment.md) |  | [optional] 
**text_segment_type** | **str** | The type of the text_segment in document. | [optional] 

## Example

```python
from openapi_client.models.layout import Layout

# TODO update the JSON string below
json = "{}"
# create an instance of Layout from a JSON string
layout_instance = Layout.from_json(json)
# print the JSON string representation of the object
print(Layout.to_json())

# convert the object into a dict
layout_dict = layout_instance.to_dict()
# create an instance of Layout from a dict
layout_from_dict = Layout.from_dict(layout_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


