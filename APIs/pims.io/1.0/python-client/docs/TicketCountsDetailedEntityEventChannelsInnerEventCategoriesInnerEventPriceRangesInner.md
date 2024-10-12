# TicketCountsDetailedEntityEventChannelsInnerEventCategoriesInnerEventPriceRangesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | Currency of the gross (&lt;a href&#x3D;&#39;https://en.wikipedia.org/wiki/ISO_4217#Active_codes&#39;&gt;ISO 4212 alphabetic code&lt;/a&gt;). | 
**gross** | **float** | Gross (&#x3D; income for the sold tickets for the current channel/category/price range, including VAT but excluding all commissions). | 
**id** | **int** | ID of the event price range. | 
**reservations** | **int** | Detailed ticket reservations (&#x3D; number of reserved tickets for the current channel/category/price range). *This field may be omitted according to the customer configuration.* | [optional] 
**sales** | **int** | Detailed ticket sales (&#x3D; number of sold tickets for the current channel/category/price range). | 

## Example

```python
from openapi_client.models.ticket_counts_detailed_entity_event_channels_inner_event_categories_inner_event_price_ranges_inner import TicketCountsDetailedEntityEventChannelsInnerEventCategoriesInnerEventPriceRangesInner

# TODO update the JSON string below
json = "{}"
# create an instance of TicketCountsDetailedEntityEventChannelsInnerEventCategoriesInnerEventPriceRangesInner from a JSON string
ticket_counts_detailed_entity_event_channels_inner_event_categories_inner_event_price_ranges_inner_instance = TicketCountsDetailedEntityEventChannelsInnerEventCategoriesInnerEventPriceRangesInner.from_json(json)
# print the JSON string representation of the object
print(TicketCountsDetailedEntityEventChannelsInnerEventCategoriesInnerEventPriceRangesInner.to_json())

# convert the object into a dict
ticket_counts_detailed_entity_event_channels_inner_event_categories_inner_event_price_ranges_inner_dict = ticket_counts_detailed_entity_event_channels_inner_event_categories_inner_event_price_ranges_inner_instance.to_dict()
# create an instance of TicketCountsDetailedEntityEventChannelsInnerEventCategoriesInnerEventPriceRangesInner from a dict
ticket_counts_detailed_entity_event_channels_inner_event_categories_inner_event_price_ranges_inner_from_dict = TicketCountsDetailedEntityEventChannelsInnerEventCategoriesInnerEventPriceRangesInner.from_dict(ticket_counts_detailed_entity_event_channels_inner_event_categories_inner_event_price_ranges_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


