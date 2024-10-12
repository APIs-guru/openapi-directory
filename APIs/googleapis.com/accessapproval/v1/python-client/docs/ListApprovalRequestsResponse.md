# ListApprovalRequestsResponse

Response to listing of ApprovalRequest objects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_requests** | [**List[ApprovalRequest]**](ApprovalRequest.md) | Approval request details. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more. | [optional] 

## Example

```python
from openapi_client.models.list_approval_requests_response import ListApprovalRequestsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListApprovalRequestsResponse from a JSON string
list_approval_requests_response_instance = ListApprovalRequestsResponse.from_json(json)
# print the JSON string representation of the object
print(ListApprovalRequestsResponse.to_json())

# convert the object into a dict
list_approval_requests_response_dict = list_approval_requests_response_instance.to_dict()
# create an instance of ListApprovalRequestsResponse from a dict
list_approval_requests_response_from_dict = ListApprovalRequestsResponse.from_dict(list_approval_requests_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


