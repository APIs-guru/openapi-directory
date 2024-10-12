# PresentationParams

Hints for displaying the asset, based on information available when the asset was uploaded.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_color** | **str** | A background color which could be used for displaying the 3D asset in a &#39;thumbnail&#39; or &#39;palette&#39; style view. Authors have the option to set this background color when publishing or editing their asset. This is represented as a six-digit hexademical triplet specifying the RGB components of the background color, e.g. #FF0000 for Red. | [optional] 
**color_space** | **str** | The materials&#39; diffuse/albedo color. This does not apply to vertex colors or texture maps. | [optional] 
**orienting_rotation** | [**Quaternion**](Quaternion.md) |  | [optional] 

## Example

```python
from openapi_client.models.presentation_params import PresentationParams

# TODO update the JSON string below
json = "{}"
# create an instance of PresentationParams from a JSON string
presentation_params_instance = PresentationParams.from_json(json)
# print the JSON string representation of the object
print(PresentationParams.to_json())

# convert the object into a dict
presentation_params_dict = presentation_params_instance.to_dict()
# create an instance of PresentationParams from a dict
presentation_params_from_dict = PresentationParams.from_dict(presentation_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


