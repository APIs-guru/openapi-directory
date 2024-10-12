# GeoViewProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_pan_and_zoom** | **bool** | If true, map zoom and pan controls are enabled on the dashboard view | [default to True]
**center** | [**GeoViewPropertiesCenter**](GeoViewPropertiesCenter.md) |  | 
**colors** | [**List[DashboardColor]**](DashboardColor.md) | Colors define color encoding of data into a visualization | [optional] 
**detect_coordinate_fields** | **bool** | If true, search results get automatically regroupped so that lon,lat and value are treated as columns | [default to True]
**layers** | [**List[GeoViewLayer]**](GeoViewLayer.md) | List of individual layers shown in the map | 
**map_style** | **str** | Define map type - regular, satellite etc. | [optional] 
**note** | **str** |  | 
**queries** | [**List[DashboardQuery]**](DashboardQuery.md) |  | 
**shape** | **str** |  | 
**show_note_when_empty** | **bool** | If true, will display note when empty | 
**type** | **str** |  | 
**zoom** | **float** | Zoom level used for initial display of the map | 

## Example

```python
from openapi_client.models.geo_view_properties import GeoViewProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GeoViewProperties from a JSON string
geo_view_properties_instance = GeoViewProperties.from_json(json)
# print the JSON string representation of the object
print(GeoViewProperties.to_json())

# convert the object into a dict
geo_view_properties_dict = geo_view_properties_instance.to_dict()
# create an instance of GeoViewProperties from a dict
geo_view_properties_from_dict = GeoViewProperties.from_dict(geo_view_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


