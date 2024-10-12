# LatLng

An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latitude** | **float** | The latitude in degrees. It must be in the range [-90.0, +90.0]. | [optional] 
**longitude** | **float** | The longitude in degrees. It must be in the range [-180.0, +180.0]. | [optional] 

## Example

```python
from openapi_client.models.lat_lng import LatLng

# TODO update the JSON string below
json = "{}"
# create an instance of LatLng from a JSON string
lat_lng_instance = LatLng.from_json(json)
# print the JSON string representation of the object
print(LatLng.to_json())

# convert the object into a dict
lat_lng_dict = lat_lng_instance.to_dict()
# create an instance of LatLng from a dict
lat_lng_from_dict = LatLng.from_dict(lat_lng_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


