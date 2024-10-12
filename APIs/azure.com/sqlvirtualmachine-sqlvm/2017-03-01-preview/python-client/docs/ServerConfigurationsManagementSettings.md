# ServerConfigurationsManagementSettings

Set the connectivity, storage and workload settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_features_server_configurations** | [**AdditionalFeaturesServerConfigurations**](AdditionalFeaturesServerConfigurations.md) |  | [optional] 
**sql_connectivity_update_settings** | [**SqlConnectivityUpdateSettings**](SqlConnectivityUpdateSettings.md) |  | [optional] 
**sql_storage_update_settings** | [**SqlStorageUpdateSettings**](SqlStorageUpdateSettings.md) |  | [optional] 
**sql_workload_type_update_settings** | [**SqlWorkloadTypeUpdateSettings**](SqlWorkloadTypeUpdateSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.server_configurations_management_settings import ServerConfigurationsManagementSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ServerConfigurationsManagementSettings from a JSON string
server_configurations_management_settings_instance = ServerConfigurationsManagementSettings.from_json(json)
# print the JSON string representation of the object
print(ServerConfigurationsManagementSettings.to_json())

# convert the object into a dict
server_configurations_management_settings_dict = server_configurations_management_settings_instance.to_dict()
# create an instance of ServerConfigurationsManagementSettings from a dict
server_configurations_management_settings_from_dict = ServerConfigurationsManagementSettings.from_dict(server_configurations_management_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


