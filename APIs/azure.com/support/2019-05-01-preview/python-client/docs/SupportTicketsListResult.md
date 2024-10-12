# SupportTicketsListResult

Object that represents a collection of SupportTicket resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page of SupportTicket resources. | [optional] 
**value** | [**List[SupportTicketDetails]**](SupportTicketDetails.md) | List of SupportTicket resources. | [optional] 

## Example

```python
from openapi_client.models.support_tickets_list_result import SupportTicketsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SupportTicketsListResult from a JSON string
support_tickets_list_result_instance = SupportTicketsListResult.from_json(json)
# print the JSON string representation of the object
print(SupportTicketsListResult.to_json())

# convert the object into a dict
support_tickets_list_result_dict = support_tickets_list_result_instance.to_dict()
# create an instance of SupportTicketsListResult from a dict
support_tickets_list_result_from_dict = SupportTicketsListResult.from_dict(support_tickets_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


