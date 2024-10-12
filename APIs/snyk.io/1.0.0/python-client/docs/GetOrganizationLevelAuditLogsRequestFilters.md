# GetOrganizationLevelAuditLogsRequestFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | User email address. Will fetch only audit logs originated from this user&#39;s actions. Ignored if the userId filter is set. | [optional] 
**event** | **str** | Will return only logs for this specific event. Only one of event and excludeEvent may be specified in a request. | [optional] 
**exclude_event** | **str** | Will return logs except logs for this event. Only one of event and excludeEvent may be specified in a request. | [optional] 
**project_id** | **str** | Will return only logs for this specific project. | [optional] 
**user_id** | **str** | User public ID. Will fetch only audit logs originated from this user&#39;s actions. | [optional] 

## Example

```python
from openapi_client.models.get_organization_level_audit_logs_request_filters import GetOrganizationLevelAuditLogsRequestFilters

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationLevelAuditLogsRequestFilters from a JSON string
get_organization_level_audit_logs_request_filters_instance = GetOrganizationLevelAuditLogsRequestFilters.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationLevelAuditLogsRequestFilters.to_json())

# convert the object into a dict
get_organization_level_audit_logs_request_filters_dict = get_organization_level_audit_logs_request_filters_instance.to_dict()
# create an instance of GetOrganizationLevelAuditLogsRequestFilters from a dict
get_organization_level_audit_logs_request_filters_from_dict = GetOrganizationLevelAuditLogsRequestFilters.from_dict(get_organization_level_audit_logs_request_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


