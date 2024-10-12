# ListInboundSsoAssignmentsResponse

Response of the InboundSsoAssignmentsService.ListInboundSsoAssignments method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inbound_sso_assignments** | [**List[InboundSsoAssignment]**](InboundSsoAssignment.md) | The assignments. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_inbound_sso_assignments_response import ListInboundSsoAssignmentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListInboundSsoAssignmentsResponse from a JSON string
list_inbound_sso_assignments_response_instance = ListInboundSsoAssignmentsResponse.from_json(json)
# print the JSON string representation of the object
print(ListInboundSsoAssignmentsResponse.to_json())

# convert the object into a dict
list_inbound_sso_assignments_response_dict = list_inbound_sso_assignments_response_instance.to_dict()
# create an instance of ListInboundSsoAssignmentsResponse from a dict
list_inbound_sso_assignments_response_from_dict = ListInboundSsoAssignmentsResponse.from_dict(list_inbound_sso_assignments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


