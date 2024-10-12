# GroupsAuditLogsFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**GetGroupLevelAuditLogsRequestFilters**](GetGroupLevelAuditLogsRequestFilters.md) |  | [optional] 

## Example

```python
from openapi_client.models.groups_audit_logs_filters import GroupsAuditLogsFilters

# TODO update the JSON string below
json = "{}"
# create an instance of GroupsAuditLogsFilters from a JSON string
groups_audit_logs_filters_instance = GroupsAuditLogsFilters.from_json(json)
# print the JSON string representation of the object
print(GroupsAuditLogsFilters.to_json())

# convert the object into a dict
groups_audit_logs_filters_dict = groups_audit_logs_filters_instance.to_dict()
# create an instance of GroupsAuditLogsFilters from a dict
groups_audit_logs_filters_from_dict = GroupsAuditLogsFilters.from_dict(groups_audit_logs_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


