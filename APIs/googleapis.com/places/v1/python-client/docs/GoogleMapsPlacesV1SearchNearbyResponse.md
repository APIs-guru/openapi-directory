# GoogleMapsPlacesV1SearchNearbyResponse

Response proto for Search Nearby. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**places** | [**List[GoogleMapsPlacesV1Place]**](GoogleMapsPlacesV1Place.md) | A list of places that meets user&#39;s requirements like places types, number of places and specific location restriction. | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_search_nearby_response import GoogleMapsPlacesV1SearchNearbyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1SearchNearbyResponse from a JSON string
google_maps_places_v1_search_nearby_response_instance = GoogleMapsPlacesV1SearchNearbyResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1SearchNearbyResponse.to_json())

# convert the object into a dict
google_maps_places_v1_search_nearby_response_dict = google_maps_places_v1_search_nearby_response_instance.to_dict()
# create an instance of GoogleMapsPlacesV1SearchNearbyResponse from a dict
google_maps_places_v1_search_nearby_response_from_dict = GoogleMapsPlacesV1SearchNearbyResponse.from_dict(google_maps_places_v1_search_nearby_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


