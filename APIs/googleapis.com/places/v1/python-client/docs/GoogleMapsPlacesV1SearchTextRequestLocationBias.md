# GoogleMapsPlacesV1SearchTextRequestLocationBias

The region to search. This location serves as a bias which means results around given location might be returned.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**circle** | [**GoogleMapsPlacesV1Circle**](GoogleMapsPlacesV1Circle.md) |  | [optional] 
**rectangle** | [**GoogleGeoTypeViewport**](GoogleGeoTypeViewport.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_search_text_request_location_bias import GoogleMapsPlacesV1SearchTextRequestLocationBias

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1SearchTextRequestLocationBias from a JSON string
google_maps_places_v1_search_text_request_location_bias_instance = GoogleMapsPlacesV1SearchTextRequestLocationBias.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1SearchTextRequestLocationBias.to_json())

# convert the object into a dict
google_maps_places_v1_search_text_request_location_bias_dict = google_maps_places_v1_search_text_request_location_bias_instance.to_dict()
# create an instance of GoogleMapsPlacesV1SearchTextRequestLocationBias from a dict
google_maps_places_v1_search_text_request_location_bias_from_dict = GoogleMapsPlacesV1SearchTextRequestLocationBias.from_dict(google_maps_places_v1_search_text_request_location_bias_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


