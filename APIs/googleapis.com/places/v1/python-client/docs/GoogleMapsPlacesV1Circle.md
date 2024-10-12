# GoogleMapsPlacesV1Circle

Circle with a LatLng as center and radius.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**center** | [**GoogleTypeLatLng**](GoogleTypeLatLng.md) |  | [optional] 
**radius** | **float** | Required. Radius measured in meters. The radius must be within [0.0, 50000.0]. | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_circle import GoogleMapsPlacesV1Circle

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1Circle from a JSON string
google_maps_places_v1_circle_instance = GoogleMapsPlacesV1Circle.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1Circle.to_json())

# convert the object into a dict
google_maps_places_v1_circle_dict = google_maps_places_v1_circle_instance.to_dict()
# create an instance of GoogleMapsPlacesV1Circle from a dict
google_maps_places_v1_circle_from_dict = GoogleMapsPlacesV1Circle.from_dict(google_maps_places_v1_circle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


