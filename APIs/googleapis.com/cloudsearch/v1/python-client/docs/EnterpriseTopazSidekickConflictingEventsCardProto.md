# EnterpriseTopazSidekickConflictingEventsCardProto

Conflicting meetings card proto.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conflicting_event** | [**List[EnterpriseTopazSidekickAgendaEntry]**](EnterpriseTopazSidekickAgendaEntry.md) | All the events that conflict with main_event. | [optional] 
**main_event** | [**EnterpriseTopazSidekickAgendaEntry**](EnterpriseTopazSidekickAgendaEntry.md) |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_conflicting_events_card_proto import EnterpriseTopazSidekickConflictingEventsCardProto

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickConflictingEventsCardProto from a JSON string
enterprise_topaz_sidekick_conflicting_events_card_proto_instance = EnterpriseTopazSidekickConflictingEventsCardProto.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickConflictingEventsCardProto.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_conflicting_events_card_proto_dict = enterprise_topaz_sidekick_conflicting_events_card_proto_instance.to_dict()
# create an instance of EnterpriseTopazSidekickConflictingEventsCardProto from a dict
enterprise_topaz_sidekick_conflicting_events_card_proto_from_dict = EnterpriseTopazSidekickConflictingEventsCardProto.from_dict(enterprise_topaz_sidekick_conflicting_events_card_proto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


