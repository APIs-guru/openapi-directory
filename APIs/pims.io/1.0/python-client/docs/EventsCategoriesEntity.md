# EventsCategoriesEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | [**CategoriesEntity**](CategoriesEntity.md) |  | 
**event_price_ranges** | [**List[EventsCategoriesEntityEventPriceRangesInner]**](EventsCategoriesEntityEventPriceRangesInner.md) | Array of event price ranges. | [optional] 
**id** | **int** | Unique ID of the event category. | 
**ignored** | **bool** | Defines whether this event category is ignored or not. | 

## Example

```python
from openapi_client.models.events_categories_entity import EventsCategoriesEntity

# TODO update the JSON string below
json = "{}"
# create an instance of EventsCategoriesEntity from a JSON string
events_categories_entity_instance = EventsCategoriesEntity.from_json(json)
# print the JSON string representation of the object
print(EventsCategoriesEntity.to_json())

# convert the object into a dict
events_categories_entity_dict = events_categories_entity_instance.to_dict()
# create an instance of EventsCategoriesEntity from a dict
events_categories_entity_from_dict = EventsCategoriesEntity.from_dict(events_categories_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


