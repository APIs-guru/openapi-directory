# GoogleMapsPlacesV1PlaceAddressComponent

The structured components that form the formatted address, if this information is available.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_code** | **str** | The language used to format this components, in CLDR notation. | [optional] 
**long_text** | **str** | The full text description or name of the address component. For example, an address component for the country Australia may have a long_name of \&quot;Australia\&quot;. | [optional] 
**short_text** | **str** | An abbreviated textual name for the address component, if available. For example, an address component for the country of Australia may have a short_name of \&quot;AU\&quot;. | [optional] 
**types** | **List[str]** | An array indicating the type(s) of the address component. | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_place_address_component import GoogleMapsPlacesV1PlaceAddressComponent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1PlaceAddressComponent from a JSON string
google_maps_places_v1_place_address_component_instance = GoogleMapsPlacesV1PlaceAddressComponent.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1PlaceAddressComponent.to_json())

# convert the object into a dict
google_maps_places_v1_place_address_component_dict = google_maps_places_v1_place_address_component_instance.to_dict()
# create an instance of GoogleMapsPlacesV1PlaceAddressComponent from a dict
google_maps_places_v1_place_address_component_from_dict = GoogleMapsPlacesV1PlaceAddressComponent.from_dict(google_maps_places_v1_place_address_component_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


