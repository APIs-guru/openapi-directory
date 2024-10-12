# XPSVisualization

Visualization configurations for image explanation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clip_percent_lowerbound** | **float** | Excludes attributions below the specified percentile, from the highlighted areas. Defaults to 62. | [optional] 
**clip_percent_upperbound** | **float** | Excludes attributions above the specified percentile from the highlighted areas. Using the clip_percent_upperbound and clip_percent_lowerbound together can be useful for filtering out noise and making it easier to see areas of strong attribution. Defaults to 99.9. | [optional] 
**color_map** | **str** | The color scheme used for the highlighted areas. Defaults to PINK_GREEN for Integrated Gradients attribution, which shows positive attributions in green and negative in pink. Defaults to VIRIDIS for XRAI attribution, which highlights the most influential regions in yellow and the least influential in blue. | [optional] 
**overlay_type** | **str** | How the original image is displayed in the visualization. Adjusting the overlay can help increase visual clarity if the original image makes it difficult to view the visualization. Defaults to NONE. | [optional] 
**polarity** | **str** | Whether to only highlight pixels with positive contributions, negative or both. Defaults to POSITIVE. | [optional] 
**type** | **str** | Type of the image visualization. Only applicable to Integrated Gradients attribution. OUTLINES shows regions of attribution, while PIXELS shows per-pixel attribution. Defaults to OUTLINES. | [optional] 

## Example

```python
from openapi_client.models.xps_visualization import XPSVisualization

# TODO update the JSON string below
json = "{}"
# create an instance of XPSVisualization from a JSON string
xps_visualization_instance = XPSVisualization.from_json(json)
# print the JSON string representation of the object
print(XPSVisualization.to_json())

# convert the object into a dict
xps_visualization_dict = xps_visualization_instance.to_dict()
# create an instance of XPSVisualization from a dict
xps_visualization_from_dict = XPSVisualization.from_dict(xps_visualization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


