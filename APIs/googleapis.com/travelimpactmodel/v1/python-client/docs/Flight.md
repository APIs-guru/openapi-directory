# Flight

All details related to a single request item for a direct flight emission estimates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**departure_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**destination** | **str** | Required. IATA airport code for flight destination, e.g. \&quot;JFK\&quot;. | [optional] 
**flight_number** | **int** | Required. Flight number, e.g. 324. | [optional] 
**operating_carrier_code** | **str** | Required. IATA carrier code, e.g. \&quot;AA\&quot;. | [optional] 
**origin** | **str** | Required. IATA airport code for flight origin, e.g. \&quot;LHR\&quot;. | [optional] 

## Example

```python
from openapi_client.models.flight import Flight

# TODO update the JSON string below
json = "{}"
# create an instance of Flight from a JSON string
flight_instance = Flight.from_json(json)
# print the JSON string representation of the object
print(Flight.to_json())

# convert the object into a dict
flight_dict = flight_instance.to_dict()
# create an instance of Flight from a dict
flight_from_dict = Flight.from_dict(flight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


