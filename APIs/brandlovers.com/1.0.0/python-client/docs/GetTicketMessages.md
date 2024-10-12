# GetTicketMessages


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | [**List[TicketMessage]**](TicketMessage.md) |  | [optional] 
**metadata** | [**List[Metadata]**](Metadata.md) |  | 

## Example

```python
from openapi_client.models.get_ticket_messages import GetTicketMessages

# TODO update the JSON string below
json = "{}"
# create an instance of GetTicketMessages from a JSON string
get_ticket_messages_instance = GetTicketMessages.from_json(json)
# print the JSON string representation of the object
print(GetTicketMessages.to_json())

# convert the object into a dict
get_ticket_messages_dict = get_ticket_messages_instance.to_dict()
# create an instance of GetTicketMessages from a dict
get_ticket_messages_from_dict = GetTicketMessages.from_dict(get_ticket_messages_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


