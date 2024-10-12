# OrgAuditLogsFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**GetOrganizationLevelAuditLogsRequestFilters**](GetOrganizationLevelAuditLogsRequestFilters.md) |  | [optional] 

## Example

```python
from openapi_client.models.org_audit_logs_filters import OrgAuditLogsFilters

# TODO update the JSON string below
json = "{}"
# create an instance of OrgAuditLogsFilters from a JSON string
org_audit_logs_filters_instance = OrgAuditLogsFilters.from_json(json)
# print the JSON string representation of the object
print(OrgAuditLogsFilters.to_json())

# convert the object into a dict
org_audit_logs_filters_dict = org_audit_logs_filters_instance.to_dict()
# create an instance of OrgAuditLogsFilters from a dict
org_audit_logs_filters_from_dict = OrgAuditLogsFilters.from_dict(org_audit_logs_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


