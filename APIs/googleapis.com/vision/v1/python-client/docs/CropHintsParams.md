# CropHintsParams

Parameters for crop hints annotation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspect_ratios** | **List[float]** | Aspect ratios in floats, representing the ratio of the width to the height of the image. For example, if the desired aspect ratio is 4/3, the corresponding float value should be 1.33333. If not specified, the best possible crop is returned. The number of provided aspect ratios is limited to a maximum of 16; any aspect ratios provided after the 16th are ignored. | [optional] 

## Example

```python
from openapi_client.models.crop_hints_params import CropHintsParams

# TODO update the JSON string below
json = "{}"
# create an instance of CropHintsParams from a JSON string
crop_hints_params_instance = CropHintsParams.from_json(json)
# print the JSON string representation of the object
print(CropHintsParams.to_json())

# convert the object into a dict
crop_hints_params_dict = crop_hints_params_instance.to_dict()
# create an instance of CropHintsParams from a dict
crop_hints_params_from_dict = CropHintsParams.from_dict(crop_hints_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


