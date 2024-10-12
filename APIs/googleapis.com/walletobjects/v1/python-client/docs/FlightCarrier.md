# FlightCarrier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**airline_alliance_logo** | [**Image**](Image.md) |  | [optional] 
**airline_logo** | [**Image**](Image.md) |  | [optional] 
**airline_name** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**carrier_iata_code** | **str** | Two character IATA airline code of the marketing carrier (as opposed to operating carrier). Exactly one of this or &#x60;carrierIcaoCode&#x60; needs to be provided for &#x60;carrier&#x60; and &#x60;operatingCarrier&#x60;. eg: \&quot;LX\&quot; for Swiss Air | [optional] 
**carrier_icao_code** | **str** | Three character ICAO airline code of the marketing carrier (as opposed to operating carrier). Exactly one of this or &#x60;carrierIataCode&#x60; needs to be provided for &#x60;carrier&#x60; and &#x60;operatingCarrier&#x60;. eg: \&quot;EZY\&quot; for Easy Jet | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;walletobjects#flightCarrier\&quot;&#x60;. | [optional] 
**wide_airline_logo** | [**Image**](Image.md) |  | [optional] 

## Example

```python
from openapi_client.models.flight_carrier import FlightCarrier

# TODO update the JSON string below
json = "{}"
# create an instance of FlightCarrier from a JSON string
flight_carrier_instance = FlightCarrier.from_json(json)
# print the JSON string representation of the object
print(FlightCarrier.to_json())

# convert the object into a dict
flight_carrier_dict = flight_carrier_instance.to_dict()
# create an instance of FlightCarrier from a dict
flight_carrier_from_dict = FlightCarrier.from_dict(flight_carrier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


