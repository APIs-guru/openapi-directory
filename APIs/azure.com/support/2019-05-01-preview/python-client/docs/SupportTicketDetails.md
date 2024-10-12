# SupportTicketDetails

Object that represents SupportTicketDetails resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the resource | [optional] [readonly] 
**name** | **str** | Name of the resource | [optional] [readonly] 
**properties** | [**SupportTicketDetailsProperties**](SupportTicketDetailsProperties.md) |  | [optional] 
**type** | **str** | Type of the resource &#39;Microsoft.Support/supportTickets&#39; | [optional] [readonly] 

## Example

```python
from openapi_client.models.support_ticket_details import SupportTicketDetails

# TODO update the JSON string below
json = "{}"
# create an instance of SupportTicketDetails from a JSON string
support_ticket_details_instance = SupportTicketDetails.from_json(json)
# print the JSON string representation of the object
print(SupportTicketDetails.to_json())

# convert the object into a dict
support_ticket_details_dict = support_ticket_details_instance.to_dict()
# create an instance of SupportTicketDetails from a dict
support_ticket_details_from_dict = SupportTicketDetails.from_dict(support_ticket_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


