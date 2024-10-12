# EventReservationInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confirmation_code** | **str** | The confirmation code of the event reservation. This may also take the form of an \&quot;order number\&quot;, \&quot;confirmation number\&quot;, \&quot;reservation number\&quot;, or other equivalent. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;walletobjects#eventReservationInfo\&quot;&#x60;. | [optional] 

## Example

```python
from openapi_client.models.event_reservation_info import EventReservationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EventReservationInfo from a JSON string
event_reservation_info_instance = EventReservationInfo.from_json(json)
# print the JSON string representation of the object
print(EventReservationInfo.to_json())

# convert the object into a dict
event_reservation_info_dict = event_reservation_info_instance.to_dict()
# create an instance of EventReservationInfo from a dict
event_reservation_info_from_dict = EventReservationInfo.from_dict(event_reservation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


