# CloudAuditOptions

Write a Cloud Audit log

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_logging_options** | [**AuthorizationLoggingOptions**](AuthorizationLoggingOptions.md) |  | [optional] 
**log_name** | **str** | The log_name to populate in the Cloud Audit Record. | [optional] 

## Example

```python
from openapi_client.models.cloud_audit_options import CloudAuditOptions

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAuditOptions from a JSON string
cloud_audit_options_instance = CloudAuditOptions.from_json(json)
# print the JSON string representation of the object
print(CloudAuditOptions.to_json())

# convert the object into a dict
cloud_audit_options_dict = cloud_audit_options_instance.to_dict()
# create an instance of CloudAuditOptions from a dict
cloud_audit_options_from_dict = CloudAuditOptions.from_dict(cloud_audit_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


