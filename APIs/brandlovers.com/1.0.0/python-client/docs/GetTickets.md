# GetTickets


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**List[Metadata]**](Metadata.md) |  | [optional] 
**tickets** | [**List[Ticket]**](Ticket.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_tickets import GetTickets

# TODO update the JSON string below
json = "{}"
# create an instance of GetTickets from a JSON string
get_tickets_instance = GetTickets.from_json(json)
# print the JSON string representation of the object
print(GetTickets.to_json())

# convert the object into a dict
get_tickets_dict = get_tickets_instance.to_dict()
# create an instance of GetTickets from a dict
get_tickets_from_dict = GetTickets.from_dict(get_tickets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


