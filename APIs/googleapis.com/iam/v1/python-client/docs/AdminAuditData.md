# AdminAuditData

Audit log information specific to Cloud IAM admin APIs. This message is serialized as an `Any` type in the `ServiceData` message of an `AuditLog` message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permission_delta** | [**PermissionDelta**](PermissionDelta.md) |  | [optional] 

## Example

```python
from openapi_client.models.admin_audit_data import AdminAuditData

# TODO update the JSON string below
json = "{}"
# create an instance of AdminAuditData from a JSON string
admin_audit_data_instance = AdminAuditData.from_json(json)
# print the JSON string representation of the object
print(AdminAuditData.to_json())

# convert the object into a dict
admin_audit_data_dict = admin_audit_data_instance.to_dict()
# create an instance of AdminAuditData from a dict
admin_audit_data_from_dict = AdminAuditData.from_dict(admin_audit_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


