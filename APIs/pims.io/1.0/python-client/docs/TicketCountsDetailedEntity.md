# TicketCountsDetailedEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved** | **bool** | Defines whether this ticket count is approved or not. | 
**comment** | **str** | Comment for the ticket count. | 
**var_date** | **date** | Date of the ticket count. | 
**event_channels** | [**List[TicketCountsDetailedEntityEventChannelsInner]**](TicketCountsDetailedEntityEventChannelsInner.md) | Array of event channels where the sales were made. | [optional] 
**final** | **bool** | Whether this ticket count is the last and final one of its event or not. If it is, it means that no further ticket counts will be added for the event it belongs to. | 
**id** | **int** | Unique ID of the ticket count. | 

## Example

```python
from openapi_client.models.ticket_counts_detailed_entity import TicketCountsDetailedEntity

# TODO update the JSON string below
json = "{}"
# create an instance of TicketCountsDetailedEntity from a JSON string
ticket_counts_detailed_entity_instance = TicketCountsDetailedEntity.from_json(json)
# print the JSON string representation of the object
print(TicketCountsDetailedEntity.to_json())

# convert the object into a dict
ticket_counts_detailed_entity_dict = ticket_counts_detailed_entity_instance.to_dict()
# create an instance of TicketCountsDetailedEntity from a dict
ticket_counts_detailed_entity_from_dict = TicketCountsDetailedEntity.from_dict(ticket_counts_detailed_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


