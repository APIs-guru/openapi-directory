# RegionGeoTargetArea

A list of geotargets that defines the region area.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**geotarget_criteria_ids** | **List[str]** | Required. A non-empty list of [location IDs](https://developers.google.com/adwords/api/docs/appendix/geotargeting). They must all be of the same location type (e.g., state). | [optional] 

## Example

```python
from openapi_client.models.region_geo_target_area import RegionGeoTargetArea

# TODO update the JSON string below
json = "{}"
# create an instance of RegionGeoTargetArea from a JSON string
region_geo_target_area_instance = RegionGeoTargetArea.from_json(json)
# print the JSON string representation of the object
print(RegionGeoTargetArea.to_json())

# convert the object into a dict
region_geo_target_area_dict = region_geo_target_area_instance.to_dict()
# create an instance of RegionGeoTargetArea from a dict
region_geo_target_area_from_dict = RegionGeoTargetArea.from_dict(region_geo_target_area_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


