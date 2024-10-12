# TicketCountsDetailedEntityEventChannelsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_categories** | [**List[TicketCountsDetailedEntityEventChannelsInnerEventCategoriesInner]**](TicketCountsDetailedEntityEventChannelsInnerEventCategoriesInner.md) | Array of event categories which where sold. | 
**id** | **int** | ID of the event channel. | 

## Example

```python
from openapi_client.models.ticket_counts_detailed_entity_event_channels_inner import TicketCountsDetailedEntityEventChannelsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TicketCountsDetailedEntityEventChannelsInner from a JSON string
ticket_counts_detailed_entity_event_channels_inner_instance = TicketCountsDetailedEntityEventChannelsInner.from_json(json)
# print the JSON string representation of the object
print(TicketCountsDetailedEntityEventChannelsInner.to_json())

# convert the object into a dict
ticket_counts_detailed_entity_event_channels_inner_dict = ticket_counts_detailed_entity_event_channels_inner_instance.to_dict()
# create an instance of TicketCountsDetailedEntityEventChannelsInner from a dict
ticket_counts_detailed_entity_event_channels_inner_from_dict = TicketCountsDetailedEntityEventChannelsInner.from_dict(ticket_counts_detailed_entity_event_channels_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


