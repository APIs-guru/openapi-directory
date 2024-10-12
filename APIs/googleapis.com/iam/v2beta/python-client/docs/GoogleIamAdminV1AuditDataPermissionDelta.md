# GoogleIamAdminV1AuditDataPermissionDelta

A PermissionDelta message to record the added_permissions and removed_permissions inside a role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added_permissions** | **List[str]** | Added permissions. | [optional] 
**removed_permissions** | **List[str]** | Removed permissions. | [optional] 

## Example

```python
from openapi_client.models.google_iam_admin_v1_audit_data_permission_delta import GoogleIamAdminV1AuditDataPermissionDelta

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIamAdminV1AuditDataPermissionDelta from a JSON string
google_iam_admin_v1_audit_data_permission_delta_instance = GoogleIamAdminV1AuditDataPermissionDelta.from_json(json)
# print the JSON string representation of the object
print(GoogleIamAdminV1AuditDataPermissionDelta.to_json())

# convert the object into a dict
google_iam_admin_v1_audit_data_permission_delta_dict = google_iam_admin_v1_audit_data_permission_delta_instance.to_dict()
# create an instance of GoogleIamAdminV1AuditDataPermissionDelta from a dict
google_iam_admin_v1_audit_data_permission_delta_from_dict = GoogleIamAdminV1AuditDataPermissionDelta.from_dict(google_iam_admin_v1_audit_data_permission_delta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


