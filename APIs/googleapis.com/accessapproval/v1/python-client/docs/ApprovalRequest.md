# ApprovalRequest

A request for the customer to approve access to a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approve** | [**ApproveDecision**](ApproveDecision.md) |  | [optional] 
**dismiss** | [**DismissDecision**](DismissDecision.md) |  | [optional] 
**name** | **str** | The resource name of the request. Format is \&quot;{projects|folders|organizations}/{id}/approvalRequests/{approval_request}\&quot;. | [optional] 
**request_time** | **str** | The time at which approval was requested. | [optional] 
**requested_duration** | **str** | The requested access duration. | [optional] 
**requested_expiration** | **str** | The original requested expiration for the approval. Calculated by adding the requested_duration to the request_time. | [optional] 
**requested_locations** | [**AccessLocations**](AccessLocations.md) |  | [optional] 
**requested_reason** | [**AccessReason**](AccessReason.md) |  | [optional] 
**requested_resource_name** | **str** | The resource for which approval is being requested. The format of the resource name is defined at https://cloud.google.com/apis/design/resource_names. The resource name here may either be a \&quot;full\&quot; resource name (e.g. \&quot;//library.googleapis.com/shelves/shelf1/books/book2\&quot;) or a \&quot;relative\&quot; resource name (e.g. \&quot;shelves/shelf1/books/book2\&quot;) as described in the resource name specification. | [optional] 
**requested_resource_properties** | [**ResourceProperties**](ResourceProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.approval_request import ApprovalRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApprovalRequest from a JSON string
approval_request_instance = ApprovalRequest.from_json(json)
# print the JSON string representation of the object
print(ApprovalRequest.to_json())

# convert the object into a dict
approval_request_dict = approval_request_instance.to_dict()
# create an instance of ApprovalRequest from a dict
approval_request_from_dict = ApprovalRequest.from_dict(approval_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


