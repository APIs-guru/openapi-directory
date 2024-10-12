# AccessApproval

Alert that is triggered when Google support requests to access customer data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**justification_reason** | **List[str]** | Justification for data access based on justification enums. | [optional] 
**office_location** | **str** | Office location of Google staff requesting access such as \&quot;US\&quot;. | [optional] 
**products** | **List[str]** | Products within scope of the Access Approvals request. | [optional] 
**request_id** | **str** | ID of the Access Approvals request. This is a helpful field when requesting support from Google. | [optional] 
**scope** | **str** | Scope of access, also known as a resource. This is further narrowed down by the product field. | [optional] 
**tickets** | [**List[SupportTicket]**](SupportTicket.md) | Support tickets related to this Access Approvals request. Populated if there is an associated case number. | [optional] 

## Example

```python
from openapi_client.models.access_approval import AccessApproval

# TODO update the JSON string below
json = "{}"
# create an instance of AccessApproval from a JSON string
access_approval_instance = AccessApproval.from_json(json)
# print the JSON string representation of the object
print(AccessApproval.to_json())

# convert the object into a dict
access_approval_dict = access_approval_instance.to_dict()
# create an instance of AccessApproval from a dict
access_approval_from_dict = AccessApproval.from_dict(access_approval_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


