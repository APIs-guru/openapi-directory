# TicketRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**TicketEntityRelation**](TicketEntityRelation.md) |  | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.ticket_relation import TicketRelation

# TODO update the JSON string below
json = "{}"
# create an instance of TicketRelation from a JSON string
ticket_relation_instance = TicketRelation.from_json(json)
# print the JSON string representation of the object
print(TicketRelation.to_json())

# convert the object into a dict
ticket_relation_dict = ticket_relation_instance.to_dict()
# create an instance of TicketRelation from a dict
ticket_relation_from_dict = TicketRelation.from_dict(ticket_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


