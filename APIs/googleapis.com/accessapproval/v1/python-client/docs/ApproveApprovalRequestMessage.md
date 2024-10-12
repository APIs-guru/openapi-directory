# ApproveApprovalRequestMessage

Request to approve an ApprovalRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expire_time** | **str** | The expiration time of this approval. | [optional] 

## Example

```python
from openapi_client.models.approve_approval_request_message import ApproveApprovalRequestMessage

# TODO update the JSON string below
json = "{}"
# create an instance of ApproveApprovalRequestMessage from a JSON string
approve_approval_request_message_instance = ApproveApprovalRequestMessage.from_json(json)
# print the JSON string representation of the object
print(ApproveApprovalRequestMessage.to_json())

# convert the object into a dict
approve_approval_request_message_dict = approve_approval_request_message_instance.to_dict()
# create an instance of ApproveApprovalRequestMessage from a dict
approve_approval_request_message_from_dict = ApproveApprovalRequestMessage.from_dict(approve_approval_request_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


