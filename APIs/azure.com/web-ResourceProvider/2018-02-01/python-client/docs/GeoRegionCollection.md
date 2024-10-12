# GeoRegionCollection

Collection of geographical regions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[GeoRegion]**](GeoRegion.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.geo_region_collection import GeoRegionCollection

# TODO update the JSON string below
json = "{}"
# create an instance of GeoRegionCollection from a JSON string
geo_region_collection_instance = GeoRegionCollection.from_json(json)
# print the JSON string representation of the object
print(GeoRegionCollection.to_json())

# convert the object into a dict
geo_region_collection_dict = geo_region_collection_instance.to_dict()
# create an instance of GeoRegionCollection from a dict
geo_region_collection_from_dict = GeoRegionCollection.from_dict(geo_region_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


