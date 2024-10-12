# EventsCategoriesEntityEventPriceRangesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_price** | **float** | Base price of the event price range (i.e. including VAT but excluding all commissions). | 
**currency** | **str** | Currency of the prices. | 
**id** | **int** | ID of the event price range. | 
**ignored** | **bool** | Defines whether this event price range is ignored or not. | [optional] 
**price_range** | [**PriceRangesEntity**](PriceRangesEntity.md) |  | 
**public_price** | **float** | Public price of the event price range (i.e. including VAT and all commissions). | 

## Example

```python
from openapi_client.models.events_categories_entity_event_price_ranges_inner import EventsCategoriesEntityEventPriceRangesInner

# TODO update the JSON string below
json = "{}"
# create an instance of EventsCategoriesEntityEventPriceRangesInner from a JSON string
events_categories_entity_event_price_ranges_inner_instance = EventsCategoriesEntityEventPriceRangesInner.from_json(json)
# print the JSON string representation of the object
print(EventsCategoriesEntityEventPriceRangesInner.to_json())

# convert the object into a dict
events_categories_entity_event_price_ranges_inner_dict = events_categories_entity_event_price_ranges_inner_instance.to_dict()
# create an instance of EventsCategoriesEntityEventPriceRangesInner from a dict
events_categories_entity_event_price_ranges_inner_from_dict = EventsCategoriesEntityEventPriceRangesInner.from_dict(events_categories_entity_event_price_ranges_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


