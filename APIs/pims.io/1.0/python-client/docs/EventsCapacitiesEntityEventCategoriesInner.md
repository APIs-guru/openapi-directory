# EventsCapacitiesEntityEventCategoriesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comps** | **int** | Number of comps in the category. | 
**holds** | **int** | Number of *holds* in the category. &lt;span class&#x3D;\&quot;definition\&quot;&gt;Holds&lt;/span&gt; are seats/places that are not in sale at the date of the capacity, but will eventually be later. | 
**id** | **int** | Unique ID of the event category. | 
**kills** | **int** | Number of *kills* in the category. &lt;span class&#x3D;\&quot;definition\&quot;&gt;Kills&lt;/span&gt; are seats/places that will not be sold for technical reasons. | 
**sellable_capacity** | **int** | Number of sellable seats/places in the category. This is calculated by the formula: &#x60;total_capacity - kills - comps - holds&#x60;. | 
**total_capacity** | **int** | Total number of seats/places in the category. | 

## Example

```python
from openapi_client.models.events_capacities_entity_event_categories_inner import EventsCapacitiesEntityEventCategoriesInner

# TODO update the JSON string below
json = "{}"
# create an instance of EventsCapacitiesEntityEventCategoriesInner from a JSON string
events_capacities_entity_event_categories_inner_instance = EventsCapacitiesEntityEventCategoriesInner.from_json(json)
# print the JSON string representation of the object
print(EventsCapacitiesEntityEventCategoriesInner.to_json())

# convert the object into a dict
events_capacities_entity_event_categories_inner_dict = events_capacities_entity_event_categories_inner_instance.to_dict()
# create an instance of EventsCapacitiesEntityEventCategoriesInner from a dict
events_capacities_entity_event_categories_inner_from_dict = EventsCapacitiesEntityEventCategoriesInner.from_dict(events_capacities_entity_event_categories_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


