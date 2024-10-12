# EventFocusTimeProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_decline_mode** | **str** | Whether to decline meeting invitations which overlap Focus Time events. Valid values are declineNone, meaning that no meeting invitations are declined; declineAllConflictingInvitations, meaning that all conflicting meeting invitations that conflict with the event are declined; and declineOnlyNewConflictingInvitations, meaning that only new conflicting meeting invitations which arrive while the Focus Time event is present are to be declined. | [optional] 
**chat_status** | **str** | The status to mark the user in Chat and related products. This can be available or doNotDisturb. | [optional] 
**decline_message** | **str** | Response message to set if an existing event or new invitation is automatically declined by Calendar. | [optional] 

## Example

```python
from openapi_client.models.event_focus_time_properties import EventFocusTimeProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EventFocusTimeProperties from a JSON string
event_focus_time_properties_instance = EventFocusTimeProperties.from_json(json)
# print the JSON string representation of the object
print(EventFocusTimeProperties.to_json())

# convert the object into a dict
event_focus_time_properties_dict = event_focus_time_properties_instance.to_dict()
# create an instance of EventFocusTimeProperties from a dict
event_focus_time_properties_from_dict = EventFocusTimeProperties.from_dict(event_focus_time_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


