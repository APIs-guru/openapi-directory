# SupportTicket

Support ticket related to Access Approvals request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ticket_id** | **str** | Support ticket ID | [optional] 
**ticket_url** | **str** | Link to support ticket | [optional] 

## Example

```python
from openapi_client.models.support_ticket import SupportTicket

# TODO update the JSON string below
json = "{}"
# create an instance of SupportTicket from a JSON string
support_ticket_instance = SupportTicket.from_json(json)
# print the JSON string representation of the object
print(SupportTicket.to_json())

# convert the object into a dict
support_ticket_dict = support_ticket_instance.to_dict()
# create an instance of SupportTicket from a dict
support_ticket_from_dict = SupportTicket.from_dict(support_ticket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


