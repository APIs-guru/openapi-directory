# TicketSeat


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coach** | **str** | The identifier of the train car or coach in which the ticketed seat is located. Eg. \&quot;10\&quot; | [optional] 
**custom_fare_class** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**fare_class** | **str** | The fare class of the ticketed seat. | [optional] 
**seat** | **str** | The identifier of where the ticketed seat is located. Eg. \&quot;42\&quot;. If there is no specific identifier, use &#x60;seatAssigment&#x60; instead. | [optional] 
**seat_assignment** | [**LocalizedString**](LocalizedString.md) |  | [optional] 

## Example

```python
from openapi_client.models.ticket_seat import TicketSeat

# TODO update the JSON string below
json = "{}"
# create an instance of TicketSeat from a JSON string
ticket_seat_instance = TicketSeat.from_json(json)
# print the JSON string representation of the object
print(TicketSeat.to_json())

# convert the object into a dict
ticket_seat_dict = ticket_seat_instance.to_dict()
# create an instance of TicketSeat from a dict
ticket_seat_from_dict = TicketSeat.from_dict(ticket_seat_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


