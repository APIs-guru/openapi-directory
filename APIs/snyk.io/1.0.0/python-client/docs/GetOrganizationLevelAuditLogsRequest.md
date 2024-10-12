# GetOrganizationLevelAuditLogsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**GetOrganizationLevelAuditLogsRequestFilters**](GetOrganizationLevelAuditLogsRequestFilters.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_organization_level_audit_logs_request import GetOrganizationLevelAuditLogsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationLevelAuditLogsRequest from a JSON string
get_organization_level_audit_logs_request_instance = GetOrganizationLevelAuditLogsRequest.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationLevelAuditLogsRequest.to_json())

# convert the object into a dict
get_organization_level_audit_logs_request_dict = get_organization_level_audit_logs_request_instance.to_dict()
# create an instance of GetOrganizationLevelAuditLogsRequest from a dict
get_organization_level_audit_logs_request_from_dict = GetOrganizationLevelAuditLogsRequest.from_dict(get_organization_level_audit_logs_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


