# GeoRegion

Geographical region.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | GeoRegion resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.geo_region import GeoRegion

# TODO update the JSON string below
json = "{}"
# create an instance of GeoRegion from a JSON string
geo_region_instance = GeoRegion.from_json(json)
# print the JSON string representation of the object
print(GeoRegion.to_json())

# convert the object into a dict
geo_region_dict = geo_region_instance.to_dict()
# create an instance of GeoRegion from a dict
geo_region_from_dict = GeoRegion.from_dict(geo_region_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


