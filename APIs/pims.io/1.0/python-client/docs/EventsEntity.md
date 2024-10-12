# EventsEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**break_even** | **int** | Value of the break-even for the event. | [optional] 
**cancellation_date** | **date** | Date the event was canceled. | [optional] 
**contract** | [**EventsEntityContract**](EventsEntityContract.md) |  | 
**costing_capacity** | **int** | Costing capacity of the event. | [optional] 
**creation_timestamp** | **int** | Timestamp for when the venue was created in the customer&#39;s database. | 
**currency** | **str** | Currency of the prices. | [optional] 
**datetime** | **str** | Datetime of the event (relative to the timezone of the venue). | 
**free** | **bool** | Whether this event is free or not. | 
**general_sales_date** | **date** | Date the event went on general sales (relative to the timezone of the venue). | [optional] 
**id** | **int** | Unique ID of the event. | 
**input_type** | [**EventsEntityInputType**](EventsEntityInputType.md) |  | 
**label** | **str** | Label of the event. | 
**last_update_timestamp** | **int** | Timestamp for when the venue was last updated in the customer&#39;s database. | 
**max_capacity** | **int** | Maximum capacity for the venue in which the event occurs. | [optional] 
**presales_date** | **date** | Date the event went on presales (relative to the timezone of the venue). | [optional] 
**series_id** | **int** | ID of the series the event belongs to. | 
**sold_out_date** | **date** | Date the event was sold out. | [optional] 
**venue** | [**VenuesEntity**](VenuesEntity.md) |  | 

## Example

```python
from openapi_client.models.events_entity import EventsEntity

# TODO update the JSON string below
json = "{}"
# create an instance of EventsEntity from a JSON string
events_entity_instance = EventsEntity.from_json(json)
# print the JSON string representation of the object
print(EventsEntity.to_json())

# convert the object into a dict
events_entity_dict = events_entity_instance.to_dict()
# create an instance of EventsEntity from a dict
events_entity_from_dict = EventsEntity.from_dict(events_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


