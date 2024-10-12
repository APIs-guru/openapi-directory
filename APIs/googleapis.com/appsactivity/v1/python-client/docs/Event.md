# Event

Represents the changes associated with an action taken by a user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_event_types** | **List[str]** | Additional event types. Some events may have multiple types when multiple actions are part of a single event. For example, creating a document, renaming it, and sharing it may be part of a single file-creation event. | [optional] 
**event_time_millis** | **str** | The time at which the event occurred formatted as Unix time in milliseconds. | [optional] 
**from_user_deletion** | **bool** | Whether this event is caused by a user being deleted. | [optional] 
**move** | [**Move**](Move.md) |  | [optional] 
**permission_changes** | [**List[PermissionChange]**](PermissionChange.md) | Extra information for permissionChange type events, such as the user or group the new permission applies to. | [optional] 
**primary_event_type** | **str** | The main type of event that occurred. | [optional] 
**rename** | [**Rename**](Rename.md) |  | [optional] 
**target** | [**Target**](Target.md) |  | [optional] 
**user** | [**User**](User.md) |  | [optional] 

## Example

```python
from openapi_client.models.event import Event

# TODO update the JSON string below
json = "{}"
# create an instance of Event from a JSON string
event_instance = Event.from_json(json)
# print the JSON string representation of the object
print(Event.to_json())

# convert the object into a dict
event_dict = event_instance.to_dict()
# create an instance of Event from a dict
event_from_dict = Event.from_dict(event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


