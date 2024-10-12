# EventSeat


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gate** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;walletobjects#eventSeat\&quot;&#x60;. | [optional] 
**row** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**seat** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**section** | [**LocalizedString**](LocalizedString.md) |  | [optional] 

## Example

```python
from openapi_client.models.event_seat import EventSeat

# TODO update the JSON string below
json = "{}"
# create an instance of EventSeat from a JSON string
event_seat_instance = EventSeat.from_json(json)
# print the JSON string representation of the object
print(EventSeat.to_json())

# convert the object into a dict
event_seat_dict = event_seat_instance.to_dict()
# create an instance of EventSeat from a dict
event_seat_from_dict = EventSeat.from_dict(event_seat_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


