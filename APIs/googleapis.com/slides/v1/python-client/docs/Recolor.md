# Recolor

A recolor effect applied on an image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the recolor effect. The name is determined from the &#x60;recolor_stops&#x60; by matching the gradient against the colors in the page&#39;s current color scheme. This property is read-only. | [optional] 
**recolor_stops** | [**List[ColorStop]**](ColorStop.md) | The recolor effect is represented by a gradient, which is a list of color stops. The colors in the gradient will replace the corresponding colors at the same position in the color palette and apply to the image. This property is read-only. | [optional] 

## Example

```python
from openapi_client.models.recolor import Recolor

# TODO update the JSON string below
json = "{}"
# create an instance of Recolor from a JSON string
recolor_instance = Recolor.from_json(json)
# print the JSON string representation of the object
print(Recolor.to_json())

# convert the object into a dict
recolor_dict = recolor_instance.to_dict()
# create an instance of Recolor from a dict
recolor_from_dict = Recolor.from_dict(recolor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


