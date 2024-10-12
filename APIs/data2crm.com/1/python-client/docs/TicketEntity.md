# TicketEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **List[str]** | Category | [optional] 
**closed_at** | **datetime** | Closed At | [optional] 
**created_at** | **datetime** | Created At | [optional] 
**description** | **str** | Description | [optional] 
**due_at** | **datetime** | Due At | [optional] 
**email** | [**List[Email]**](Email.md) | Email | [optional] 
**id** | **str** | Ticket Identifier | [optional] 
**number** | **str** | Number | [optional] 
**pipeline_with_stage** | **str** | Pipeline With Stage | [optional] 
**priority** | **str** | Priority | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**resolution** | **str** | Resolution | [optional] 
**source** | **str** | Source | [optional] 
**subject** | **str** | Subject | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 

## Example

```python
from openapi_client.models.ticket_entity import TicketEntity

# TODO update the JSON string below
json = "{}"
# create an instance of TicketEntity from a JSON string
ticket_entity_instance = TicketEntity.from_json(json)
# print the JSON string representation of the object
print(TicketEntity.to_json())

# convert the object into a dict
ticket_entity_dict = ticket_entity_instance.to_dict()
# create an instance of TicketEntity from a dict
ticket_entity_from_dict = TicketEntity.from_dict(ticket_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


