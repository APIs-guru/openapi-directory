# Ticket


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**closed_at** | **datetime** | Date-time when ticket was closed | [optional] 
**created_at** | **datetime** | Date time that ticket was created | [optional] 
**customer** | [**CustomerReference**](CustomerReference.md) |  | [optional] 
**description** | **str** | Trouble ticked brief description | [optional] 
**metadata** | [**List[Metadata]**](Metadata.md) |  | [optional] 
**priority** | **str** | Trouble ticket priority | [optional] 
**sla** | **datetime** | Date-time with a promisse for the customer when this ticket will be resolved | [optional] 
**status** | **str** | Trouble Ticket status. &#39;OPEN&#39;,&#39;CLOSED&#39;,&#39;REOPENED&#39; | [optional] 
**subject** | **str** | Short one line title describing ticket. | [optional] 
**ticket_id** | **str** | Trouble Ticket unique identification Id | [optional] 
**type** | **str** | Trouble ticket type. | [optional] 
**updated_at** | **datetime** | Date-time with last update of this ticket | [optional] 

## Example

```python
from openapi_client.models.ticket import Ticket

# TODO update the JSON string below
json = "{}"
# create an instance of Ticket from a JSON string
ticket_instance = Ticket.from_json(json)
# print the JSON string representation of the object
print(Ticket.to_json())

# convert the object into a dict
ticket_dict = ticket_instance.to_dict()
# create an instance of Ticket from a dict
ticket_from_dict = Ticket.from_dict(ticket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


