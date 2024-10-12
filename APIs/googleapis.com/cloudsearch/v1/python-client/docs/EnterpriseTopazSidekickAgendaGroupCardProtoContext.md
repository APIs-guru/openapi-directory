# EnterpriseTopazSidekickAgendaGroupCardProtoContext

The context that resulted in the generation of the card.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **str** | User friendly free text that describes the context of the card (e.g. \&quot;Next meeting with Bob\&quot;). This is largely only applicable when the card is generated from a query. | [optional] 
**var_date** | **str** | Localized free text that describes the dates represented by the card. Currently, the card will only represent a single day. | [optional] 
**events_restrict** | **str** | Represents restrictions applied to the events requested in the user&#39;s query. | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_agenda_group_card_proto_context import EnterpriseTopazSidekickAgendaGroupCardProtoContext

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickAgendaGroupCardProtoContext from a JSON string
enterprise_topaz_sidekick_agenda_group_card_proto_context_instance = EnterpriseTopazSidekickAgendaGroupCardProtoContext.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickAgendaGroupCardProtoContext.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_agenda_group_card_proto_context_dict = enterprise_topaz_sidekick_agenda_group_card_proto_context_instance.to_dict()
# create an instance of EnterpriseTopazSidekickAgendaGroupCardProtoContext from a dict
enterprise_topaz_sidekick_agenda_group_card_proto_context_from_dict = EnterpriseTopazSidekickAgendaGroupCardProtoContext.from_dict(enterprise_topaz_sidekick_agenda_group_card_proto_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


