# GoogleMapsPlacesV1FuelOptionsFuelPrice

Fuel price information for a given type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price** | [**GoogleTypeMoney**](GoogleTypeMoney.md) |  | [optional] 
**type** | **str** | The type of fuel. | [optional] 
**update_time** | **str** | The time the fuel price was last updated. | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_fuel_options_fuel_price import GoogleMapsPlacesV1FuelOptionsFuelPrice

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1FuelOptionsFuelPrice from a JSON string
google_maps_places_v1_fuel_options_fuel_price_instance = GoogleMapsPlacesV1FuelOptionsFuelPrice.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1FuelOptionsFuelPrice.to_json())

# convert the object into a dict
google_maps_places_v1_fuel_options_fuel_price_dict = google_maps_places_v1_fuel_options_fuel_price_instance.to_dict()
# create an instance of GoogleMapsPlacesV1FuelOptionsFuelPrice from a dict
google_maps_places_v1_fuel_options_fuel_price_from_dict = GoogleMapsPlacesV1FuelOptionsFuelPrice.from_dict(google_maps_places_v1_fuel_options_fuel_price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


