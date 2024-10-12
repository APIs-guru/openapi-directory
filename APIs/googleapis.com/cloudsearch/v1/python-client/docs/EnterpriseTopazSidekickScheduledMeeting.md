# EnterpriseTopazSidekickScheduledMeeting

Details about scheduled meetings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meeting_location** | **str** | The meeting location. | [optional] 
**meeting_time** | [**EnterpriseTopazSidekickTimeSlot**](EnterpriseTopazSidekickTimeSlot.md) |  | [optional] 
**meeting_title** | **str** | The meeting title. | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_scheduled_meeting import EnterpriseTopazSidekickScheduledMeeting

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickScheduledMeeting from a JSON string
enterprise_topaz_sidekick_scheduled_meeting_instance = EnterpriseTopazSidekickScheduledMeeting.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickScheduledMeeting.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_scheduled_meeting_dict = enterprise_topaz_sidekick_scheduled_meeting_instance.to_dict()
# create an instance of EnterpriseTopazSidekickScheduledMeeting from a dict
enterprise_topaz_sidekick_scheduled_meeting_from_dict = EnterpriseTopazSidekickScheduledMeeting.from_dict(enterprise_topaz_sidekick_scheduled_meeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


