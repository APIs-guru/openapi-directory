# GoogleMapsPlacesV1FuelOptions

The most recent information about fuel options in a gas station. This information is updated regularly.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fuel_prices** | [**List[GoogleMapsPlacesV1FuelOptionsFuelPrice]**](GoogleMapsPlacesV1FuelOptionsFuelPrice.md) | The last known fuel price for each type of fuel this station has. There is one entry per fuel type this station has. Order is not important. | [optional] 

## Example

```python
from openapi_client.models.google_maps_places_v1_fuel_options import GoogleMapsPlacesV1FuelOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlacesV1FuelOptions from a JSON string
google_maps_places_v1_fuel_options_instance = GoogleMapsPlacesV1FuelOptions.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlacesV1FuelOptions.to_json())

# convert the object into a dict
google_maps_places_v1_fuel_options_dict = google_maps_places_v1_fuel_options_instance.to_dict()
# create an instance of GoogleMapsPlacesV1FuelOptions from a dict
google_maps_places_v1_fuel_options_from_dict = GoogleMapsPlacesV1FuelOptions.from_dict(google_maps_places_v1_fuel_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


