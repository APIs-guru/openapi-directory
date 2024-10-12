# FlightWithEmissions

Direct flight with emission estimates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emissions_grams_per_pax** | [**EmissionsGramsPerPax**](EmissionsGramsPerPax.md) |  | [optional] 
**flight** | [**Flight**](Flight.md) |  | [optional] 

## Example

```python
from openapi_client.models.flight_with_emissions import FlightWithEmissions

# TODO update the JSON string below
json = "{}"
# create an instance of FlightWithEmissions from a JSON string
flight_with_emissions_instance = FlightWithEmissions.from_json(json)
# print the JSON string representation of the object
print(FlightWithEmissions.to_json())

# convert the object into a dict
flight_with_emissions_dict = flight_with_emissions_instance.to_dict()
# create an instance of FlightWithEmissions from a dict
flight_with_emissions_from_dict = FlightWithEmissions.from_dict(flight_with_emissions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


