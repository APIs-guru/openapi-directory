# AccessApprovalServiceAccount

Access Approval service account related to a project/folder/organization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_email** | **str** | Email address of the service account. | [optional] 
**name** | **str** | The resource name of the Access Approval service account. Format is one of: * \&quot;projects/{project}/serviceAccount\&quot; * \&quot;folders/{folder}/serviceAccount\&quot; * \&quot;organizations/{organization}/serviceAccount\&quot; | [optional] 

## Example

```python
from openapi_client.models.access_approval_service_account import AccessApprovalServiceAccount

# TODO update the JSON string below
json = "{}"
# create an instance of AccessApprovalServiceAccount from a JSON string
access_approval_service_account_instance = AccessApprovalServiceAccount.from_json(json)
# print the JSON string representation of the object
print(AccessApprovalServiceAccount.to_json())

# convert the object into a dict
access_approval_service_account_dict = access_approval_service_account_instance.to_dict()
# create an instance of AccessApprovalServiceAccount from a dict
access_approval_service_account_from_dict = AccessApprovalServiceAccount.from_dict(access_approval_service_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


