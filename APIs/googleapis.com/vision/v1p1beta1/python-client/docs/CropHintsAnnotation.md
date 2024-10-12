# CropHintsAnnotation

Set of crop hints that are used to generate new crops when serving images.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crop_hints** | [**List[CropHint]**](CropHint.md) | Crop hint results. | [optional] 

## Example

```python
from openapi_client.models.crop_hints_annotation import CropHintsAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of CropHintsAnnotation from a JSON string
crop_hints_annotation_instance = CropHintsAnnotation.from_json(json)
# print the JSON string representation of the object
print(CropHintsAnnotation.to_json())

# convert the object into a dict
crop_hints_annotation_dict = crop_hints_annotation_instance.to_dict()
# create an instance of CropHintsAnnotation from a dict
crop_hints_annotation_from_dict = CropHintsAnnotation.from_dict(crop_hints_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


