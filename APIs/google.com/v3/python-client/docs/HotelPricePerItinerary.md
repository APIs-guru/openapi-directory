# HotelPricePerItinerary

Hotel price for a given itinerary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkin_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**currency_code** | **str** | Currency for &#x60;price&#x60;, &#x60;taxes&#x60;, and &#x60;fees&#x60;. | [optional] 
**fees** | **float** | Fees for this itinerary. | [optional] 
**length_of_stay_days** | **int** | Number of nights for the itinerary. | [optional] 
**price** | **float** | Hotel price for this itinerary. | [optional] 
**taxes** | **float** | Taxes for this itinerary. | [optional] 
**update_time** | **str** | Update timestamp for this hotel price. | [optional] 

## Example

```python
from openapi_client.models.hotel_price_per_itinerary import HotelPricePerItinerary

# TODO update the JSON string below
json = "{}"
# create an instance of HotelPricePerItinerary from a JSON string
hotel_price_per_itinerary_instance = HotelPricePerItinerary.from_json(json)
# print the JSON string representation of the object
print(HotelPricePerItinerary.to_json())

# convert the object into a dict
hotel_price_per_itinerary_dict = hotel_price_per_itinerary_instance.to_dict()
# create an instance of HotelPricePerItinerary from a dict
hotel_price_per_itinerary_from_dict = HotelPricePerItinerary.from_dict(hotel_price_per_itinerary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


