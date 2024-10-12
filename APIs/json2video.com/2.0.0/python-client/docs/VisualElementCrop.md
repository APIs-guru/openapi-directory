# VisualElementCrop

Crops the element

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** | Sets the height of the croping | 
**width** | **int** | Sets the width of the croping | 
**x** | **int** | Sets the left point of croping | [optional] [default to 0]
**y** | **int** | Sets the top point of croping | [optional] [default to 0]

## Example

```python
from openapi_client.models.visual_element_crop import VisualElementCrop

# TODO update the JSON string below
json = "{}"
# create an instance of VisualElementCrop from a JSON string
visual_element_crop_instance = VisualElementCrop.from_json(json)
# print the JSON string representation of the object
print(VisualElementCrop.to_json())

# convert the object into a dict
visual_element_crop_dict = visual_element_crop_instance.to_dict()
# create an instance of VisualElementCrop from a dict
visual_element_crop_from_dict = VisualElementCrop.from_dict(visual_element_crop_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


