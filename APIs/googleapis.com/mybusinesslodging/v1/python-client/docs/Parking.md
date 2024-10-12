# Parking

Parking options at the property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**electric_car_charging_stations** | **bool** | Electric car charging stations. Electric power stations, usually located outdoors, into which guests plug their electric cars to receive a charge. | [optional] 
**electric_car_charging_stations_exception** | **str** | Electric car charging stations exception. | [optional] 
**free_parking** | **bool** | Free parking. The hotel allows the cars of guests to be parked for free. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply. Parking may be performed by the guest or by hotel staff. Free parking must be available to all guests (limited conditions does not apply). | [optional] 
**free_parking_exception** | **str** | Free parking exception. | [optional] 
**free_self_parking** | **bool** | Free self parking. Guests park their own cars for free. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply. | [optional] 
**free_self_parking_exception** | **str** | Free self parking exception. | [optional] 
**free_valet_parking** | **bool** | Free valet parking. Hotel staff member parks the cars of guests. Parking with this service is free. | [optional] 
**free_valet_parking_exception** | **str** | Free valet parking exception. | [optional] 
**parking_available** | **bool** | Parking available. The hotel allows the cars of guests to be parked. Can be free or for a fee. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply. Parking may be performed by the guest or by hotel staff. | [optional] 
**parking_available_exception** | **str** | Parking available exception. | [optional] 
**self_parking_available** | **bool** | Self parking available. Guests park their own cars. Parking facility may be an outdoor lot or an indoor garage, but must be onsite. Nearby parking does not apply. Can be free or for a fee. | [optional] 
**self_parking_available_exception** | **str** | Self parking available exception. | [optional] 
**valet_parking_available** | **bool** | Valet parking available. Hotel staff member parks the cars of guests. Parking with this service can be free or for a fee. | [optional] 
**valet_parking_available_exception** | **str** | Valet parking available exception. | [optional] 

## Example

```python
from openapi_client.models.parking import Parking

# TODO update the JSON string below
json = "{}"
# create an instance of Parking from a JSON string
parking_instance = Parking.from_json(json)
# print the JSON string representation of the object
print(Parking.to_json())

# convert the object into a dict
parking_dict = parking_instance.to_dict()
# create an instance of Parking from a dict
parking_from_dict = Parking.from_dict(parking_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


