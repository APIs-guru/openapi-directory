# TicketLeg


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arrival_date_time** | **str** | The date/time of arrival. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: &#x60;1985-04-12T23:20:50.52Z&#x60; would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. &#x60;1985-04-12T19:20:50.52-04:00&#x60; would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. &#x60;1985-04-12T19:20:50.52&#x60; would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the \&quot;local date/time\&quot;. This should be the local date/time at the destination station. For example, if the event occurs at the 20th hour of June 5th, 2018 at the destination station, the local date/time portion should be &#x60;2018-06-05T20:00:00&#x60;. If the local date/time at the destination station is 4 hours before UTC, an offset of &#x60;-04:00&#x60; may be appended. Without offset information, some rich features may not be available. | [optional] 
**carriage** | **str** | The train or ship name/number that the passsenger needs to board. | [optional] 
**departure_date_time** | **str** | The date/time of departure. This is required if there is no validity time interval set on the transit object. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: &#x60;1985-04-12T23:20:50.52Z&#x60; would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. &#x60;1985-04-12T19:20:50.52-04:00&#x60; would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. &#x60;1985-04-12T19:20:50.52&#x60; would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the \&quot;local date/time\&quot;. This should be the local date/time at the origin station. For example, if the departure occurs at the 20th hour of June 5th, 2018 at the origin station, the local date/time portion should be &#x60;2018-06-05T20:00:00&#x60;. If the local date/time at the origin station is 4 hours before UTC, an offset of &#x60;-04:00&#x60; may be appended. Without offset information, some rich features may not be available. | [optional] 
**destination_name** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**destination_station_code** | **str** | The destination station code. | [optional] 
**fare_name** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**origin_name** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**origin_station_code** | **str** | The origin station code. This is required if &#x60;destinationStationCode&#x60; is present or if &#x60;originName&#x60; is not present. | [optional] 
**platform** | **str** | The platform or gate where the passenger can board the carriage. | [optional] 
**ticket_seat** | [**TicketSeat**](TicketSeat.md) |  | [optional] 
**ticket_seats** | [**List[TicketSeat]**](TicketSeat.md) | The reserved seat for the passenger(s). If only one seat is to be specified then use the &#x60;ticketSeat&#x60; field instead. Both &#x60;ticketSeat&#x60; and &#x60;ticketSeats&#x60; may not be set. | [optional] 
**transit_operator_name** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**transit_terminus_name** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**zone** | **str** | The zone of boarding within the platform. | [optional] 

## Example

```python
from openapi_client.models.ticket_leg import TicketLeg

# TODO update the JSON string below
json = "{}"
# create an instance of TicketLeg from a JSON string
ticket_leg_instance = TicketLeg.from_json(json)
# print the JSON string representation of the object
print(TicketLeg.to_json())

# convert the object into a dict
ticket_leg_dict = ticket_leg_instance.to_dict()
# create an instance of TicketLeg from a dict
ticket_leg_from_dict = TicketLeg.from_dict(ticket_leg_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


