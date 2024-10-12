# EnterpriseTopazSidekickAgendaItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conflicted_group** | [**EnterpriseTopazSidekickConflictingEventsCardProto**](EnterpriseTopazSidekickConflictingEventsCardProto.md) |  | [optional] 
**gap_before** | [**EnterpriseTopazSidekickGap**](EnterpriseTopazSidekickGap.md) |  | [optional] 
**meeting** | [**EnterpriseTopazSidekickAgendaEntry**](EnterpriseTopazSidekickAgendaEntry.md) |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_agenda_item import EnterpriseTopazSidekickAgendaItem

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickAgendaItem from a JSON string
enterprise_topaz_sidekick_agenda_item_instance = EnterpriseTopazSidekickAgendaItem.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickAgendaItem.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_agenda_item_dict = enterprise_topaz_sidekick_agenda_item_instance.to_dict()
# create an instance of EnterpriseTopazSidekickAgendaItem from a dict
enterprise_topaz_sidekick_agenda_item_from_dict = EnterpriseTopazSidekickAgendaItem.from_dict(enterprise_topaz_sidekick_agenda_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


