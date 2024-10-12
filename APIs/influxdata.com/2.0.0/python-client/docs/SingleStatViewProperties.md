# SingleStatViewProperties


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
**static_legend** | [**StaticLegend**](StaticLegend.md) |  | [optional] 
**suffix** | **str** |  | 
**tick_prefix** | **str** |  | 
**tick_suffix** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.single_stat_view_properties import SingleStatViewProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SingleStatViewProperties from a JSON string
single_stat_view_properties_instance = SingleStatViewProperties.from_json(json)
# print the JSON string representation of the object
print(SingleStatViewProperties.to_json())

# convert the object into a dict
single_stat_view_properties_dict = single_stat_view_properties_instance.to_dict()
# create an instance of SingleStatViewProperties from a dict
single_stat_view_properties_from_dict = SingleStatViewProperties.from_dict(single_stat_view_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


