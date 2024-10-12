# GaugeViewProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**colors** | [**List[DashboardColor]**](DashboardColor.md) | Colors define color encoding of data into a visualization | 
**decimal_places** | [**DecimalPlaces**](DecimalPlaces.md) |  | 
**note** | **str** |  | 
**prefix** | **str** |  | 
**queries** | [**List[DashboardQuery]**](DashboardQuery.md) |  | 
**shape** | **str** |  | 
**show_note_when_empty** | **bool** | If true, will display note when empty | 
**suffix** | **str** |  | 
**tick_prefix** | **str** |  | 
**tick_suffix** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.gauge_view_properties import GaugeViewProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GaugeViewProperties from a JSON string
gauge_view_properties_instance = GaugeViewProperties.from_json(json)
# print the JSON string representation of the object
print(GaugeViewProperties.to_json())

# convert the object into a dict
gauge_view_properties_dict = gauge_view_properties_instance.to_dict()
# create an instance of GaugeViewProperties from a dict
gauge_view_properties_from_dict = GaugeViewProperties.from_dict(gauge_view_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


