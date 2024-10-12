# LatLongRect

Rectangle determined by min and max `LatLng` pairs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_lat_lng** | [**LatLng**](LatLng.md) |  | [optional] 
**min_lat_lng** | [**LatLng**](LatLng.md) |  | [optional] 

## Example

```python
from openapi_client.models.lat_long_rect import LatLongRect

# TODO update the JSON string below
json = "{}"
# create an instance of LatLongRect from a JSON string
lat_long_rect_instance = LatLongRect.from_json(json)
# print the JSON string representation of the object
print(LatLongRect.to_json())

# convert the object into a dict
lat_long_rect_dict = lat_long_rect_instance.to_dict()
# create an instance of LatLongRect from a dict
lat_long_rect_from_dict = LatLongRect.from_dict(lat_long_rect_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


