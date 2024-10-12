# ParagraphMarker

A TextElement kind that represents the beginning of a new paragraph.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bullet** | [**Bullet**](Bullet.md) |  | [optional] 
**style** | [**ParagraphStyle**](ParagraphStyle.md) |  | [optional] 

## Example

```python
from openapi_client.models.paragraph_marker import ParagraphMarker

# TODO update the JSON string below
json = "{}"
# create an instance of ParagraphMarker from a JSON string
paragraph_marker_instance = ParagraphMarker.from_json(json)
# print the JSON string representation of the object
print(ParagraphMarker.to_json())

# convert the object into a dict
paragraph_marker_dict = paragraph_marker_instance.to_dict()
# create an instance of ParagraphMarker from a dict
paragraph_marker_from_dict = ParagraphMarker.from_dict(paragraph_marker_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


