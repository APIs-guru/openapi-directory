# GeoRegion

Geographical region

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

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


