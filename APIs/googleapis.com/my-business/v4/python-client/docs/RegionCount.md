# RegionCount

A region with its associated request count.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | Number of driving-direction requests from this region. | [optional] 
**label** | **str** | Human-readable label for the region. | [optional] 
**latlng** | [**LatLng**](LatLng.md) |  | [optional] 

## Example

```python
from openapi_client.models.region_count import RegionCount

# TODO update the JSON string below
json = "{}"
# create an instance of RegionCount from a JSON string
region_count_instance = RegionCount.from_json(json)
# print the JSON string representation of the object
print(RegionCount.to_json())

# convert the object into a dict
region_count_dict = region_count_instance.to_dict()
# create an instance of RegionCount from a dict
region_count_from_dict = RegionCount.from_dict(region_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


