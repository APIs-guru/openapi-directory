# GeocodingPoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lat** | **float** | Latitude | [optional] 
**lng** | **float** | Longitude | [optional] 

## Example

```python
from openapi_client.models.geocoding_point import GeocodingPoint

# TODO update the JSON string below
json = "{}"
# create an instance of GeocodingPoint from a JSON string
geocoding_point_instance = GeocodingPoint.from_json(json)
# print the JSON string representation of the object
print(GeocodingPoint.to_json())

# convert the object into a dict
geocoding_point_dict = geocoding_point_instance.to_dict()
# create an instance of GeocodingPoint from a dict
geocoding_point_from_dict = GeocodingPoint.from_dict(geocoding_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


