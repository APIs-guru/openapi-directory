# CacheFillRegions

Specifies the regions for Cache Fill.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_region** | **str** | The destination region for cache fill. | [optional] 
**source_region** | **str** | The source region for cache fill. | [optional] 

## Example

```python
from openapi_client.models.cache_fill_regions import CacheFillRegions

# TODO update the JSON string below
json = "{}"
# create an instance of CacheFillRegions from a JSON string
cache_fill_regions_instance = CacheFillRegions.from_json(json)
# print the JSON string representation of the object
print(CacheFillRegions.to_json())

# convert the object into a dict
cache_fill_regions_dict = cache_fill_regions_instance.to_dict()
# create an instance of CacheFillRegions from a dict
cache_fill_regions_from_dict = CacheFillRegions.from_dict(cache_fill_regions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


