# LatLngBounds

A rectangle in geographical coordinates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**northeast** | [**LatLng**](LatLng.md) |  | [optional] 
**southwest** | [**LatLng**](LatLng.md) |  | [optional] 

## Example

```python
from openapi_client.models.lat_lng_bounds import LatLngBounds

# TODO update the JSON string below
json = "{}"
# create an instance of LatLngBounds from a JSON string
lat_lng_bounds_instance = LatLngBounds.from_json(json)
# print the JSON string representation of the object
print(LatLngBounds.to_json())

# convert the object into a dict
lat_lng_bounds_dict = lat_lng_bounds_instance.to_dict()
# create an instance of LatLngBounds from a dict
lat_lng_bounds_from_dict = LatLngBounds.from_dict(lat_lng_bounds_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


