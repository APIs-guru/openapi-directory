# Transportation

Vehicles or vehicular services facilitated or owned by the property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**airport_shuttle** | **bool** | Airport shuttle. The hotel provides guests with a chauffeured van or bus to and from the airport. Can be free or for a fee. Guests may share the vehicle with other guests unknown to them. Applies if the hotel has a third-party shuttle service (office/desk etc.) within the hotel. As long as hotel provides this service, it doesn&#39;t matter if it&#39;s directly with them or a third party they work with. Does not apply if guest has to coordinate with an entity outside/other than the hotel. | [optional] 
**airport_shuttle_exception** | **str** | Airport shuttle exception. | [optional] 
**car_rental_on_property** | **bool** | Car rental on property. A branch of a rental car company with a processing desk in the hotel. Available cars for rent may be awaiting at the hotel or in a nearby lot. | [optional] 
**car_rental_on_property_exception** | **str** | Car rental on property exception. | [optional] 
**free_airport_shuttle** | **bool** | Free airport shuttle. Airport shuttle is free to guests. Must be free to all guests without any conditions. | [optional] 
**free_airport_shuttle_exception** | **str** | Free airport shuttle exception. | [optional] 
**free_private_car_service** | **bool** | Free private car service. Private chauffeured car service is free to guests. | [optional] 
**free_private_car_service_exception** | **str** | Free private car service exception. | [optional] 
**local_shuttle** | **bool** | Local shuttle. A car, van or bus provided by the hotel to transport guests to destinations within a specified range of distance around the hotel. Usually shopping and/or convention centers, downtown districts, or beaches. Can be free or for a fee. | [optional] 
**local_shuttle_exception** | **str** | Local shuttle exception. | [optional] 
**private_car_service** | **bool** | Private car service. Hotel provides a private chauffeured car to transport guests to destinations. Passengers in the car are either alone or are known to one another and have requested the car together. Service can be free or for a fee and travel distance is usually limited to a specific range. Not a taxi. | [optional] 
**private_car_service_exception** | **str** | Private car service exception. | [optional] 
**transfer** | **bool** | Transfer. Hotel provides a shuttle service or car service to take guests to and from the nearest airport or train station. Can be free or for a fee. Guests may share the vehicle with other guests unknown to them. | [optional] 
**transfer_exception** | **str** | Transfer exception. | [optional] 

## Example

```python
from openapi_client.models.transportation import Transportation

# TODO update the JSON string below
json = "{}"
# create an instance of Transportation from a JSON string
transportation_instance = Transportation.from_json(json)
# print the JSON string representation of the object
print(Transportation.to_json())

# convert the object into a dict
transportation_dict = transportation_instance.to_dict()
# create an instance of Transportation from a dict
transportation_from_dict = Transportation.from_dict(transportation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


