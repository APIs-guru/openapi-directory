# GoogleIamV1LoggingAuditData

Audit log information specific to Cloud IAM. This message is serialized as an `Any` type in the `ServiceData` message of an `AuditLog` message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_delta** | [**GoogleIamV1PolicyDelta**](GoogleIamV1PolicyDelta.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_iam_v1_logging_audit_data import GoogleIamV1LoggingAuditData

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIamV1LoggingAuditData from a JSON string
google_iam_v1_logging_audit_data_instance = GoogleIamV1LoggingAuditData.from_json(json)
# print the JSON string representation of the object
print(GoogleIamV1LoggingAuditData.to_json())

# convert the object into a dict
google_iam_v1_logging_audit_data_dict = google_iam_v1_logging_audit_data_instance.to_dict()
# create an instance of GoogleIamV1LoggingAuditData from a dict
google_iam_v1_logging_audit_data_from_dict = GoogleIamV1LoggingAuditData.from_dict(google_iam_v1_logging_audit_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


