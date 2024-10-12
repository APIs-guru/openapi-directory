# TicketRestrictions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**other_restrictions** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**route_restrictions** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**route_restrictions_details** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**time_restrictions** | [**LocalizedString**](LocalizedString.md) |  | [optional] 

## Example

```python
from openapi_client.models.ticket_restrictions import TicketRestrictions

# TODO update the JSON string below
json = "{}"
# create an instance of TicketRestrictions from a JSON string
ticket_restrictions_instance = TicketRestrictions.from_json(json)
# print the JSON string representation of the object
print(TicketRestrictions.to_json())

# convert the object into a dict
ticket_restrictions_dict = ticket_restrictions_instance.to_dict()
# create an instance of TicketRestrictions from a dict
ticket_restrictions_from_dict = TicketRestrictions.from_dict(ticket_restrictions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


