# GoogleTypeLatLng

An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latitude** | **float** | The latitude in degrees. It must be in the range [-90.0, +90.0]. | [optional] 
**longitude** | **float** | The longitude in degrees. It must be in the range [-180.0, +180.0]. | [optional] 

## Example

```python
from openapi_client.models.google_type_lat_lng import GoogleTypeLatLng

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleTypeLatLng from a JSON string
google_type_lat_lng_instance = GoogleTypeLatLng.from_json(json)
# print the JSON string representation of the object
print(GoogleTypeLatLng.to_json())

# convert the object into a dict
google_type_lat_lng_dict = google_type_lat_lng_instance.to_dict()
# create an instance of GoogleTypeLatLng from a dict
google_type_lat_lng_from_dict = GoogleTypeLatLng.from_dict(google_type_lat_lng_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


