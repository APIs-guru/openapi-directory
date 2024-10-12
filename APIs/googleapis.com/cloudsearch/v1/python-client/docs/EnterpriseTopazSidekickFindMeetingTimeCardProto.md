# EnterpriseTopazSidekickFindMeetingTimeCardProto

Response to find meeting time among a set of people.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_available_time_slots** | [**List[EnterpriseTopazSidekickTimeSlot]**](EnterpriseTopazSidekickTimeSlot.md) | Slots when all attendees have availability. | [optional] 
**invitees** | [**List[EnterpriseTopazSidekickPerson]**](EnterpriseTopazSidekickPerson.md) | Invitees to the event. | [optional] 
**requester** | [**EnterpriseTopazSidekickPerson**](EnterpriseTopazSidekickPerson.md) |  | [optional] 
**scheduled_meeting** | [**EnterpriseTopazSidekickScheduledMeeting**](EnterpriseTopazSidekickScheduledMeeting.md) |  | [optional] 
**skipped_invitees** | [**List[EnterpriseTopazSidekickPerson]**](EnterpriseTopazSidekickPerson.md) | Invitees that have been skipped in the computation, most likely because they are groups. | [optional] 
**time_boundaries** | [**EnterpriseTopazSidekickTimeSlot**](EnterpriseTopazSidekickTimeSlot.md) |  | [optional] 
**timezone_id** | **str** | Timezone ID. | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_find_meeting_time_card_proto import EnterpriseTopazSidekickFindMeetingTimeCardProto

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickFindMeetingTimeCardProto from a JSON string
enterprise_topaz_sidekick_find_meeting_time_card_proto_instance = EnterpriseTopazSidekickFindMeetingTimeCardProto.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickFindMeetingTimeCardProto.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_find_meeting_time_card_proto_dict = enterprise_topaz_sidekick_find_meeting_time_card_proto_instance.to_dict()
# create an instance of EnterpriseTopazSidekickFindMeetingTimeCardProto from a dict
enterprise_topaz_sidekick_find_meeting_time_card_proto_from_dict = EnterpriseTopazSidekickFindMeetingTimeCardProto.from_dict(enterprise_topaz_sidekick_find_meeting_time_card_proto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


