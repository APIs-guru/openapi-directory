# CropHint

Single crop hint that is used to generate a new crop when serving an image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_poly** | [**BoundingPoly**](BoundingPoly.md) |  | [optional] 
**confidence** | **float** | Confidence of this being a salient region. Range [0, 1]. | [optional] 
**importance_fraction** | **float** | Fraction of importance of this salient region with respect to the original image. | [optional] 

## Example

```python
from openapi_client.models.crop_hint import CropHint

# TODO update the JSON string below
json = "{}"
# create an instance of CropHint from a JSON string
crop_hint_instance = CropHint.from_json(json)
# print the JSON string representation of the object
print(CropHint.to_json())

# convert the object into a dict
crop_hint_dict = crop_hint_instance.to_dict()
# create an instance of CropHint from a dict
crop_hint_from_dict = CropHint.from_dict(crop_hint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


