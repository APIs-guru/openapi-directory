# CloudAuditLoggingFeatureSpec

**Cloud Audit Logging**: Spec for Audit Logging Allowlisting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowlisted_service_accounts** | **List[str]** | Service account that should be allowlisted to send the audit logs; eg cloudauditlogging@gcp-project.iam.gserviceaccount.com. These accounts must already exist, but do not need to have any permissions granted to them. The customer&#39;s entitlements will be checked prior to allowlisting (i.e. the customer must be an Anthos customer.) | [optional] 

## Example

```python
from openapi_client.models.cloud_audit_logging_feature_spec import CloudAuditLoggingFeatureSpec

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAuditLoggingFeatureSpec from a JSON string
cloud_audit_logging_feature_spec_instance = CloudAuditLoggingFeatureSpec.from_json(json)
# print the JSON string representation of the object
print(CloudAuditLoggingFeatureSpec.to_json())

# convert the object into a dict
cloud_audit_logging_feature_spec_dict = cloud_audit_logging_feature_spec_instance.to_dict()
# create an instance of CloudAuditLoggingFeatureSpec from a dict
cloud_audit_logging_feature_spec_from_dict = CloudAuditLoggingFeatureSpec.from_dict(cloud_audit_logging_feature_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


