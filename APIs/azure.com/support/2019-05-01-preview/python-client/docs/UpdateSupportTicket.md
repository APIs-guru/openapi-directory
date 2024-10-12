# UpdateSupportTicket

Updates severity and contact details in the support ticket.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_details** | [**UpdateContactProfile**](UpdateContactProfile.md) |  | [optional] 
**severity** | **str** | Severity level | [optional] 

## Example

```python
from openapi_client.models.update_support_ticket import UpdateSupportTicket

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSupportTicket from a JSON string
update_support_ticket_instance = UpdateSupportTicket.from_json(json)
# print the JSON string representation of the object
print(UpdateSupportTicket.to_json())

# convert the object into a dict
update_support_ticket_dict = update_support_ticket_instance.to_dict()
# create an instance of UpdateSupportTicket from a dict
update_support_ticket_from_dict = UpdateSupportTicket.from_dict(update_support_ticket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


