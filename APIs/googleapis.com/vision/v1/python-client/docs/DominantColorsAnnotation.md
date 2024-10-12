# DominantColorsAnnotation

Set of dominant colors and their corresponding scores.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**colors** | [**List[ColorInfo]**](ColorInfo.md) | RGB color values with their score and pixel fraction. | [optional] 

## Example

```python
from openapi_client.models.dominant_colors_annotation import DominantColorsAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of DominantColorsAnnotation from a JSON string
dominant_colors_annotation_instance = DominantColorsAnnotation.from_json(json)
# print the JSON string representation of the object
print(DominantColorsAnnotation.to_json())

# convert the object into a dict
dominant_colors_annotation_dict = dominant_colors_annotation_instance.to_dict()
# create an instance of DominantColorsAnnotation from a dict
dominant_colors_annotation_from_dict = DominantColorsAnnotation.from_dict(dominant_colors_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


