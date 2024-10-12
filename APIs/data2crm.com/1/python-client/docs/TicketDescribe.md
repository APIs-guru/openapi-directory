# TicketDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.ticket_describe import TicketDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of TicketDescribe from a JSON string
ticket_describe_instance = TicketDescribe.from_json(json)
# print the JSON string representation of the object
print(TicketDescribe.to_json())

# convert the object into a dict
ticket_describe_dict = ticket_describe_instance.to_dict()
# create an instance of TicketDescribe from a dict
ticket_describe_from_dict = TicketDescribe.from_dict(ticket_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


