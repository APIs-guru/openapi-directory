# TenantConfigurationGetSyncState200Response

Tenant Configuration Synchronization State.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch** | **str** | The name of Git branch. | [optional] 
**commit_id** | **str** | The latest commit Id. | [optional] 
**configuration_change_date** | **datetime** | The date of the latest configuration change. The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard.  | [optional] 
**is_export** | **bool** | value indicating if last sync was save (true) or deploy (false) operation. | [optional] 
**is_git_enabled** | **bool** | value indicating whether Git configuration access is enabled. | [optional] 
**is_synced** | **bool** | value indicating if last synchronization was later than the configuration change. | [optional] 
**sync_date** | **datetime** | The date of the latest synchronization. The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard.  | [optional] 

## Example

```python
from openapi_client.models.tenant_configuration_get_sync_state200_response import TenantConfigurationGetSyncState200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TenantConfigurationGetSyncState200Response from a JSON string
tenant_configuration_get_sync_state200_response_instance = TenantConfigurationGetSyncState200Response.from_json(json)
# print the JSON string representation of the object
print(TenantConfigurationGetSyncState200Response.to_json())

# convert the object into a dict
tenant_configuration_get_sync_state200_response_dict = tenant_configuration_get_sync_state200_response_instance.to_dict()
# create an instance of TenantConfigurationGetSyncState200Response from a dict
tenant_configuration_get_sync_state200_response_from_dict = TenantConfigurationGetSyncState200Response.from_dict(tenant_configuration_get_sync_state200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


