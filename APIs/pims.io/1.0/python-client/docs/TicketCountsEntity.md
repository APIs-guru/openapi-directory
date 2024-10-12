# TicketCountsEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved** | **bool** | Defines whether this ticket count is approved or not. | 
**comment** | **str** | Comment for the ticket count. | 
**currency** | **str** | Currency of the gross (&lt;a href&#x3D;&#39;https://en.wikipedia.org/wiki/ISO_4217#Active_codes&#39;&gt;ISO 4212 alphabetic code&lt;/a&gt;). | [optional] 
**var_date** | **date** | Date of the ticket count. | 
**final** | **bool** | Whether this ticket count is the last and final one of its event or not. If it is, it means that no further ticket counts will be added for the event it belongs to. | 
**gross** | **float** | Gross (&#x3D; income for the sold tickets, including VAT but excluding all commissions). | [optional] 
**id** | **int** | Unique ID of the ticket count. | 
**reservations** | **int** | Ticket reservations (&#x3D; number of reserved tickets). *This field may be omitted according to the customer configuration.* | [optional] 
**sales** | **int** | Ticket sales (&#x3D; number of sold tickets). | 

## Example

```python
from openapi_client.models.ticket_counts_entity import TicketCountsEntity

# TODO update the JSON string below
json = "{}"
# create an instance of TicketCountsEntity from a JSON string
ticket_counts_entity_instance = TicketCountsEntity.from_json(json)
# print the JSON string representation of the object
print(TicketCountsEntity.to_json())

# convert the object into a dict
ticket_counts_entity_dict = ticket_counts_entity_instance.to_dict()
# create an instance of TicketCountsEntity from a dict
ticket_counts_entity_from_dict = TicketCountsEntity.from_dict(ticket_counts_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


