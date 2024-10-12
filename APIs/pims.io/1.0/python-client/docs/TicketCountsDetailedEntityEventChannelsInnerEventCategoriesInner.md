# TicketCountsDetailedEntityEventChannelsInnerEventCategoriesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_price_ranges** | [**List[TicketCountsDetailedEntityEventChannelsInnerEventCategoriesInnerEventPriceRangesInner]**](TicketCountsDetailedEntityEventChannelsInnerEventCategoriesInnerEventPriceRangesInner.md) | Array of event price ranges which where sold. | 
**id** | **int** | ID of the event category. | 

## Example

```python
from openapi_client.models.ticket_counts_detailed_entity_event_channels_inner_event_categories_inner import TicketCountsDetailedEntityEventChannelsInnerEventCategoriesInner

# TODO update the JSON string below
json = "{}"
# create an instance of TicketCountsDetailedEntityEventChannelsInnerEventCategoriesInner from a JSON string
ticket_counts_detailed_entity_event_channels_inner_event_categories_inner_instance = TicketCountsDetailedEntityEventChannelsInnerEventCategoriesInner.from_json(json)
# print the JSON string representation of the object
print(TicketCountsDetailedEntityEventChannelsInnerEventCategoriesInner.to_json())

# convert the object into a dict
ticket_counts_detailed_entity_event_channels_inner_event_categories_inner_dict = ticket_counts_detailed_entity_event_channels_inner_event_categories_inner_instance.to_dict()
# create an instance of TicketCountsDetailedEntityEventChannelsInnerEventCategoriesInner from a dict
ticket_counts_detailed_entity_event_channels_inner_event_categories_inner_from_dict = TicketCountsDetailedEntityEventChannelsInnerEventCategoriesInner.from_dict(ticket_counts_detailed_entity_event_channels_inner_event_categories_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


