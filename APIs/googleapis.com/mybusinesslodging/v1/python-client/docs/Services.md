# Services

Conveniences or help provided by the property to facilitate an easier, more comfortable stay.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**baggage_storage** | **bool** | Baggage storage. A provision for guests to leave their bags at the hotel when they arrive for their stay before the official check-in time. May or may not apply for guests who wish to leave their bags after check-out and before departing the locale. Also known as bag dropoff. | [optional] 
**baggage_storage_exception** | **str** | Baggage storage exception. | [optional] 
**concierge** | **bool** | Concierge. Hotel staff member(s) responsible for facilitating an easy, comfortable stay through making reservations for meals, sourcing theater tickets, arranging tours, finding a doctor, making recommendations, and answering questions. | [optional] 
**concierge_exception** | **str** | Concierge exception. | [optional] 
**convenience_store** | **bool** | Convenience store. A shop at the hotel primarily selling snacks, drinks, non-prescription medicines, health and beauty aids, magazines and newspapers. | [optional] 
**convenience_store_exception** | **str** | Convenience store exception. | [optional] 
**currency_exchange** | **bool** | Currency exchange. A staff member or automated machine tasked with the transaction of providing the native currency of the hotel&#39;s locale in exchange for the foreign currency provided by a guest. | [optional] 
**currency_exchange_exception** | **str** | Currency exchange exception. | [optional] 
**elevator** | **bool** | Elevator. A passenger elevator that transports guests from one story to another. Also known as lift. | [optional] 
**elevator_exception** | **str** | Elevator exception. | [optional] 
**front_desk** | **bool** | Front desk. A counter or desk in the lobby or the immediate interior of the hotel where a member of the staff greets guests and processes the information related to their stay (including check-in and check-out). May or may not be manned and open 24/7. | [optional] 
**front_desk_exception** | **str** | Front desk exception. | [optional] 
**full_service_laundry** | **bool** | Full service laundry. Laundry and dry cleaning facilitated and handled by the hotel on behalf of the guest. Does not include the provision for guests to do their own laundry in on-site machines. | [optional] 
**full_service_laundry_exception** | **str** | Full service laundry exception. | [optional] 
**gift_shop** | **bool** | Gift shop. An on-site store primarily selling souvenirs, mementos and other gift items. May or may not also sell sundries, magazines and newspapers, clothing, or snacks. | [optional] 
**gift_shop_exception** | **str** | Gift shop exception. | [optional] 
**languages_spoken** | [**List[LanguageSpoken]**](LanguageSpoken.md) | Languages spoken by at least one staff member. | [optional] 
**self_service_laundry** | **bool** | Self service laundry. On-site clothes washers and dryers accessible to guests for the purpose of washing and drying their own clothes. May or may not require payment to use the machines. | [optional] 
**self_service_laundry_exception** | **str** | Self service laundry exception. | [optional] 
**social_hour** | **bool** | Social hour. A reception with complimentary soft drinks, tea, coffee, wine and/or cocktails in the afternoon or evening. Can be hosted by hotel staff or guests may serve themselves. Also known as wine hour. The availability of coffee/tea in the lobby throughout the day does not constitute a social or wine hour. | [optional] 
**social_hour_exception** | **str** | Social hour exception. | [optional] 
**twenty_four_hour_front_desk** | **bool** | 24hr front desk. Front desk is staffed 24 hours a day. | [optional] 
**twenty_four_hour_front_desk_exception** | **str** | 24hr front desk exception. | [optional] 
**wake_up_calls** | **bool** | Wake up calls. By direction of the guest, a hotel staff member will phone the guest unit at the requested hour. Also known as morning call. | [optional] 
**wake_up_calls_exception** | **str** | Wake up calls exception. | [optional] 

## Example

```python
from openapi_client.models.services import Services

# TODO update the JSON string below
json = "{}"
# create an instance of Services from a JSON string
services_instance = Services.from_json(json)
# print the JSON string representation of the object
print(Services.to_json())

# convert the object into a dict
services_dict = services_instance.to_dict()
# create an instance of Services from a dict
services_from_dict = Services.from_dict(services_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


