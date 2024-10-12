# GetGroupLevelAuditLogsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**GetGroupLevelAuditLogsRequestFilters**](GetGroupLevelAuditLogsRequestFilters.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_group_level_audit_logs_request import GetGroupLevelAuditLogsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetGroupLevelAuditLogsRequest from a JSON string
get_group_level_audit_logs_request_instance = GetGroupLevelAuditLogsRequest.from_json(json)
# print the JSON string representation of the object
print(GetGroupLevelAuditLogsRequest.to_json())

# convert the object into a dict
get_group_level_audit_logs_request_dict = get_group_level_audit_logs_request_instance.to_dict()
# create an instance of GetGroupLevelAuditLogsRequest from a dict
get_group_level_audit_logs_request_from_dict = GetGroupLevelAuditLogsRequest.from_dict(get_group_level_audit_logs_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


