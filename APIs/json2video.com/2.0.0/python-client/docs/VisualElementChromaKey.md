# VisualElementChromaKey

Allows to define a color (or a range of colors) that will be converted to transparent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | **str** | Set the color for which alpha will be set to 0 (full transparency) | 
**tolerance** | **int** | Makes the selection more or less sensitive to changes in color. A value of 1 will select only the provided color. A value of 100 will select all colors, so the full canvas | [optional] [default to 25]

## Example

```python
from openapi_client.models.visual_element_chroma_key import VisualElementChromaKey

# TODO update the JSON string below
json = "{}"
# create an instance of VisualElementChromaKey from a JSON string
visual_element_chroma_key_instance = VisualElementChromaKey.from_json(json)
# print the JSON string representation of the object
print(VisualElementChromaKey.to_json())

# convert the object into a dict
visual_element_chroma_key_dict = visual_element_chroma_key_instance.to_dict()
# create an instance of VisualElementChromaKey from a dict
visual_element_chroma_key_from_dict = VisualElementChromaKey.from_dict(visual_element_chroma_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


