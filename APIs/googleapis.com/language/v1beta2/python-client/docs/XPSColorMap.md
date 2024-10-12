# XPSColorMap

Map from color to display name. Will only be used by Image Segmentation for uCAIP.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec_id_token** | **str** | Should be used during training. | [optional] 
**color** | [**Color**](Color.md) |  | [optional] 
**display_name** | **str** | Should be used during preprocessing. | [optional] 
**int_color** | [**XPSColorMapIntColor**](XPSColorMapIntColor.md) |  | [optional] 

## Example

```python
from openapi_client.models.xps_color_map import XPSColorMap

# TODO update the JSON string below
json = "{}"
# create an instance of XPSColorMap from a JSON string
xps_color_map_instance = XPSColorMap.from_json(json)
# print the JSON string representation of the object
print(XPSColorMap.to_json())

# convert the object into a dict
xps_color_map_dict = xps_color_map_instance.to_dict()
# create an instance of XPSColorMap from a dict
xps_color_map_from_dict = XPSColorMap.from_dict(xps_color_map_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


