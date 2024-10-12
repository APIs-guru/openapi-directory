# EnterpriseTopazSidekickAgendaGroupCardProto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agenda_item** | [**List[EnterpriseTopazSidekickAgendaItem]**](EnterpriseTopazSidekickAgendaItem.md) |  | [optional] 
**context** | [**EnterpriseTopazSidekickAgendaGroupCardProtoContext**](EnterpriseTopazSidekickAgendaGroupCardProtoContext.md) |  | [optional] 
**current_agenda_item** | [**EnterpriseTopazSidekickAgendaItem**](EnterpriseTopazSidekickAgendaItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_agenda_group_card_proto import EnterpriseTopazSidekickAgendaGroupCardProto

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickAgendaGroupCardProto from a JSON string
enterprise_topaz_sidekick_agenda_group_card_proto_instance = EnterpriseTopazSidekickAgendaGroupCardProto.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickAgendaGroupCardProto.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_agenda_group_card_proto_dict = enterprise_topaz_sidekick_agenda_group_card_proto_instance.to_dict()
# create an instance of EnterpriseTopazSidekickAgendaGroupCardProto from a dict
enterprise_topaz_sidekick_agenda_group_card_proto_from_dict = EnterpriseTopazSidekickAgendaGroupCardProto.from_dict(enterprise_topaz_sidekick_agenda_group_card_proto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


