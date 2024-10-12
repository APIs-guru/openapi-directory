# AuditData

Audit log information specific to Cloud IAM. This message is serialized as an `Any` type in the `ServiceData` message of an `AuditLog` message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_delta** | [**PolicyDelta**](PolicyDelta.md) |  | [optional] 

## Example

```python
from openapi_client.models.audit_data import AuditData

# TODO update the JSON string below
json = "{}"
# create an instance of AuditData from a JSON string
audit_data_instance = AuditData.from_json(json)
# print the JSON string representation of the object
print(AuditData.to_json())

# convert the object into a dict
audit_data_dict = audit_data_instance.to_dict()
# create an instance of AuditData from a dict
audit_data_from_dict = AuditData.from_dict(audit_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


