# EventsCapacitiesEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **date** | Date from which the capacity is active. | 
**event_categories** | [**List[EventsCapacitiesEntityEventCategoriesInner]**](EventsCapacitiesEntityEventCategoriesInner.md) | Array of categories with their detailed capacities. | [optional] 
**id** | **int** | Unique ID of the event capacity. | 

## Example

```python
from openapi_client.models.events_capacities_entity import EventsCapacitiesEntity

# TODO update the JSON string below
json = "{}"
# create an instance of EventsCapacitiesEntity from a JSON string
events_capacities_entity_instance = EventsCapacitiesEntity.from_json(json)
# print the JSON string representation of the object
print(EventsCapacitiesEntity.to_json())

# convert the object into a dict
events_capacities_entity_dict = events_capacities_entity_instance.to_dict()
# create an instance of EventsCapacitiesEntity from a dict
events_capacities_entity_from_dict = EventsCapacitiesEntity.from_dict(events_capacities_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


