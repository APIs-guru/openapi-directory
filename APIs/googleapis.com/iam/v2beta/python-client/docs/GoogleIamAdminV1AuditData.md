# GoogleIamAdminV1AuditData

Audit log information specific to Cloud IAM admin APIs. This message is serialized as an `Any` type in the `ServiceData` message of an `AuditLog` message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permission_delta** | [**GoogleIamAdminV1AuditDataPermissionDelta**](GoogleIamAdminV1AuditDataPermissionDelta.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_iam_admin_v1_audit_data import GoogleIamAdminV1AuditData

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIamAdminV1AuditData from a JSON string
google_iam_admin_v1_audit_data_instance = GoogleIamAdminV1AuditData.from_json(json)
# print the JSON string representation of the object
print(GoogleIamAdminV1AuditData.to_json())

# convert the object into a dict
google_iam_admin_v1_audit_data_dict = google_iam_admin_v1_audit_data_instance.to_dict()
# create an instance of GoogleIamAdminV1AuditData from a dict
google_iam_admin_v1_audit_data_from_dict = GoogleIamAdminV1AuditData.from_dict(google_iam_admin_v1_audit_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


