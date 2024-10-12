# ReservationInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confirmation_code** | **str** | Confirmation code needed to check into this flight. This is the number that the passenger would enter into a kiosk at the airport to look up the flight and print a boarding pass. | [optional] 
**eticket_number** | **str** | E-ticket number. | [optional] 
**frequent_flyer_info** | [**FrequentFlyerInfo**](FrequentFlyerInfo.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;walletobjects#reservationInfo\&quot;&#x60;. | [optional] 

## Example

```python
from openapi_client.models.reservation_info import ReservationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationInfo from a JSON string
reservation_info_instance = ReservationInfo.from_json(json)
# print the JSON string representation of the object
print(ReservationInfo.to_json())

# convert the object into a dict
reservation_info_dict = reservation_info_instance.to_dict()
# create an instance of ReservationInfo from a dict
reservation_info_from_dict = ReservationInfo.from_dict(reservation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


