# Key

Key of a result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advance_booking_window** | **int** | The number of days in advance the user wants to book the itinerary. If &#x60;advanceBookingWindow&#x60; is not a value of the &#x60;aggregateBy&#x60; parameter in the request call, then the &#x60;advanceBookingWindow&#x60; field is not returned in the &#x60;Key&#x60;. | [optional] 
**checkin_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**var_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**device_type** | **str** | The user’s device type. If &#x60;deviceType&#x60; is not a value of the &#x60;aggregateBy&#x60; parameter in the request call, then the &#x60;deviceType&#x60; field is not returned in the &#x60;Key&#x60;. | [optional] 
**hotel_region_code** | **str** | CLDR region code of the country/region of the hotel. If &#x60;hotelRegionCode&#x60; is not a value of the &#x60;aggregateBy&#x60; parameter in the request call, then the &#x60;hotelRegionCode&#x60; field is not returned in the &#x60;Key&#x60;. | [optional] 
**length_of_stay_days** | **int** | The number of nights for the itinerary. If &#x60;lengthOfStayDays&#x60; is not a value of the &#x60;aggregateBy&#x60; parameter in the request call, then the &#x60;lengthOfStayDays&#x60; field is not returned in the &#x60;Key&#x60;. | [optional] 
**occupancy** | **int** | The total occupancy of the itinerary. If &#x60;occupancy&#x60; is not a value of the &#x60;aggregateBy&#x60; parameter in the request call, then the &#x60;occupancy&#x60; field is not returned in the &#x60;Key&#x60;. | [optional] 
**partner_hotel_id** | **str** | Partner&#39;s hotel ID. If &#x60;partnerHotelId&#x60; is not a value of the &#x60;aggregateBy&#x60; parameter in the request call, then the &#x60;partnerHotelId&#x60; field is not returned in the &#x60;Key&#x60;. | [optional] 
**user_region_code** | **str** | ISO 3116 region code of the country/region of the user. If &#x60;userRegionCode&#x60; is not a value of the &#x60;aggregateBy&#x60; parameter in the request call, then the &#x60;userRegionCode&#x60; field is not returned in the &#x60;Key&#x60;. | [optional] 

## Example

```python
from openapi_client.models.key import Key

# TODO update the JSON string below
json = "{}"
# create an instance of Key from a JSON string
key_instance = Key.from_json(json)
# print the JSON string representation of the object
print(Key.to_json())

# convert the object into a dict
key_dict = key_instance.to_dict()
# create an instance of Key from a dict
key_from_dict = Key.from_dict(key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


