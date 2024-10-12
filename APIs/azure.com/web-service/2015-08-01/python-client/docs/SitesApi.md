# openapi_client.SitesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sites_add_site_premier_add_on**](SitesApi.md#sites_add_site_premier_add_on) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/premieraddons/{premierAddOnName} | 
[**sites_add_site_premier_add_on_slot**](SitesApi.md#sites_add_site_premier_add_on_slot) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/premieraddons/{premierAddOnName} | 
[**sites_apply_slot_config_slot**](SitesApi.md#sites_apply_slot_config_slot) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/applySlotConfig | Applies the configuration settings from the target slot onto the current slot
[**sites_apply_slot_config_to_production**](SitesApi.md#sites_apply_slot_config_to_production) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/applySlotConfig | Applies the configuration settings from the target slot onto the current slot
[**sites_backup_site**](SitesApi.md#sites_backup_site) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/backup | Creates web app backup
[**sites_backup_site_slot**](SitesApi.md#sites_backup_site_slot) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/backup | Creates web app backup
[**sites_create_deployment**](SitesApi.md#sites_create_deployment) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/deployments/{id} | Create a deployment
[**sites_create_deployment_slot**](SitesApi.md#sites_create_deployment_slot) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/deployments/{id} | Create a deployment
[**sites_create_instance_deployment**](SitesApi.md#sites_create_instance_deployment) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/instances/{instanceId}/deployments/{id} | Create a deployment
[**sites_create_instance_deployment_slot**](SitesApi.md#sites_create_instance_deployment_slot) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/instances/{instanceId}/deployments/{id} | Create a deployment
[**sites_create_or_update_site**](SitesApi.md#sites_create_or_update_site) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name} | Creates a new web app or modifies an existing web app.
[**sites_create_or_update_site_config**](SitesApi.md#sites_create_or_update_site_config) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/web | Update the configuration of web app
[**sites_create_or_update_site_config_slot**](SitesApi.md#sites_create_or_update_site_config_slot) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/web | Update the configuration of web app
[**sites_create_or_update_site_host_name_binding**](SitesApi.md#sites_create_or_update_site_host_name_binding) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/hostNameBindings/{hostName} | Creates a web app hostname binding
[**sites_create_or_update_site_host_name_binding_slot**](SitesApi.md#sites_create_or_update_site_host_name_binding_slot) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/hostNameBindings/{hostName} | Creates a web app hostname binding
[**sites_create_or_update_site_relay_service_connection**](SitesApi.md#sites_create_or_update_site_relay_service_connection) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/hybridconnection/{entityName} | Creates a new association to a BizTalk Hybrid Connection, or updates an existing one.
[**sites_create_or_update_site_relay_service_connection_slot**](SitesApi.md#sites_create_or_update_site_relay_service_connection_slot) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/hybridconnection/{entityName} | Creates a new association to a BizTalk Hybrid Connection, or updates an existing one.
[**sites_create_or_update_site_slot**](SitesApi.md#sites_create_or_update_site_slot) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot} | Creates a new web app or modifies an existing web app.
[**sites_create_or_update_site_source_control**](SitesApi.md#sites_create_or_update_site_source_control) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/sourcecontrols/web | Update the source control configuration of web app
[**sites_create_or_update_site_source_control_slot**](SitesApi.md#sites_create_or_update_site_source_control_slot) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/sourcecontrols/web | Update the source control configuration of web app
[**sites_create_or_update_site_vnet_connection**](SitesApi.md#sites_create_or_update_site_vnet_connection) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/virtualNetworkConnections/{vnetName} | Adds a Virtual Network Connection or updates it&#39;s properties.
[**sites_create_or_update_site_vnet_connection_gateway**](SitesApi.md#sites_create_or_update_site_vnet_connection_gateway) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/virtualNetworkConnections/{vnetName}/gateways/{gatewayName} | Updates the Virtual Network Gateway.
[**sites_create_or_update_site_vnet_connection_gateway_slot**](SitesApi.md#sites_create_or_update_site_vnet_connection_gateway_slot) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/virtualNetworkConnections/{vnetName}/gateways/{gatewayName} | Updates the Virtual Network Gateway.
[**sites_create_or_update_site_vnet_connection_slot**](SitesApi.md#sites_create_or_update_site_vnet_connection_slot) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/virtualNetworkConnections/{vnetName} | Adds a Virtual Network Connection or updates it&#39;s properties.
[**sites_delete_backup**](SitesApi.md#sites_delete_backup) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/backups/{backupId} | Deletes a backup from Azure Storage
[**sites_delete_backup_slot**](SitesApi.md#sites_delete_backup_slot) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/backups/{backupId} | Deletes a backup from Azure Storage
[**sites_delete_deployment**](SitesApi.md#sites_delete_deployment) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/deployments/{id} | Delete the deployment
[**sites_delete_deployment_slot**](SitesApi.md#sites_delete_deployment_slot) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/deployments/{id} | Delete the deployment
[**sites_delete_instance_deployment**](SitesApi.md#sites_delete_instance_deployment) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/instances/{instanceId}/deployments/{id} | Delete the deployment
[**sites_delete_instance_deployment_slot**](SitesApi.md#sites_delete_instance_deployment_slot) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/instances/{instanceId}/deployments/{id} | Delete the deployment
[**sites_delete_site**](SitesApi.md#sites_delete_site) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name} | Deletes a web app
[**sites_delete_site_host_name_binding**](SitesApi.md#sites_delete_site_host_name_binding) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/hostNameBindings/{hostName} | Deletes a host name binding
[**sites_delete_site_host_name_binding_slot**](SitesApi.md#sites_delete_site_host_name_binding_slot) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/hostNameBindings/{hostName} | Deletes a host name binding
[**sites_delete_site_premier_add_on**](SitesApi.md#sites_delete_site_premier_add_on) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/premieraddons/{premierAddOnName} | 
[**sites_delete_site_premier_add_on_slot**](SitesApi.md#sites_delete_site_premier_add_on_slot) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/premieraddons/{premierAddOnName} | 
[**sites_delete_site_relay_service_connection**](SitesApi.md#sites_delete_site_relay_service_connection) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/hybridconnection/{entityName} | Removes the association to a BizTalk Hybrid Connection, identified by its entity name.
[**sites_delete_site_relay_service_connection_slot**](SitesApi.md#sites_delete_site_relay_service_connection_slot) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/hybridconnection/{entityName} | Removes the association to a BizTalk Hybrid Connection, identified by its entity name.
[**sites_delete_site_slot**](SitesApi.md#sites_delete_site_slot) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot} | Deletes a web app
[**sites_delete_site_source_control**](SitesApi.md#sites_delete_site_source_control) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/sourcecontrols/web | Delete source control configuration of web app
[**sites_delete_site_source_control_slot**](SitesApi.md#sites_delete_site_source_control_slot) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/sourcecontrols/web | Delete source control configuration of web app
[**sites_delete_site_vnet_connection**](SitesApi.md#sites_delete_site_vnet_connection) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/virtualNetworkConnections/{vnetName} | Removes the specified Virtual Network Connection association from this web app.
[**sites_delete_site_vnet_connection_slot**](SitesApi.md#sites_delete_site_vnet_connection_slot) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/virtualNetworkConnections/{vnetName} | Removes the specified Virtual Network Connection association from this web app.
[**sites_discover_site_restore**](SitesApi.md#sites_discover_site_restore) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/backups/discover | Discovers existing web app backups that can be restored
[**sites_discover_site_restore_slot**](SitesApi.md#sites_discover_site_restore_slot) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/backups/discover | Discovers existing web app backups that can be restored
[**sites_generate_new_site_publishing_password**](SitesApi.md#sites_generate_new_site_publishing_password) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/newpassword | Generates new random app publishing password
[**sites_generate_new_site_publishing_password_slot**](SitesApi.md#sites_generate_new_site_publishing_password_slot) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/newpassword | Generates new random app publishing password
[**sites_get_deleted_sites**](SitesApi.md#sites_get_deleted_sites) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/deletedSites | Gets deleted web apps in subscription
[**sites_get_deployment**](SitesApi.md#sites_get_deployment) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/deployments/{id} | Get the deployment
[**sites_get_deployment_slot**](SitesApi.md#sites_get_deployment_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/deployments/{id} | Get the deployment
[**sites_get_deployments**](SitesApi.md#sites_get_deployments) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/deployments | List deployments
[**sites_get_deployments_slot**](SitesApi.md#sites_get_deployments_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/deployments | List deployments
[**sites_get_instance_deployment**](SitesApi.md#sites_get_instance_deployment) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/instances/{instanceId}/deployments/{id} | Get the deployment
[**sites_get_instance_deployment_slot**](SitesApi.md#sites_get_instance_deployment_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/instances/{instanceId}/deployments/{id} | Get the deployment
[**sites_get_instance_deployments**](SitesApi.md#sites_get_instance_deployments) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/instances/{instanceId}/deployments | List deployments
[**sites_get_instance_deployments_slot**](SitesApi.md#sites_get_instance_deployments_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/instances/{instanceId}/deployments | List deployments
[**sites_get_site**](SitesApi.md#sites_get_site) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name} | Get details of a web app
[**sites_get_site_backup_configuration**](SitesApi.md#sites_get_site_backup_configuration) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/backup/list | Gets the backup configuration for a web app
[**sites_get_site_backup_configuration_slot**](SitesApi.md#sites_get_site_backup_configuration_slot) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/backup/list | Gets the backup configuration for a web app
[**sites_get_site_backup_status**](SitesApi.md#sites_get_site_backup_status) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/backups/{backupId} | Gets status of a web app backup that may be in progress.
[**sites_get_site_backup_status_secrets**](SitesApi.md#sites_get_site_backup_status_secrets) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/backups/{backupId}/list | Gets status of a web app backup that may be in progress, including secrets associated with the backup, such as the Azure Storage SAS URL. Also can be used to update the SAS URL for the backup if a new URL is passed in the request body.
[**sites_get_site_backup_status_secrets_slot**](SitesApi.md#sites_get_site_backup_status_secrets_slot) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/backups/{backupId}/list | Gets status of a web app backup that may be in progress, including secrets associated with the backup, such as the Azure Storage SAS URL. Also can be used to update the SAS URL for the backup if a new URL is passed in the request body.
[**sites_get_site_backup_status_slot**](SitesApi.md#sites_get_site_backup_status_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/backups/{backupId} | Gets status of a web app backup that may be in progress.
[**sites_get_site_config**](SitesApi.md#sites_get_site_config) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/web | Gets the configuration of the web app
[**sites_get_site_config_slot**](SitesApi.md#sites_get_site_config_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/web | Gets the configuration of the web app
[**sites_get_site_host_name_binding**](SitesApi.md#sites_get_site_host_name_binding) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/hostNameBindings/{hostName} | Get web app binding for a hostname
[**sites_get_site_host_name_binding_slot**](SitesApi.md#sites_get_site_host_name_binding_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/hostNameBindings/{hostName} | Get web app binding for a hostname
[**sites_get_site_host_name_bindings**](SitesApi.md#sites_get_site_host_name_bindings) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/hostNameBindings | Get web app hostname bindings
[**sites_get_site_host_name_bindings_slot**](SitesApi.md#sites_get_site_host_name_bindings_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/hostNameBindings | Get web app hostname bindings
[**sites_get_site_instance_identifiers**](SitesApi.md#sites_get_site_instance_identifiers) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/instances | Gets all instance of a web app
[**sites_get_site_instance_identifiers_slot**](SitesApi.md#sites_get_site_instance_identifiers_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/instances | Gets all instance of a web app
[**sites_get_site_logs_config**](SitesApi.md#sites_get_site_logs_config) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/logs | Gets the web app logs configuration
[**sites_get_site_logs_config_slot**](SitesApi.md#sites_get_site_logs_config_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/logs | Gets the web app logs configuration
[**sites_get_site_metric_definitions**](SitesApi.md#sites_get_site_metric_definitions) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/metricdefinitions | Gets metric definitions for web app
[**sites_get_site_metric_definitions_slot**](SitesApi.md#sites_get_site_metric_definitions_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/metricdefinitions | Gets metric definitions for web app
[**sites_get_site_metrics**](SitesApi.md#sites_get_site_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/metrics | Gets metrics for web app
[**sites_get_site_metrics_slot**](SitesApi.md#sites_get_site_metrics_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/metrics | Gets metrics for web app
[**sites_get_site_network_features**](SitesApi.md#sites_get_site_network_features) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/networkFeatures/{view} | Retrieves a view of all network features in use on this web app.
[**sites_get_site_network_features_slot**](SitesApi.md#sites_get_site_network_features_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/networkFeatures/{view} | Retrieves a view of all network features in use on this web app.
[**sites_get_site_operation**](SitesApi.md#sites_get_site_operation) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/operationresults/{operationId} | Gets the operation for a web app
[**sites_get_site_operation_slot**](SitesApi.md#sites_get_site_operation_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/operationresults/{operationId} | Gets the operation for a web app
[**sites_get_site_premier_add_on**](SitesApi.md#sites_get_site_premier_add_on) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/premieraddons/{premierAddOnName} | 
[**sites_get_site_premier_add_on_slot**](SitesApi.md#sites_get_site_premier_add_on_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/premieraddons/{premierAddOnName} | 
[**sites_get_site_relay_service_connection**](SitesApi.md#sites_get_site_relay_service_connection) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/hybridconnection/{entityName} | Retrieves a BizTalk Hybrid Connection identified by its entity name.
[**sites_get_site_relay_service_connection_slot**](SitesApi.md#sites_get_site_relay_service_connection_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/hybridconnection/{entityName} | Retrieves a BizTalk Hybrid Connection identified by its entity name.
[**sites_get_site_slot**](SitesApi.md#sites_get_site_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot} | Get details of a web app
[**sites_get_site_slots**](SitesApi.md#sites_get_site_slots) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots | Gets all the slots for a web apps
[**sites_get_site_snapshots**](SitesApi.md#sites_get_site_snapshots) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/snapshots | Returns all Snapshots to the user.
[**sites_get_site_snapshots_slot**](SitesApi.md#sites_get_site_snapshots_slot) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/snapshots | Returns all Snapshots to the user.
[**sites_get_site_source_control**](SitesApi.md#sites_get_site_source_control) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/sourcecontrols/web | Get the source control configuration of web app
[**sites_get_site_source_control_slot**](SitesApi.md#sites_get_site_source_control_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/sourcecontrols/web | Get the source control configuration of web app
[**sites_get_site_usages**](SitesApi.md#sites_get_site_usages) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/usages | Gets the quota usage numbers for web app
[**sites_get_site_usages_slot**](SitesApi.md#sites_get_site_usages_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/usages | Gets the quota usage numbers for web app
[**sites_get_site_vnet_connection**](SitesApi.md#sites_get_site_vnet_connection) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/virtualNetworkConnections/{vnetName} | Retrieves a specific Virtual Network Connection associated with this web app.
[**sites_get_site_vnet_connection_slot**](SitesApi.md#sites_get_site_vnet_connection_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/virtualNetworkConnections/{vnetName} | Retrieves a specific Virtual Network Connection associated with this web app.
[**sites_get_site_vnet_connections**](SitesApi.md#sites_get_site_vnet_connections) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/virtualNetworkConnections | Retrieves a list of all Virtual Network Connections associated with this web app.
[**sites_get_site_vnet_connections_slot**](SitesApi.md#sites_get_site_vnet_connections_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/virtualNetworkConnections | Retrieves a list of all Virtual Network Connections associated with this web app.
[**sites_get_site_vnet_gateway**](SitesApi.md#sites_get_site_vnet_gateway) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/virtualNetworkConnections/{vnetName}/gateways/{gatewayName} | Retrieves a Virtual Network connection gateway associated with this web app and virtual network.
[**sites_get_site_vnet_gateway_slot**](SitesApi.md#sites_get_site_vnet_gateway_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/virtualNetworkConnections/{vnetName}/gateways/{gatewayName} | Retrieves a Virtual Network connection gateway associated with this web app and virtual network.
[**sites_get_sites**](SitesApi.md#sites_get_sites) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites | Gets the web apps for a subscription in the specified resource group
[**sites_get_slot_config_names**](SitesApi.md#sites_get_slot_config_names) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/slotConfigNames | Gets the names of application settings and connection string that remain with the slot during swap operation
[**sites_get_slots_differences_from_production**](SitesApi.md#sites_get_slots_differences_from_production) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slotsdiffs | Get the difference in configuration settings between two web app slots
[**sites_get_slots_differences_slot**](SitesApi.md#sites_get_slots_differences_slot) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/slotsdiffs | Get the difference in configuration settings between two web app slots
[**sites_is_site_cloneable**](SitesApi.md#sites_is_site_cloneable) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/iscloneable | Creates a new web app or modifies an existing web app.
[**sites_is_site_cloneable_slot**](SitesApi.md#sites_is_site_cloneable_slot) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/iscloneable | Creates a new web app or modifies an existing web app.
[**sites_list_site_app_settings**](SitesApi.md#sites_list_site_app_settings) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/appsettings/list | Gets the application settings of web app
[**sites_list_site_app_settings_slot**](SitesApi.md#sites_list_site_app_settings_slot) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/appsettings/list | Gets the application settings of web app
[**sites_list_site_auth_settings**](SitesApi.md#sites_list_site_auth_settings) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/authsettings/list | Gets the Authentication / Authorization settings associated with web app
[**sites_list_site_auth_settings_slot**](SitesApi.md#sites_list_site_auth_settings_slot) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/authsettings/list | Gets the Authentication / Authorization settings associated with web app
[**sites_list_site_backups**](SitesApi.md#sites_list_site_backups) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/backups | Lists all available backups for web app
[**sites_list_site_backups_slot**](SitesApi.md#sites_list_site_backups_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/backups | Lists all available backups for web app
[**sites_list_site_connection_strings**](SitesApi.md#sites_list_site_connection_strings) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/connectionstrings/list | Gets the connection strings associated with web app
[**sites_list_site_connection_strings_slot**](SitesApi.md#sites_list_site_connection_strings_slot) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/connectionstrings/list | Gets the connection strings associated with web app
[**sites_list_site_metadata**](SitesApi.md#sites_list_site_metadata) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/metadata/list | Gets the web app meta data.
[**sites_list_site_metadata_slot**](SitesApi.md#sites_list_site_metadata_slot) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/metadata/list | Gets the web app meta data.
[**sites_list_site_premier_add_ons**](SitesApi.md#sites_list_site_premier_add_ons) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/premieraddons | 
[**sites_list_site_premier_add_ons_slot**](SitesApi.md#sites_list_site_premier_add_ons_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/premieraddons | 
[**sites_list_site_publishing_credentials**](SitesApi.md#sites_list_site_publishing_credentials) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/publishingcredentials/list | Gets the web app publishing credentials
[**sites_list_site_publishing_credentials_slot**](SitesApi.md#sites_list_site_publishing_credentials_slot) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/publishingcredentials/list | Gets the web app publishing credentials
[**sites_list_site_publishing_profile_xml**](SitesApi.md#sites_list_site_publishing_profile_xml) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/publishxml | Gets the publishing profile for web app
[**sites_list_site_publishing_profile_xml_slot**](SitesApi.md#sites_list_site_publishing_profile_xml_slot) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/publishxml | Gets the publishing profile for web app
[**sites_list_site_relay_service_connections**](SitesApi.md#sites_list_site_relay_service_connections) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/hybridconnection | Retrieves all BizTalk Hybrid Connections associated with this web app.
[**sites_list_site_relay_service_connections_slot**](SitesApi.md#sites_list_site_relay_service_connections_slot) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/hybridconnection | Retrieves all BizTalk Hybrid Connections associated with this web app.
[**sites_recover_site**](SitesApi.md#sites_recover_site) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/recover | Recovers a deleted web app
[**sites_recover_site_slot**](SitesApi.md#sites_recover_site_slot) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/recover | Recovers a deleted web app
[**sites_reset_production_slot_config**](SitesApi.md#sites_reset_production_slot_config) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/resetSlotConfig | Resets the configuration settings of the current slot if they were previously modified by calling ApplySlotConfig API
[**sites_reset_slot_config_slot**](SitesApi.md#sites_reset_slot_config_slot) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/resetSlotConfig | Resets the configuration settings of the current slot if they were previously modified by calling ApplySlotConfig API
[**sites_restart_site**](SitesApi.md#sites_restart_site) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/restart | Restarts web app
[**sites_restart_site_slot**](SitesApi.md#sites_restart_site_slot) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/restart | Restarts web app
[**sites_restore_site**](SitesApi.md#sites_restore_site) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/backups/{backupId}/restore | Restores a web app
[**sites_restore_site_slot**](SitesApi.md#sites_restore_site_slot) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/backups/{backupId}/restore | Restores a web app
[**sites_start_site**](SitesApi.md#sites_start_site) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/start | Starts web app
[**sites_start_site_slot**](SitesApi.md#sites_start_site_slot) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/start | Starts web app
[**sites_stop_site**](SitesApi.md#sites_stop_site) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/stop | Stops web app
[**sites_stop_site_slot**](SitesApi.md#sites_stop_site_slot) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/stop | Stops web app
[**sites_swap_slot_with_production**](SitesApi.md#sites_swap_slot_with_production) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slotsswap | Swaps web app slots
[**sites_swap_slots_slot**](SitesApi.md#sites_swap_slots_slot) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/slotsswap | Swaps web app slots
[**sites_sync_site_repository**](SitesApi.md#sites_sync_site_repository) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/sync | 
[**sites_sync_site_repository_slot**](SitesApi.md#sites_sync_site_repository_slot) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/sync | 
[**sites_update_site_app_settings**](SitesApi.md#sites_update_site_app_settings) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/appsettings | Updates the application settings of web app
[**sites_update_site_app_settings_slot**](SitesApi.md#sites_update_site_app_settings_slot) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/appsettings | Updates the application settings of web app
[**sites_update_site_auth_settings**](SitesApi.md#sites_update_site_auth_settings) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/authsettings | Updates the Authentication / Authorization settings associated with web app
[**sites_update_site_auth_settings_slot**](SitesApi.md#sites_update_site_auth_settings_slot) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/authsettings | Updates the Authentication / Authorization settings associated with web app
[**sites_update_site_backup_configuration**](SitesApi.md#sites_update_site_backup_configuration) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/backup | Updates backup configuration of web app
[**sites_update_site_backup_configuration_slot**](SitesApi.md#sites_update_site_backup_configuration_slot) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/backup | Updates backup configuration of web app
[**sites_update_site_config**](SitesApi.md#sites_update_site_config) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/web | Update the configuration of web app
[**sites_update_site_config_slot**](SitesApi.md#sites_update_site_config_slot) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/web | Update the configuration of web app
[**sites_update_site_connection_strings**](SitesApi.md#sites_update_site_connection_strings) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/connectionstrings | Updates the connection strings associated with web app
[**sites_update_site_connection_strings_slot**](SitesApi.md#sites_update_site_connection_strings_slot) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/connectionstrings | Updates the connection strings associated with web app
[**sites_update_site_logs_config**](SitesApi.md#sites_update_site_logs_config) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/logs | Updates the meta data for web app
[**sites_update_site_logs_config_slot**](SitesApi.md#sites_update_site_logs_config_slot) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/logs | Updates the meta data for web app
[**sites_update_site_metadata**](SitesApi.md#sites_update_site_metadata) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/metadata | Updates the meta data for web app
[**sites_update_site_metadata_slot**](SitesApi.md#sites_update_site_metadata_slot) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/metadata | Updates the meta data for web app
[**sites_update_site_relay_service_connection**](SitesApi.md#sites_update_site_relay_service_connection) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/hybridconnection/{entityName} | Creates a new association to a BizTalk Hybrid Connection, or updates an existing one.
[**sites_update_site_relay_service_connection_slot**](SitesApi.md#sites_update_site_relay_service_connection_slot) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/hybridconnection/{entityName} | Creates a new association to a BizTalk Hybrid Connection, or updates an existing one.
[**sites_update_site_source_control**](SitesApi.md#sites_update_site_source_control) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/sourcecontrols/web | Update the source control configuration of web app
[**sites_update_site_source_control_slot**](SitesApi.md#sites_update_site_source_control_slot) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/sourcecontrols/web | Update the source control configuration of web app
[**sites_update_site_vnet_connection**](SitesApi.md#sites_update_site_vnet_connection) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/virtualNetworkConnections/{vnetName} | Adds a Virtual Network Connection or updates it&#39;s properties.
[**sites_update_site_vnet_connection_gateway**](SitesApi.md#sites_update_site_vnet_connection_gateway) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/virtualNetworkConnections/{vnetName}/gateways/{gatewayName} | Updates the Virtual Network Gateway.
[**sites_update_site_vnet_connection_gateway_slot**](SitesApi.md#sites_update_site_vnet_connection_gateway_slot) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/virtualNetworkConnections/{vnetName}/gateways/{gatewayName} | Updates the Virtual Network Gateway.
[**sites_update_site_vnet_connection_slot**](SitesApi.md#sites_update_site_vnet_connection_slot) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/virtualNetworkConnections/{vnetName} | Adds a Virtual Network Connection or updates it&#39;s properties.
[**sites_update_slot_config_names**](SitesApi.md#sites_update_slot_config_names) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/config/slotConfigNames | Updates the names of application settings and connection string that remain with the slot during swap operation


# **sites_add_site_premier_add_on**
> object sites_add_site_premier_add_on(resource_group_name, name, premier_add_on_name, subscription_id, api_version, premier_add_on)



### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.premier_add_on_request import PremierAddOnRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | 
    name = 'name_example' # str | 
    premier_add_on_name = 'premier_add_on_name_example' # str | 
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    premier_add_on = openapi_client.PremierAddOnRequest() # PremierAddOnRequest | 

    try:
        api_response = api_instance.sites_add_site_premier_add_on(resource_group_name, name, premier_add_on_name, subscription_id, api_version, premier_add_on)
        print("The response of SitesApi->sites_add_site_premier_add_on:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_add_site_premier_add_on: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**|  | 
 **name** | **str**|  | 
 **premier_add_on_name** | **str**|  | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **premier_add_on** | [**PremierAddOnRequest**](PremierAddOnRequest.md)|  | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_add_site_premier_add_on_slot**
> object sites_add_site_premier_add_on_slot(resource_group_name, name, premier_add_on_name, slot, subscription_id, api_version, premier_add_on)



### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.premier_add_on_request import PremierAddOnRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | 
    name = 'name_example' # str | 
    premier_add_on_name = 'premier_add_on_name_example' # str | 
    slot = 'slot_example' # str | 
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    premier_add_on = openapi_client.PremierAddOnRequest() # PremierAddOnRequest | 

    try:
        api_response = api_instance.sites_add_site_premier_add_on_slot(resource_group_name, name, premier_add_on_name, slot, subscription_id, api_version, premier_add_on)
        print("The response of SitesApi->sites_add_site_premier_add_on_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_add_site_premier_add_on_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**|  | 
 **name** | **str**|  | 
 **premier_add_on_name** | **str**|  | 
 **slot** | **str**|  | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **premier_add_on** | [**PremierAddOnRequest**](PremierAddOnRequest.md)|  | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_apply_slot_config_slot**
> object sites_apply_slot_config_slot(resource_group_name, name, slot, subscription_id, api_version, slot_swap_entity)

Applies the configuration settings from the target slot onto the current slot

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.csm_slot_entity import CsmSlotEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of the source slot. Settings from the target slot will be applied onto this slot
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    slot_swap_entity = openapi_client.CsmSlotEntity() # CsmSlotEntity | Request body that contains the target slot name. Settings from that slot will be applied on the source slot

    try:
        # Applies the configuration settings from the target slot onto the current slot
        api_response = api_instance.sites_apply_slot_config_slot(resource_group_name, name, slot, subscription_id, api_version, slot_swap_entity)
        print("The response of SitesApi->sites_apply_slot_config_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_apply_slot_config_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of the source slot. Settings from the target slot will be applied onto this slot | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **slot_swap_entity** | [**CsmSlotEntity**](CsmSlotEntity.md)| Request body that contains the target slot name. Settings from that slot will be applied on the source slot | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_apply_slot_config_to_production**
> object sites_apply_slot_config_to_production(resource_group_name, name, subscription_id, api_version, slot_swap_entity)

Applies the configuration settings from the target slot onto the current slot

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.csm_slot_entity import CsmSlotEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    slot_swap_entity = openapi_client.CsmSlotEntity() # CsmSlotEntity | Request body that contains the target slot name. Settings from that slot will be applied on the source slot

    try:
        # Applies the configuration settings from the target slot onto the current slot
        api_response = api_instance.sites_apply_slot_config_to_production(resource_group_name, name, subscription_id, api_version, slot_swap_entity)
        print("The response of SitesApi->sites_apply_slot_config_to_production:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_apply_slot_config_to_production: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **slot_swap_entity** | [**CsmSlotEntity**](CsmSlotEntity.md)| Request body that contains the target slot name. Settings from that slot will be applied on the source slot | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_backup_site**
> BackupItem sites_backup_site(resource_group_name, name, subscription_id, api_version, request)

Creates web app backup

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_item import BackupItem
from openapi_client.models.backup_request import BackupRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    request = openapi_client.BackupRequest() # BackupRequest | Information on backup request

    try:
        # Creates web app backup
        api_response = api_instance.sites_backup_site(resource_group_name, name, subscription_id, api_version, request)
        print("The response of SitesApi->sites_backup_site:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_backup_site: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **request** | [**BackupRequest**](BackupRequest.md)| Information on backup request | 

### Return type

[**BackupItem**](BackupItem.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_backup_site_slot**
> BackupItem sites_backup_site_slot(resource_group_name, name, slot, subscription_id, api_version, request)

Creates web app backup

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_item import BackupItem
from openapi_client.models.backup_request import BackupRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    request = openapi_client.BackupRequest() # BackupRequest | Information on backup request

    try:
        # Creates web app backup
        api_response = api_instance.sites_backup_site_slot(resource_group_name, name, slot, subscription_id, api_version, request)
        print("The response of SitesApi->sites_backup_site_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_backup_site_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **request** | [**BackupRequest**](BackupRequest.md)| Information on backup request | 

### Return type

[**BackupItem**](BackupItem.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_create_deployment**
> Deployment sites_create_deployment(resource_group_name, name, id, subscription_id, api_version, deployment)

Create a deployment

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment import Deployment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    id = 'id_example' # str | Id of the deployment
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    deployment = openapi_client.Deployment() # Deployment | Details of deployment

    try:
        # Create a deployment
        api_response = api_instance.sites_create_deployment(resource_group_name, name, id, subscription_id, api_version, deployment)
        print("The response of SitesApi->sites_create_deployment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_create_deployment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **id** | **str**| Id of the deployment | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **deployment** | [**Deployment**](Deployment.md)| Details of deployment | 

### Return type

[**Deployment**](Deployment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_create_deployment_slot**
> Deployment sites_create_deployment_slot(resource_group_name, name, id, slot, subscription_id, api_version, deployment)

Create a deployment

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment import Deployment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    id = 'id_example' # str | Id of the deployment
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    deployment = openapi_client.Deployment() # Deployment | Details of deployment

    try:
        # Create a deployment
        api_response = api_instance.sites_create_deployment_slot(resource_group_name, name, id, slot, subscription_id, api_version, deployment)
        print("The response of SitesApi->sites_create_deployment_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_create_deployment_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **id** | **str**| Id of the deployment | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **deployment** | [**Deployment**](Deployment.md)| Details of deployment | 

### Return type

[**Deployment**](Deployment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_create_instance_deployment**
> Deployment sites_create_instance_deployment(resource_group_name, name, id, instance_id, subscription_id, api_version, deployment)

Create a deployment

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment import Deployment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    id = 'id_example' # str | Id of the deployment
    instance_id = 'instance_id_example' # str | Id of web app instance
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    deployment = openapi_client.Deployment() # Deployment | Details of deployment

    try:
        # Create a deployment
        api_response = api_instance.sites_create_instance_deployment(resource_group_name, name, id, instance_id, subscription_id, api_version, deployment)
        print("The response of SitesApi->sites_create_instance_deployment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_create_instance_deployment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **id** | **str**| Id of the deployment | 
 **instance_id** | **str**| Id of web app instance | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **deployment** | [**Deployment**](Deployment.md)| Details of deployment | 

### Return type

[**Deployment**](Deployment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_create_instance_deployment_slot**
> Deployment sites_create_instance_deployment_slot(resource_group_name, name, id, slot, instance_id, subscription_id, api_version, deployment)

Create a deployment

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment import Deployment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    id = 'id_example' # str | Id of the deployment
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    instance_id = 'instance_id_example' # str | Id of web app instance
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    deployment = openapi_client.Deployment() # Deployment | Details of deployment

    try:
        # Create a deployment
        api_response = api_instance.sites_create_instance_deployment_slot(resource_group_name, name, id, slot, instance_id, subscription_id, api_version, deployment)
        print("The response of SitesApi->sites_create_instance_deployment_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_create_instance_deployment_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **id** | **str**| Id of the deployment | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **instance_id** | **str**| Id of web app instance | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **deployment** | [**Deployment**](Deployment.md)| Details of deployment | 

### Return type

[**Deployment**](Deployment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_create_or_update_site**
> Site sites_create_or_update_site(resource_group_name, name, subscription_id, api_version, site_envelope, skip_dns_registration=skip_dns_registration, skip_custom_domain_verification=skip_custom_domain_verification, force_dns_registration=force_dns_registration, ttl_in_seconds=ttl_in_seconds)

Creates a new web app or modifies an existing web app.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site import Site
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group
    name = 'name_example' # str | Name of the web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    site_envelope = openapi_client.Site() # Site | Details of web app if it exists already
    skip_dns_registration = 'skip_dns_registration_example' # str | If true web app hostname is not registered with DNS on creation. This parameter is              only used for app creation (optional)
    skip_custom_domain_verification = 'skip_custom_domain_verification_example' # str | If true, custom (non *.azurewebsites.net) domains associated with web app are not verified. (optional)
    force_dns_registration = 'force_dns_registration_example' # str | If true, web app hostname is force registered with DNS (optional)
    ttl_in_seconds = 'ttl_in_seconds_example' # str | Time to live in seconds for web app's default domain name (optional)

    try:
        # Creates a new web app or modifies an existing web app.
        api_response = api_instance.sites_create_or_update_site(resource_group_name, name, subscription_id, api_version, site_envelope, skip_dns_registration=skip_dns_registration, skip_custom_domain_verification=skip_custom_domain_verification, force_dns_registration=force_dns_registration, ttl_in_seconds=ttl_in_seconds)
        print("The response of SitesApi->sites_create_or_update_site:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_create_or_update_site: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group | 
 **name** | **str**| Name of the web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **site_envelope** | [**Site**](Site.md)| Details of web app if it exists already | 
 **skip_dns_registration** | **str**| If true web app hostname is not registered with DNS on creation. This parameter is              only used for app creation | [optional] 
 **skip_custom_domain_verification** | **str**| If true, custom (non *.azurewebsites.net) domains associated with web app are not verified. | [optional] 
 **force_dns_registration** | **str**| If true, web app hostname is force registered with DNS | [optional] 
 **ttl_in_seconds** | **str**| Time to live in seconds for web app&#39;s default domain name | [optional] 

### Return type

[**Site**](Site.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Asynchronous operation in progress |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_create_or_update_site_config**
> SiteConfig sites_create_or_update_site_config(resource_group_name, name, subscription_id, api_version, site_config)

Update the configuration of web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_config import SiteConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    site_config = openapi_client.SiteConfig() # SiteConfig | Request body that contains the configuration setting for the web app

    try:
        # Update the configuration of web app
        api_response = api_instance.sites_create_or_update_site_config(resource_group_name, name, subscription_id, api_version, site_config)
        print("The response of SitesApi->sites_create_or_update_site_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_create_or_update_site_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **site_config** | [**SiteConfig**](SiteConfig.md)| Request body that contains the configuration setting for the web app | 

### Return type

[**SiteConfig**](SiteConfig.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_create_or_update_site_config_slot**
> SiteConfig sites_create_or_update_site_config_slot(resource_group_name, name, slot, subscription_id, api_version, site_config)

Update the configuration of web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_config import SiteConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    site_config = openapi_client.SiteConfig() # SiteConfig | Request body that contains the configuration setting for the web app

    try:
        # Update the configuration of web app
        api_response = api_instance.sites_create_or_update_site_config_slot(resource_group_name, name, slot, subscription_id, api_version, site_config)
        print("The response of SitesApi->sites_create_or_update_site_config_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_create_or_update_site_config_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **site_config** | [**SiteConfig**](SiteConfig.md)| Request body that contains the configuration setting for the web app | 

### Return type

[**SiteConfig**](SiteConfig.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_create_or_update_site_host_name_binding**
> HostNameBinding sites_create_or_update_site_host_name_binding(resource_group_name, name, host_name, subscription_id, api_version, host_name_binding)

Creates a web app hostname binding

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.host_name_binding import HostNameBinding
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    host_name = 'host_name_example' # str | Name of host
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    host_name_binding = openapi_client.HostNameBinding() # HostNameBinding | Host name binding information

    try:
        # Creates a web app hostname binding
        api_response = api_instance.sites_create_or_update_site_host_name_binding(resource_group_name, name, host_name, subscription_id, api_version, host_name_binding)
        print("The response of SitesApi->sites_create_or_update_site_host_name_binding:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_create_or_update_site_host_name_binding: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **host_name** | **str**| Name of host | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **host_name_binding** | [**HostNameBinding**](HostNameBinding.md)| Host name binding information | 

### Return type

[**HostNameBinding**](HostNameBinding.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_create_or_update_site_host_name_binding_slot**
> HostNameBinding sites_create_or_update_site_host_name_binding_slot(resource_group_name, name, host_name, slot, subscription_id, api_version, host_name_binding)

Creates a web app hostname binding

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.host_name_binding import HostNameBinding
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    host_name = 'host_name_example' # str | Name of host
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    host_name_binding = openapi_client.HostNameBinding() # HostNameBinding | Host name binding information

    try:
        # Creates a web app hostname binding
        api_response = api_instance.sites_create_or_update_site_host_name_binding_slot(resource_group_name, name, host_name, slot, subscription_id, api_version, host_name_binding)
        print("The response of SitesApi->sites_create_or_update_site_host_name_binding_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_create_or_update_site_host_name_binding_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **host_name** | **str**| Name of host | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **host_name_binding** | [**HostNameBinding**](HostNameBinding.md)| Host name binding information | 

### Return type

[**HostNameBinding**](HostNameBinding.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_create_or_update_site_relay_service_connection**
> RelayServiceConnectionEntity sites_create_or_update_site_relay_service_connection(resource_group_name, name, entity_name, subscription_id, api_version, connection_envelope)

Creates a new association to a BizTalk Hybrid Connection, or updates an existing one.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.relay_service_connection_entity import RelayServiceConnectionEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    entity_name = 'entity_name_example' # str | The name by which the Hybrid Connection is identified
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    connection_envelope = openapi_client.RelayServiceConnectionEntity() # RelayServiceConnectionEntity | The details of the Hybrid Connection

    try:
        # Creates a new association to a BizTalk Hybrid Connection, or updates an existing one.
        api_response = api_instance.sites_create_or_update_site_relay_service_connection(resource_group_name, name, entity_name, subscription_id, api_version, connection_envelope)
        print("The response of SitesApi->sites_create_or_update_site_relay_service_connection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_create_or_update_site_relay_service_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **entity_name** | **str**| The name by which the Hybrid Connection is identified | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **connection_envelope** | [**RelayServiceConnectionEntity**](RelayServiceConnectionEntity.md)| The details of the Hybrid Connection | 

### Return type

[**RelayServiceConnectionEntity**](RelayServiceConnectionEntity.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_create_or_update_site_relay_service_connection_slot**
> RelayServiceConnectionEntity sites_create_or_update_site_relay_service_connection_slot(resource_group_name, name, entity_name, slot, subscription_id, api_version, connection_envelope)

Creates a new association to a BizTalk Hybrid Connection, or updates an existing one.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.relay_service_connection_entity import RelayServiceConnectionEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    entity_name = 'entity_name_example' # str | The name by which the Hybrid Connection is identified
    slot = 'slot_example' # str | The name of the slot for the web app.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    connection_envelope = openapi_client.RelayServiceConnectionEntity() # RelayServiceConnectionEntity | The details of the Hybrid Connection

    try:
        # Creates a new association to a BizTalk Hybrid Connection, or updates an existing one.
        api_response = api_instance.sites_create_or_update_site_relay_service_connection_slot(resource_group_name, name, entity_name, slot, subscription_id, api_version, connection_envelope)
        print("The response of SitesApi->sites_create_or_update_site_relay_service_connection_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_create_or_update_site_relay_service_connection_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **entity_name** | **str**| The name by which the Hybrid Connection is identified | 
 **slot** | **str**| The name of the slot for the web app. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **connection_envelope** | [**RelayServiceConnectionEntity**](RelayServiceConnectionEntity.md)| The details of the Hybrid Connection | 

### Return type

[**RelayServiceConnectionEntity**](RelayServiceConnectionEntity.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_create_or_update_site_slot**
> Site sites_create_or_update_site_slot(resource_group_name, name, slot, subscription_id, api_version, site_envelope, skip_dns_registration=skip_dns_registration, skip_custom_domain_verification=skip_custom_domain_verification, force_dns_registration=force_dns_registration, ttl_in_seconds=ttl_in_seconds)

Creates a new web app or modifies an existing web app.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site import Site
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group
    name = 'name_example' # str | Name of the web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    site_envelope = openapi_client.Site() # Site | Details of web app if it exists already
    skip_dns_registration = 'skip_dns_registration_example' # str | If true web app hostname is not registered with DNS on creation. This parameter is              only used for app creation (optional)
    skip_custom_domain_verification = 'skip_custom_domain_verification_example' # str | If true, custom (non *.azurewebsites.net) domains associated with web app are not verified. (optional)
    force_dns_registration = 'force_dns_registration_example' # str | If true, web app hostname is force registered with DNS (optional)
    ttl_in_seconds = 'ttl_in_seconds_example' # str | Time to live in seconds for web app's default domain name (optional)

    try:
        # Creates a new web app or modifies an existing web app.
        api_response = api_instance.sites_create_or_update_site_slot(resource_group_name, name, slot, subscription_id, api_version, site_envelope, skip_dns_registration=skip_dns_registration, skip_custom_domain_verification=skip_custom_domain_verification, force_dns_registration=force_dns_registration, ttl_in_seconds=ttl_in_seconds)
        print("The response of SitesApi->sites_create_or_update_site_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_create_or_update_site_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group | 
 **name** | **str**| Name of the web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **site_envelope** | [**Site**](Site.md)| Details of web app if it exists already | 
 **skip_dns_registration** | **str**| If true web app hostname is not registered with DNS on creation. This parameter is              only used for app creation | [optional] 
 **skip_custom_domain_verification** | **str**| If true, custom (non *.azurewebsites.net) domains associated with web app are not verified. | [optional] 
 **force_dns_registration** | **str**| If true, web app hostname is force registered with DNS | [optional] 
 **ttl_in_seconds** | **str**| Time to live in seconds for web app&#39;s default domain name | [optional] 

### Return type

[**Site**](Site.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Asynchronous operation in progress |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_create_or_update_site_source_control**
> SiteSourceControl sites_create_or_update_site_source_control(resource_group_name, name, subscription_id, api_version, site_source_control)

Update the source control configuration of web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_source_control import SiteSourceControl
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    site_source_control = openapi_client.SiteSourceControl() # SiteSourceControl | Request body that contains the source control parameters

    try:
        # Update the source control configuration of web app
        api_response = api_instance.sites_create_or_update_site_source_control(resource_group_name, name, subscription_id, api_version, site_source_control)
        print("The response of SitesApi->sites_create_or_update_site_source_control:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_create_or_update_site_source_control: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **site_source_control** | [**SiteSourceControl**](SiteSourceControl.md)| Request body that contains the source control parameters | 

### Return type

[**SiteSourceControl**](SiteSourceControl.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_create_or_update_site_source_control_slot**
> SiteSourceControl sites_create_or_update_site_source_control_slot(resource_group_name, name, slot, subscription_id, api_version, site_source_control)

Update the source control configuration of web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_source_control import SiteSourceControl
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    site_source_control = openapi_client.SiteSourceControl() # SiteSourceControl | Request body that contains the source control parameters

    try:
        # Update the source control configuration of web app
        api_response = api_instance.sites_create_or_update_site_source_control_slot(resource_group_name, name, slot, subscription_id, api_version, site_source_control)
        print("The response of SitesApi->sites_create_or_update_site_source_control_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_create_or_update_site_source_control_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **site_source_control** | [**SiteSourceControl**](SiteSourceControl.md)| Request body that contains the source control parameters | 

### Return type

[**SiteSourceControl**](SiteSourceControl.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_create_or_update_site_vnet_connection**
> VnetInfo sites_create_or_update_site_vnet_connection(resource_group_name, name, vnet_name, subscription_id, api_version, connection_envelope)

Adds a Virtual Network Connection or updates it's properties.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vnet_info import VnetInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    vnet_name = 'vnet_name_example' # str | The name of the Virtual Network
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    connection_envelope = openapi_client.VnetInfo() # VnetInfo | The properties of this Virtual Network Connection

    try:
        # Adds a Virtual Network Connection or updates it's properties.
        api_response = api_instance.sites_create_or_update_site_vnet_connection(resource_group_name, name, vnet_name, subscription_id, api_version, connection_envelope)
        print("The response of SitesApi->sites_create_or_update_site_vnet_connection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_create_or_update_site_vnet_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **vnet_name** | **str**| The name of the Virtual Network | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **connection_envelope** | [**VnetInfo**](VnetInfo.md)| The properties of this Virtual Network Connection | 

### Return type

[**VnetInfo**](VnetInfo.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_create_or_update_site_vnet_connection_gateway**
> VnetGateway sites_create_or_update_site_vnet_connection_gateway(resource_group_name, name, vnet_name, gateway_name, subscription_id, api_version, connection_envelope)

Updates the Virtual Network Gateway.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vnet_gateway import VnetGateway
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    vnet_name = 'vnet_name_example' # str | The name of the Virtual Network
    gateway_name = 'gateway_name_example' # str | The name of the gateway. The only gateway that exists presently is \"primary\"
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    connection_envelope = openapi_client.VnetGateway() # VnetGateway | The properties to update this gateway with.

    try:
        # Updates the Virtual Network Gateway.
        api_response = api_instance.sites_create_or_update_site_vnet_connection_gateway(resource_group_name, name, vnet_name, gateway_name, subscription_id, api_version, connection_envelope)
        print("The response of SitesApi->sites_create_or_update_site_vnet_connection_gateway:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_create_or_update_site_vnet_connection_gateway: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **vnet_name** | **str**| The name of the Virtual Network | 
 **gateway_name** | **str**| The name of the gateway. The only gateway that exists presently is \&quot;primary\&quot; | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **connection_envelope** | [**VnetGateway**](VnetGateway.md)| The properties to update this gateway with. | 

### Return type

[**VnetGateway**](VnetGateway.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_create_or_update_site_vnet_connection_gateway_slot**
> VnetGateway sites_create_or_update_site_vnet_connection_gateway_slot(resource_group_name, name, vnet_name, gateway_name, slot, subscription_id, api_version, connection_envelope)

Updates the Virtual Network Gateway.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vnet_gateway import VnetGateway
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    vnet_name = 'vnet_name_example' # str | The name of the Virtual Network
    gateway_name = 'gateway_name_example' # str | The name of the gateway. The only gateway that exists presently is \"primary\"
    slot = 'slot_example' # str | The name of the slot for this web app.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    connection_envelope = openapi_client.VnetGateway() # VnetGateway | The properties to update this gateway with.

    try:
        # Updates the Virtual Network Gateway.
        api_response = api_instance.sites_create_or_update_site_vnet_connection_gateway_slot(resource_group_name, name, vnet_name, gateway_name, slot, subscription_id, api_version, connection_envelope)
        print("The response of SitesApi->sites_create_or_update_site_vnet_connection_gateway_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_create_or_update_site_vnet_connection_gateway_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **vnet_name** | **str**| The name of the Virtual Network | 
 **gateway_name** | **str**| The name of the gateway. The only gateway that exists presently is \&quot;primary\&quot; | 
 **slot** | **str**| The name of the slot for this web app. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **connection_envelope** | [**VnetGateway**](VnetGateway.md)| The properties to update this gateway with. | 

### Return type

[**VnetGateway**](VnetGateway.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_create_or_update_site_vnet_connection_slot**
> VnetInfo sites_create_or_update_site_vnet_connection_slot(resource_group_name, name, vnet_name, slot, subscription_id, api_version, connection_envelope)

Adds a Virtual Network Connection or updates it's properties.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vnet_info import VnetInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    vnet_name = 'vnet_name_example' # str | The name of the Virtual Network
    slot = 'slot_example' # str | The name of the slot for this web app.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    connection_envelope = openapi_client.VnetInfo() # VnetInfo | The properties of this Virtual Network Connection

    try:
        # Adds a Virtual Network Connection or updates it's properties.
        api_response = api_instance.sites_create_or_update_site_vnet_connection_slot(resource_group_name, name, vnet_name, slot, subscription_id, api_version, connection_envelope)
        print("The response of SitesApi->sites_create_or_update_site_vnet_connection_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_create_or_update_site_vnet_connection_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **vnet_name** | **str**| The name of the Virtual Network | 
 **slot** | **str**| The name of the slot for this web app. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **connection_envelope** | [**VnetInfo**](VnetInfo.md)| The properties of this Virtual Network Connection | 

### Return type

[**VnetInfo**](VnetInfo.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_delete_backup**
> BackupItem sites_delete_backup(resource_group_name, name, backup_id, subscription_id, api_version)

Deletes a backup from Azure Storage

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_item import BackupItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    backup_id = 'backup_id_example' # str | Id of backup
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Deletes a backup from Azure Storage
        api_response = api_instance.sites_delete_backup(resource_group_name, name, backup_id, subscription_id, api_version)
        print("The response of SitesApi->sites_delete_backup:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_delete_backup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **backup_id** | **str**| Id of backup | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**BackupItem**](BackupItem.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_delete_backup_slot**
> BackupItem sites_delete_backup_slot(resource_group_name, name, backup_id, slot, subscription_id, api_version)

Deletes a backup from Azure Storage

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_item import BackupItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    backup_id = 'backup_id_example' # str | Id of backup
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Deletes a backup from Azure Storage
        api_response = api_instance.sites_delete_backup_slot(resource_group_name, name, backup_id, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_delete_backup_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_delete_backup_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **backup_id** | **str**| Id of backup | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**BackupItem**](BackupItem.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_delete_deployment**
> object sites_delete_deployment(resource_group_name, name, id, subscription_id, api_version)

Delete the deployment

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    id = 'id_example' # str | Id of the deployment
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Delete the deployment
        api_response = api_instance.sites_delete_deployment(resource_group_name, name, id, subscription_id, api_version)
        print("The response of SitesApi->sites_delete_deployment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_delete_deployment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **id** | **str**| Id of the deployment | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_delete_deployment_slot**
> object sites_delete_deployment_slot(resource_group_name, name, id, slot, subscription_id, api_version)

Delete the deployment

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    id = 'id_example' # str | Id of the deployment
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Delete the deployment
        api_response = api_instance.sites_delete_deployment_slot(resource_group_name, name, id, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_delete_deployment_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_delete_deployment_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **id** | **str**| Id of the deployment | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_delete_instance_deployment**
> object sites_delete_instance_deployment(resource_group_name, name, id, instance_id, subscription_id, api_version)

Delete the deployment

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    id = 'id_example' # str | Id of the deployment
    instance_id = 'instance_id_example' # str | Id of web app instance
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Delete the deployment
        api_response = api_instance.sites_delete_instance_deployment(resource_group_name, name, id, instance_id, subscription_id, api_version)
        print("The response of SitesApi->sites_delete_instance_deployment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_delete_instance_deployment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **id** | **str**| Id of the deployment | 
 **instance_id** | **str**| Id of web app instance | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_delete_instance_deployment_slot**
> object sites_delete_instance_deployment_slot(resource_group_name, name, id, slot, instance_id, subscription_id, api_version)

Delete the deployment

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    id = 'id_example' # str | Id of the deployment
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    instance_id = 'instance_id_example' # str | Id of web app instance
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Delete the deployment
        api_response = api_instance.sites_delete_instance_deployment_slot(resource_group_name, name, id, slot, instance_id, subscription_id, api_version)
        print("The response of SitesApi->sites_delete_instance_deployment_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_delete_instance_deployment_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **id** | **str**| Id of the deployment | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **instance_id** | **str**| Id of web app instance | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_delete_site**
> object sites_delete_site(resource_group_name, name, subscription_id, api_version, delete_metrics=delete_metrics, delete_empty_server_farm=delete_empty_server_farm, skip_dns_registration=skip_dns_registration, delete_all_slots=delete_all_slots)

Deletes a web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    delete_metrics = 'delete_metrics_example' # str | If true, web app metrics are also deleted (optional)
    delete_empty_server_farm = 'delete_empty_server_farm_example' # str | If true and App Service Plan is empty after web app deletion, App Service Plan is also deleted (optional)
    skip_dns_registration = 'skip_dns_registration_example' # str | If true, DNS registration is skipped (optional)
    delete_all_slots = 'delete_all_slots_example' # str | If true, all slots associated with web app are also deleted (optional)

    try:
        # Deletes a web app
        api_response = api_instance.sites_delete_site(resource_group_name, name, subscription_id, api_version, delete_metrics=delete_metrics, delete_empty_server_farm=delete_empty_server_farm, skip_dns_registration=skip_dns_registration, delete_all_slots=delete_all_slots)
        print("The response of SitesApi->sites_delete_site:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_delete_site: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **delete_metrics** | **str**| If true, web app metrics are also deleted | [optional] 
 **delete_empty_server_farm** | **str**| If true and App Service Plan is empty after web app deletion, App Service Plan is also deleted | [optional] 
 **skip_dns_registration** | **str**| If true, DNS registration is skipped | [optional] 
 **delete_all_slots** | **str**| If true, all slots associated with web app are also deleted | [optional] 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_delete_site_host_name_binding**
> object sites_delete_site_host_name_binding(resource_group_name, name, host_name, subscription_id, api_version)

Deletes a host name binding

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    host_name = 'host_name_example' # str | Name of host
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Deletes a host name binding
        api_response = api_instance.sites_delete_site_host_name_binding(resource_group_name, name, host_name, subscription_id, api_version)
        print("The response of SitesApi->sites_delete_site_host_name_binding:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_delete_site_host_name_binding: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **host_name** | **str**| Name of host | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_delete_site_host_name_binding_slot**
> object sites_delete_site_host_name_binding_slot(resource_group_name, name, slot, host_name, subscription_id, api_version)

Deletes a host name binding

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    host_name = 'host_name_example' # str | Name of host
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Deletes a host name binding
        api_response = api_instance.sites_delete_site_host_name_binding_slot(resource_group_name, name, slot, host_name, subscription_id, api_version)
        print("The response of SitesApi->sites_delete_site_host_name_binding_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_delete_site_host_name_binding_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **host_name** | **str**| Name of host | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_delete_site_premier_add_on**
> object sites_delete_site_premier_add_on(resource_group_name, name, premier_add_on_name, subscription_id, api_version)



### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | 
    name = 'name_example' # str | 
    premier_add_on_name = 'premier_add_on_name_example' # str | 
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        api_response = api_instance.sites_delete_site_premier_add_on(resource_group_name, name, premier_add_on_name, subscription_id, api_version)
        print("The response of SitesApi->sites_delete_site_premier_add_on:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_delete_site_premier_add_on: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**|  | 
 **name** | **str**|  | 
 **premier_add_on_name** | **str**|  | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_delete_site_premier_add_on_slot**
> object sites_delete_site_premier_add_on_slot(resource_group_name, name, premier_add_on_name, slot, subscription_id, api_version)



### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | 
    name = 'name_example' # str | 
    premier_add_on_name = 'premier_add_on_name_example' # str | 
    slot = 'slot_example' # str | 
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        api_response = api_instance.sites_delete_site_premier_add_on_slot(resource_group_name, name, premier_add_on_name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_delete_site_premier_add_on_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_delete_site_premier_add_on_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**|  | 
 **name** | **str**|  | 
 **premier_add_on_name** | **str**|  | 
 **slot** | **str**|  | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_delete_site_relay_service_connection**
> object sites_delete_site_relay_service_connection(resource_group_name, name, entity_name, subscription_id, api_version)

Removes the association to a BizTalk Hybrid Connection, identified by its entity name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    entity_name = 'entity_name_example' # str | The name by which the Hybrid Connection is identified
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Removes the association to a BizTalk Hybrid Connection, identified by its entity name.
        api_response = api_instance.sites_delete_site_relay_service_connection(resource_group_name, name, entity_name, subscription_id, api_version)
        print("The response of SitesApi->sites_delete_site_relay_service_connection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_delete_site_relay_service_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **entity_name** | **str**| The name by which the Hybrid Connection is identified | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_delete_site_relay_service_connection_slot**
> object sites_delete_site_relay_service_connection_slot(resource_group_name, name, entity_name, slot, subscription_id, api_version)

Removes the association to a BizTalk Hybrid Connection, identified by its entity name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    entity_name = 'entity_name_example' # str | The name by which the Hybrid Connection is identified
    slot = 'slot_example' # str | The name of the slot for the web app.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Removes the association to a BizTalk Hybrid Connection, identified by its entity name.
        api_response = api_instance.sites_delete_site_relay_service_connection_slot(resource_group_name, name, entity_name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_delete_site_relay_service_connection_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_delete_site_relay_service_connection_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **entity_name** | **str**| The name by which the Hybrid Connection is identified | 
 **slot** | **str**| The name of the slot for the web app. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_delete_site_slot**
> object sites_delete_site_slot(resource_group_name, name, slot, subscription_id, api_version, delete_metrics=delete_metrics, delete_empty_server_farm=delete_empty_server_farm, skip_dns_registration=skip_dns_registration, delete_all_slots=delete_all_slots)

Deletes a web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    delete_metrics = 'delete_metrics_example' # str | If true, web app metrics are also deleted (optional)
    delete_empty_server_farm = 'delete_empty_server_farm_example' # str | If true and App Service Plan is empty after web app deletion, App Service Plan is also deleted (optional)
    skip_dns_registration = 'skip_dns_registration_example' # str | If true, DNS registration is skipped (optional)
    delete_all_slots = 'delete_all_slots_example' # str | If true, all slots associated with web app are also deleted (optional)

    try:
        # Deletes a web app
        api_response = api_instance.sites_delete_site_slot(resource_group_name, name, slot, subscription_id, api_version, delete_metrics=delete_metrics, delete_empty_server_farm=delete_empty_server_farm, skip_dns_registration=skip_dns_registration, delete_all_slots=delete_all_slots)
        print("The response of SitesApi->sites_delete_site_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_delete_site_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **delete_metrics** | **str**| If true, web app metrics are also deleted | [optional] 
 **delete_empty_server_farm** | **str**| If true and App Service Plan is empty after web app deletion, App Service Plan is also deleted | [optional] 
 **skip_dns_registration** | **str**| If true, DNS registration is skipped | [optional] 
 **delete_all_slots** | **str**| If true, all slots associated with web app are also deleted | [optional] 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_delete_site_source_control**
> object sites_delete_site_source_control(resource_group_name, name, subscription_id, api_version)

Delete source control configuration of web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Delete source control configuration of web app
        api_response = api_instance.sites_delete_site_source_control(resource_group_name, name, subscription_id, api_version)
        print("The response of SitesApi->sites_delete_site_source_control:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_delete_site_source_control: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_delete_site_source_control_slot**
> object sites_delete_site_source_control_slot(resource_group_name, name, slot, subscription_id, api_version)

Delete source control configuration of web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Delete source control configuration of web app
        api_response = api_instance.sites_delete_site_source_control_slot(resource_group_name, name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_delete_site_source_control_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_delete_site_source_control_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_delete_site_vnet_connection**
> object sites_delete_site_vnet_connection(resource_group_name, name, vnet_name, subscription_id, api_version)

Removes the specified Virtual Network Connection association from this web app.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    vnet_name = 'vnet_name_example' # str | The name of the Virtual Network
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Removes the specified Virtual Network Connection association from this web app.
        api_response = api_instance.sites_delete_site_vnet_connection(resource_group_name, name, vnet_name, subscription_id, api_version)
        print("The response of SitesApi->sites_delete_site_vnet_connection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_delete_site_vnet_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **vnet_name** | **str**| The name of the Virtual Network | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_delete_site_vnet_connection_slot**
> object sites_delete_site_vnet_connection_slot(resource_group_name, name, vnet_name, slot, subscription_id, api_version)

Removes the specified Virtual Network Connection association from this web app.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    vnet_name = 'vnet_name_example' # str | The name of the Virtual Network
    slot = 'slot_example' # str | The name of the slot for this web app.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Removes the specified Virtual Network Connection association from this web app.
        api_response = api_instance.sites_delete_site_vnet_connection_slot(resource_group_name, name, vnet_name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_delete_site_vnet_connection_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_delete_site_vnet_connection_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **vnet_name** | **str**| The name of the Virtual Network | 
 **slot** | **str**| The name of the slot for this web app. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_discover_site_restore**
> RestoreRequest sites_discover_site_restore(resource_group_name, name, subscription_id, api_version, request)

Discovers existing web app backups that can be restored

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.restore_request import RestoreRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    request = openapi_client.RestoreRequest() # RestoreRequest | Information on restore request

    try:
        # Discovers existing web app backups that can be restored
        api_response = api_instance.sites_discover_site_restore(resource_group_name, name, subscription_id, api_version, request)
        print("The response of SitesApi->sites_discover_site_restore:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_discover_site_restore: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **request** | [**RestoreRequest**](RestoreRequest.md)| Information on restore request | 

### Return type

[**RestoreRequest**](RestoreRequest.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_discover_site_restore_slot**
> RestoreRequest sites_discover_site_restore_slot(resource_group_name, name, slot, subscription_id, api_version, request)

Discovers existing web app backups that can be restored

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.restore_request import RestoreRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    request = openapi_client.RestoreRequest() # RestoreRequest | Information on restore request

    try:
        # Discovers existing web app backups that can be restored
        api_response = api_instance.sites_discover_site_restore_slot(resource_group_name, name, slot, subscription_id, api_version, request)
        print("The response of SitesApi->sites_discover_site_restore_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_discover_site_restore_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **request** | [**RestoreRequest**](RestoreRequest.md)| Information on restore request | 

### Return type

[**RestoreRequest**](RestoreRequest.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_generate_new_site_publishing_password**
> object sites_generate_new_site_publishing_password(resource_group_name, name, subscription_id, api_version)

Generates new random app publishing password

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Generates new random app publishing password
        api_response = api_instance.sites_generate_new_site_publishing_password(resource_group_name, name, subscription_id, api_version)
        print("The response of SitesApi->sites_generate_new_site_publishing_password:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_generate_new_site_publishing_password: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_generate_new_site_publishing_password_slot**
> object sites_generate_new_site_publishing_password_slot(resource_group_name, name, slot, subscription_id, api_version)

Generates new random app publishing password

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Generates new random app publishing password
        api_response = api_instance.sites_generate_new_site_publishing_password_slot(resource_group_name, name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_generate_new_site_publishing_password_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_generate_new_site_publishing_password_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_deleted_sites**
> DeletedSiteCollection sites_get_deleted_sites(resource_group_name, subscription_id, api_version, properties_to_include=properties_to_include, include_site_types=include_site_types)

Gets deleted web apps in subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deleted_site_collection import DeletedSiteCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    properties_to_include = 'properties_to_include_example' # str | Additional web app properties included in the response (optional)
    include_site_types = 'include_site_types_example' # str | Types of apps included in the response (optional)

    try:
        # Gets deleted web apps in subscription
        api_response = api_instance.sites_get_deleted_sites(resource_group_name, subscription_id, api_version, properties_to_include=properties_to_include, include_site_types=include_site_types)
        print("The response of SitesApi->sites_get_deleted_sites:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_deleted_sites: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **properties_to_include** | **str**| Additional web app properties included in the response | [optional] 
 **include_site_types** | **str**| Types of apps included in the response | [optional] 

### Return type

[**DeletedSiteCollection**](DeletedSiteCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_deployment**
> Deployment sites_get_deployment(resource_group_name, name, id, subscription_id, api_version)

Get the deployment

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment import Deployment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    id = 'id_example' # str | Id of the deployment
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get the deployment
        api_response = api_instance.sites_get_deployment(resource_group_name, name, id, subscription_id, api_version)
        print("The response of SitesApi->sites_get_deployment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_deployment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **id** | **str**| Id of the deployment | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**Deployment**](Deployment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_deployment_slot**
> Deployment sites_get_deployment_slot(resource_group_name, name, id, slot, subscription_id, api_version)

Get the deployment

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment import Deployment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    id = 'id_example' # str | Id of the deployment
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get the deployment
        api_response = api_instance.sites_get_deployment_slot(resource_group_name, name, id, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_get_deployment_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_deployment_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **id** | **str**| Id of the deployment | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**Deployment**](Deployment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_deployments**
> DeploymentCollection sites_get_deployments(resource_group_name, name, subscription_id, api_version)

List deployments

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_collection import DeploymentCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # List deployments
        api_response = api_instance.sites_get_deployments(resource_group_name, name, subscription_id, api_version)
        print("The response of SitesApi->sites_get_deployments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_deployments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**DeploymentCollection**](DeploymentCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_deployments_slot**
> DeploymentCollection sites_get_deployments_slot(resource_group_name, name, slot, subscription_id, api_version)

List deployments

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_collection import DeploymentCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # List deployments
        api_response = api_instance.sites_get_deployments_slot(resource_group_name, name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_get_deployments_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_deployments_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**DeploymentCollection**](DeploymentCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_instance_deployment**
> Deployment sites_get_instance_deployment(resource_group_name, name, id, instance_id, subscription_id, api_version)

Get the deployment

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment import Deployment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    id = 'id_example' # str | Id of the deployment
    instance_id = 'instance_id_example' # str | Id of web app instance
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get the deployment
        api_response = api_instance.sites_get_instance_deployment(resource_group_name, name, id, instance_id, subscription_id, api_version)
        print("The response of SitesApi->sites_get_instance_deployment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_instance_deployment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **id** | **str**| Id of the deployment | 
 **instance_id** | **str**| Id of web app instance | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**Deployment**](Deployment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_instance_deployment_slot**
> Deployment sites_get_instance_deployment_slot(resource_group_name, name, id, slot, instance_id, subscription_id, api_version)

Get the deployment

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment import Deployment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    id = 'id_example' # str | Id of the deployment
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    instance_id = 'instance_id_example' # str | Id of web app instance
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get the deployment
        api_response = api_instance.sites_get_instance_deployment_slot(resource_group_name, name, id, slot, instance_id, subscription_id, api_version)
        print("The response of SitesApi->sites_get_instance_deployment_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_instance_deployment_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **id** | **str**| Id of the deployment | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **instance_id** | **str**| Id of web app instance | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**Deployment**](Deployment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_instance_deployments**
> DeploymentCollection sites_get_instance_deployments(resource_group_name, name, instance_id, subscription_id, api_version)

List deployments

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_collection import DeploymentCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    instance_id = 'instance_id_example' # str | Id of web app instance
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # List deployments
        api_response = api_instance.sites_get_instance_deployments(resource_group_name, name, instance_id, subscription_id, api_version)
        print("The response of SitesApi->sites_get_instance_deployments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_instance_deployments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **instance_id** | **str**| Id of web app instance | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**DeploymentCollection**](DeploymentCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_instance_deployments_slot**
> DeploymentCollection sites_get_instance_deployments_slot(resource_group_name, name, slot, instance_id, subscription_id, api_version)

List deployments

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_collection import DeploymentCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    instance_id = 'instance_id_example' # str | Id of web app instance
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # List deployments
        api_response = api_instance.sites_get_instance_deployments_slot(resource_group_name, name, slot, instance_id, subscription_id, api_version)
        print("The response of SitesApi->sites_get_instance_deployments_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_instance_deployments_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **instance_id** | **str**| Id of web app instance | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**DeploymentCollection**](DeploymentCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site**
> Site sites_get_site(resource_group_name, name, subscription_id, api_version, properties_to_include=properties_to_include)

Get details of a web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site import Site
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    properties_to_include = 'properties_to_include_example' # str | Additional web app properties included in the response (optional)

    try:
        # Get details of a web app
        api_response = api_instance.sites_get_site(resource_group_name, name, subscription_id, api_version, properties_to_include=properties_to_include)
        print("The response of SitesApi->sites_get_site:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **properties_to_include** | **str**| Additional web app properties included in the response | [optional] 

### Return type

[**Site**](Site.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_backup_configuration**
> BackupRequest sites_get_site_backup_configuration(resource_group_name, name, subscription_id, api_version)

Gets the backup configuration for a web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_request import BackupRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the backup configuration for a web app
        api_response = api_instance.sites_get_site_backup_configuration(resource_group_name, name, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_backup_configuration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_backup_configuration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**BackupRequest**](BackupRequest.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_backup_configuration_slot**
> BackupRequest sites_get_site_backup_configuration_slot(resource_group_name, name, slot, subscription_id, api_version)

Gets the backup configuration for a web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_request import BackupRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the backup configuration for a web app
        api_response = api_instance.sites_get_site_backup_configuration_slot(resource_group_name, name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_backup_configuration_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_backup_configuration_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**BackupRequest**](BackupRequest.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_backup_status**
> BackupItem sites_get_site_backup_status(resource_group_name, name, backup_id, subscription_id, api_version)

Gets status of a web app backup that may be in progress.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_item import BackupItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    backup_id = 'backup_id_example' # str | Id of backup
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets status of a web app backup that may be in progress.
        api_response = api_instance.sites_get_site_backup_status(resource_group_name, name, backup_id, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_backup_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_backup_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **backup_id** | **str**| Id of backup | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**BackupItem**](BackupItem.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_backup_status_secrets**
> BackupItem sites_get_site_backup_status_secrets(resource_group_name, name, backup_id, subscription_id, api_version, request)

Gets status of a web app backup that may be in progress, including secrets associated with the backup, such as the Azure Storage SAS URL. Also can be used to update the SAS URL for the backup if a new URL is passed in the request body.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_item import BackupItem
from openapi_client.models.backup_request import BackupRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    backup_id = 'backup_id_example' # str | Id of backup
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    request = openapi_client.BackupRequest() # BackupRequest | Information on backup request

    try:
        # Gets status of a web app backup that may be in progress, including secrets associated with the backup, such as the Azure Storage SAS URL. Also can be used to update the SAS URL for the backup if a new URL is passed in the request body.
        api_response = api_instance.sites_get_site_backup_status_secrets(resource_group_name, name, backup_id, subscription_id, api_version, request)
        print("The response of SitesApi->sites_get_site_backup_status_secrets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_backup_status_secrets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **backup_id** | **str**| Id of backup | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **request** | [**BackupRequest**](BackupRequest.md)| Information on backup request | 

### Return type

[**BackupItem**](BackupItem.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_backup_status_secrets_slot**
> BackupItem sites_get_site_backup_status_secrets_slot(resource_group_name, name, backup_id, slot, subscription_id, api_version, request)

Gets status of a web app backup that may be in progress, including secrets associated with the backup, such as the Azure Storage SAS URL. Also can be used to update the SAS URL for the backup if a new URL is passed in the request body.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_item import BackupItem
from openapi_client.models.backup_request import BackupRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    backup_id = 'backup_id_example' # str | Id of backup
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    request = openapi_client.BackupRequest() # BackupRequest | Information on backup request

    try:
        # Gets status of a web app backup that may be in progress, including secrets associated with the backup, such as the Azure Storage SAS URL. Also can be used to update the SAS URL for the backup if a new URL is passed in the request body.
        api_response = api_instance.sites_get_site_backup_status_secrets_slot(resource_group_name, name, backup_id, slot, subscription_id, api_version, request)
        print("The response of SitesApi->sites_get_site_backup_status_secrets_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_backup_status_secrets_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **backup_id** | **str**| Id of backup | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **request** | [**BackupRequest**](BackupRequest.md)| Information on backup request | 

### Return type

[**BackupItem**](BackupItem.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_backup_status_slot**
> BackupItem sites_get_site_backup_status_slot(resource_group_name, name, backup_id, slot, subscription_id, api_version)

Gets status of a web app backup that may be in progress.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_item import BackupItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    backup_id = 'backup_id_example' # str | Id of backup
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets status of a web app backup that may be in progress.
        api_response = api_instance.sites_get_site_backup_status_slot(resource_group_name, name, backup_id, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_backup_status_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_backup_status_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **backup_id** | **str**| Id of backup | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**BackupItem**](BackupItem.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_config**
> SiteConfig sites_get_site_config(resource_group_name, name, subscription_id, api_version)

Gets the configuration of the web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_config import SiteConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the configuration of the web app
        api_response = api_instance.sites_get_site_config(resource_group_name, name, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**SiteConfig**](SiteConfig.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_config_slot**
> SiteConfig sites_get_site_config_slot(resource_group_name, name, slot, subscription_id, api_version)

Gets the configuration of the web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_config import SiteConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the configuration of the web app
        api_response = api_instance.sites_get_site_config_slot(resource_group_name, name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_config_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_config_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**SiteConfig**](SiteConfig.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_host_name_binding**
> HostNameBinding sites_get_site_host_name_binding(resource_group_name, name, host_name, subscription_id, api_version)

Get web app binding for a hostname

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.host_name_binding import HostNameBinding
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    host_name = 'host_name_example' # str | Name of host
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get web app binding for a hostname
        api_response = api_instance.sites_get_site_host_name_binding(resource_group_name, name, host_name, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_host_name_binding:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_host_name_binding: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **host_name** | **str**| Name of host | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**HostNameBinding**](HostNameBinding.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_host_name_binding_slot**
> HostNameBinding sites_get_site_host_name_binding_slot(resource_group_name, name, slot, host_name, subscription_id, api_version)

Get web app binding for a hostname

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.host_name_binding import HostNameBinding
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    host_name = 'host_name_example' # str | Name of host
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get web app binding for a hostname
        api_response = api_instance.sites_get_site_host_name_binding_slot(resource_group_name, name, slot, host_name, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_host_name_binding_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_host_name_binding_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **host_name** | **str**| Name of host | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**HostNameBinding**](HostNameBinding.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_host_name_bindings**
> HostNameBindingCollection sites_get_site_host_name_bindings(resource_group_name, name, subscription_id, api_version)

Get web app hostname bindings

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.host_name_binding_collection import HostNameBindingCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get web app hostname bindings
        api_response = api_instance.sites_get_site_host_name_bindings(resource_group_name, name, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_host_name_bindings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_host_name_bindings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**HostNameBindingCollection**](HostNameBindingCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_host_name_bindings_slot**
> HostNameBindingCollection sites_get_site_host_name_bindings_slot(resource_group_name, name, slot, subscription_id, api_version)

Get web app hostname bindings

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.host_name_binding_collection import HostNameBindingCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get web app hostname bindings
        api_response = api_instance.sites_get_site_host_name_bindings_slot(resource_group_name, name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_host_name_bindings_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_host_name_bindings_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**HostNameBindingCollection**](HostNameBindingCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_instance_identifiers**
> SiteInstanceCollection sites_get_site_instance_identifiers(resource_group_name, name, subscription_id, api_version)

Gets all instance of a web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_instance_collection import SiteInstanceCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets all instance of a web app
        api_response = api_instance.sites_get_site_instance_identifiers(resource_group_name, name, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_instance_identifiers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_instance_identifiers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**SiteInstanceCollection**](SiteInstanceCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_instance_identifiers_slot**
> SiteInstanceCollection sites_get_site_instance_identifiers_slot(resource_group_name, name, slot, subscription_id, api_version)

Gets all instance of a web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_instance_collection import SiteInstanceCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets all instance of a web app
        api_response = api_instance.sites_get_site_instance_identifiers_slot(resource_group_name, name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_instance_identifiers_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_instance_identifiers_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**SiteInstanceCollection**](SiteInstanceCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_logs_config**
> SiteLogsConfig sites_get_site_logs_config(resource_group_name, name, subscription_id, api_version)

Gets the web app logs configuration

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_logs_config import SiteLogsConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the web app logs configuration
        api_response = api_instance.sites_get_site_logs_config(resource_group_name, name, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_logs_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_logs_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**SiteLogsConfig**](SiteLogsConfig.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_logs_config_slot**
> SiteLogsConfig sites_get_site_logs_config_slot(resource_group_name, name, slot, subscription_id, api_version)

Gets the web app logs configuration

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_logs_config import SiteLogsConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the web app logs configuration
        api_response = api_instance.sites_get_site_logs_config_slot(resource_group_name, name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_logs_config_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_logs_config_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**SiteLogsConfig**](SiteLogsConfig.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_metric_definitions**
> MetricDefinitionCollection sites_get_site_metric_definitions(resource_group_name, name, subscription_id, api_version)

Gets metric definitions for web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_definition_collection import MetricDefinitionCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets metric definitions for web app
        api_response = api_instance.sites_get_site_metric_definitions(resource_group_name, name, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_metric_definitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_metric_definitions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**MetricDefinitionCollection**](MetricDefinitionCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_metric_definitions_slot**
> MetricDefinitionCollection sites_get_site_metric_definitions_slot(resource_group_name, name, slot, subscription_id, api_version)

Gets metric definitions for web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_definition_collection import MetricDefinitionCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets metric definitions for web app
        api_response = api_instance.sites_get_site_metric_definitions_slot(resource_group_name, name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_metric_definitions_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_metric_definitions_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**MetricDefinitionCollection**](MetricDefinitionCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_metrics**
> ResourceMetricCollection sites_get_site_metrics(resource_group_name, name, subscription_id, api_version, details=details, filter=filter)

Gets metrics for web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_metric_collection import ResourceMetricCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    details = True # bool | If true, metric details are included in response (optional)
    filter = 'filter_example' # str | Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'. (optional)

    try:
        # Gets metrics for web app
        api_response = api_instance.sites_get_site_metrics(resource_group_name, name, subscription_id, api_version, details=details, filter=filter)
        print("The response of SitesApi->sites_get_site_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **details** | **bool**| If true, metric details are included in response | [optional] 
 **filter** | **str**| Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter&#x3D;(name.value eq &#39;Metric1&#39; or name.value eq &#39;Metric2&#39;) and startTime eq &#39;2014-01-01T00:00:00Z&#39; and endTime eq &#39;2014-12-31T23:59:59Z&#39; and timeGrain eq duration&#39;[Hour|Minute|Day]&#39;. | [optional] 

### Return type

[**ResourceMetricCollection**](ResourceMetricCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_metrics_slot**
> ResourceMetricCollection sites_get_site_metrics_slot(resource_group_name, name, slot, subscription_id, api_version, details=details, filter=filter)

Gets metrics for web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_metric_collection import ResourceMetricCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    details = True # bool | If true, metric details are included in response (optional)
    filter = 'filter_example' # str | Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'. (optional)

    try:
        # Gets metrics for web app
        api_response = api_instance.sites_get_site_metrics_slot(resource_group_name, name, slot, subscription_id, api_version, details=details, filter=filter)
        print("The response of SitesApi->sites_get_site_metrics_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_metrics_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **details** | **bool**| If true, metric details are included in response | [optional] 
 **filter** | **str**| Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter&#x3D;(name.value eq &#39;Metric1&#39; or name.value eq &#39;Metric2&#39;) and startTime eq &#39;2014-01-01T00:00:00Z&#39; and endTime eq &#39;2014-12-31T23:59:59Z&#39; and timeGrain eq duration&#39;[Hour|Minute|Day]&#39;. | [optional] 

### Return type

[**ResourceMetricCollection**](ResourceMetricCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_network_features**
> NetworkFeatures sites_get_site_network_features(resource_group_name, name, view, subscription_id, api_version)

Retrieves a view of all network features in use on this web app.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_features import NetworkFeatures
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    view = 'view_example' # str | The type of view. This can either be \"summary\" or \"detailed\".
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Retrieves a view of all network features in use on this web app.
        api_response = api_instance.sites_get_site_network_features(resource_group_name, name, view, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_network_features:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_network_features: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **view** | **str**| The type of view. This can either be \&quot;summary\&quot; or \&quot;detailed\&quot;. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**NetworkFeatures**](NetworkFeatures.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | The requested view does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_network_features_slot**
> NetworkFeatures sites_get_site_network_features_slot(resource_group_name, name, view, slot, subscription_id, api_version)

Retrieves a view of all network features in use on this web app.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_features import NetworkFeatures
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    view = 'view_example' # str | The type of view. This can either be \"summary\" or \"detailed\".
    slot = 'slot_example' # str | The name of the slot for this web app.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Retrieves a view of all network features in use on this web app.
        api_response = api_instance.sites_get_site_network_features_slot(resource_group_name, name, view, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_network_features_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_network_features_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **view** | **str**| The type of view. This can either be \&quot;summary\&quot; or \&quot;detailed\&quot;. | 
 **slot** | **str**| The name of the slot for this web app. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**NetworkFeatures**](NetworkFeatures.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | The requested view does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_operation**
> object sites_get_site_operation(resource_group_name, name, operation_id, subscription_id, api_version)

Gets the operation for a web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    operation_id = 'operation_id_example' # str | Id of an operation
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the operation for a web app
        api_response = api_instance.sites_get_site_operation(resource_group_name, name, operation_id, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_operation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_operation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **operation_id** | **str**| Id of an operation | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_operation_slot**
> object sites_get_site_operation_slot(resource_group_name, name, operation_id, slot, subscription_id, api_version)

Gets the operation for a web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    operation_id = 'operation_id_example' # str | Id of an operation
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the operation for a web app
        api_response = api_instance.sites_get_site_operation_slot(resource_group_name, name, operation_id, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_operation_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_operation_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **operation_id** | **str**| Id of an operation | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_premier_add_on**
> object sites_get_site_premier_add_on(resource_group_name, name, premier_add_on_name, subscription_id, api_version)



### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | 
    name = 'name_example' # str | 
    premier_add_on_name = 'premier_add_on_name_example' # str | 
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        api_response = api_instance.sites_get_site_premier_add_on(resource_group_name, name, premier_add_on_name, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_premier_add_on:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_premier_add_on: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**|  | 
 **name** | **str**|  | 
 **premier_add_on_name** | **str**|  | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_premier_add_on_slot**
> object sites_get_site_premier_add_on_slot(resource_group_name, name, premier_add_on_name, slot, subscription_id, api_version)



### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | 
    name = 'name_example' # str | 
    premier_add_on_name = 'premier_add_on_name_example' # str | 
    slot = 'slot_example' # str | 
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        api_response = api_instance.sites_get_site_premier_add_on_slot(resource_group_name, name, premier_add_on_name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_premier_add_on_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_premier_add_on_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**|  | 
 **name** | **str**|  | 
 **premier_add_on_name** | **str**|  | 
 **slot** | **str**|  | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_relay_service_connection**
> RelayServiceConnectionEntity sites_get_site_relay_service_connection(resource_group_name, name, entity_name, subscription_id, api_version)

Retrieves a BizTalk Hybrid Connection identified by its entity name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.relay_service_connection_entity import RelayServiceConnectionEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    entity_name = 'entity_name_example' # str | The name by which the Hybrid Connection is identified
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Retrieves a BizTalk Hybrid Connection identified by its entity name.
        api_response = api_instance.sites_get_site_relay_service_connection(resource_group_name, name, entity_name, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_relay_service_connection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_relay_service_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **entity_name** | **str**| The name by which the Hybrid Connection is identified | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**RelayServiceConnectionEntity**](RelayServiceConnectionEntity.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_relay_service_connection_slot**
> RelayServiceConnectionEntity sites_get_site_relay_service_connection_slot(resource_group_name, name, entity_name, slot, subscription_id, api_version)

Retrieves a BizTalk Hybrid Connection identified by its entity name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.relay_service_connection_entity import RelayServiceConnectionEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    entity_name = 'entity_name_example' # str | The name by which the Hybrid Connection is identified
    slot = 'slot_example' # str | The name of the slot for the web app.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Retrieves a BizTalk Hybrid Connection identified by its entity name.
        api_response = api_instance.sites_get_site_relay_service_connection_slot(resource_group_name, name, entity_name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_relay_service_connection_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_relay_service_connection_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **entity_name** | **str**| The name by which the Hybrid Connection is identified | 
 **slot** | **str**| The name of the slot for the web app. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**RelayServiceConnectionEntity**](RelayServiceConnectionEntity.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_slot**
> Site sites_get_site_slot(resource_group_name, name, slot, subscription_id, api_version, properties_to_include=properties_to_include)

Get details of a web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site import Site
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    properties_to_include = 'properties_to_include_example' # str | Additional web app properties included in the response (optional)

    try:
        # Get details of a web app
        api_response = api_instance.sites_get_site_slot(resource_group_name, name, slot, subscription_id, api_version, properties_to_include=properties_to_include)
        print("The response of SitesApi->sites_get_site_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **properties_to_include** | **str**| Additional web app properties included in the response | [optional] 

### Return type

[**Site**](Site.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_slots**
> SiteCollection sites_get_site_slots(resource_group_name, name, subscription_id, api_version, properties_to_include=properties_to_include)

Gets all the slots for a web apps

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_collection import SiteCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    properties_to_include = 'properties_to_include_example' # str | List of app properties to include in the response (optional)

    try:
        # Gets all the slots for a web apps
        api_response = api_instance.sites_get_site_slots(resource_group_name, name, subscription_id, api_version, properties_to_include=properties_to_include)
        print("The response of SitesApi->sites_get_site_slots:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_slots: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **properties_to_include** | **str**| List of app properties to include in the response | [optional] 

### Return type

[**SiteCollection**](SiteCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_snapshots**
> object sites_get_site_snapshots(resource_group_name, name, subscription_id, api_version)

Returns all Snapshots to the user.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Webspace
    name = 'name_example' # str | Website Name
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Returns all Snapshots to the user.
        api_response = api_instance.sites_get_site_snapshots(resource_group_name, name, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_snapshots:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_snapshots: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Webspace | 
 **name** | **str**| Website Name | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_snapshots_slot**
> object sites_get_site_snapshots_slot(resource_group_name, name, slot, subscription_id, api_version)

Returns all Snapshots to the user.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Webspace
    name = 'name_example' # str | Website Name
    slot = 'slot_example' # str | Website Slot
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Returns all Snapshots to the user.
        api_response = api_instance.sites_get_site_snapshots_slot(resource_group_name, name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_snapshots_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_snapshots_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Webspace | 
 **name** | **str**| Website Name | 
 **slot** | **str**| Website Slot | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_source_control**
> SiteSourceControl sites_get_site_source_control(resource_group_name, name, subscription_id, api_version)

Get the source control configuration of web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_source_control import SiteSourceControl
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get the source control configuration of web app
        api_response = api_instance.sites_get_site_source_control(resource_group_name, name, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_source_control:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_source_control: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**SiteSourceControl**](SiteSourceControl.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_source_control_slot**
> SiteSourceControl sites_get_site_source_control_slot(resource_group_name, name, slot, subscription_id, api_version)

Get the source control configuration of web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_source_control import SiteSourceControl
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get the source control configuration of web app
        api_response = api_instance.sites_get_site_source_control_slot(resource_group_name, name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_source_control_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_source_control_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**SiteSourceControl**](SiteSourceControl.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_usages**
> CsmUsageQuotaCollection sites_get_site_usages(resource_group_name, name, subscription_id, api_version, filter=filter)

Gets the quota usage numbers for web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.csm_usage_quota_collection import CsmUsageQuotaCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    filter = 'filter_example' # str | Return only usages specified in the filter. Filter is specified by using OData syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'. (optional)

    try:
        # Gets the quota usage numbers for web app
        api_response = api_instance.sites_get_site_usages(resource_group_name, name, subscription_id, api_version, filter=filter)
        print("The response of SitesApi->sites_get_site_usages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_usages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **filter** | **str**| Return only usages specified in the filter. Filter is specified by using OData syntax. Example: $filter&#x3D;(name.value eq &#39;Metric1&#39; or name.value eq &#39;Metric2&#39;) and startTime eq &#39;2014-01-01T00:00:00Z&#39; and endTime eq &#39;2014-12-31T23:59:59Z&#39; and timeGrain eq duration&#39;[Hour|Minute|Day]&#39;. | [optional] 

### Return type

[**CsmUsageQuotaCollection**](CsmUsageQuotaCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_usages_slot**
> CsmUsageQuotaCollection sites_get_site_usages_slot(resource_group_name, name, slot, subscription_id, api_version, filter=filter)

Gets the quota usage numbers for web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.csm_usage_quota_collection import CsmUsageQuotaCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    filter = 'filter_example' # str | Return only usages specified in the filter. Filter is specified by using OData syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq '2014-01-01T00:00:00Z' and endTime eq '2014-12-31T23:59:59Z' and timeGrain eq duration'[Hour|Minute|Day]'. (optional)

    try:
        # Gets the quota usage numbers for web app
        api_response = api_instance.sites_get_site_usages_slot(resource_group_name, name, slot, subscription_id, api_version, filter=filter)
        print("The response of SitesApi->sites_get_site_usages_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_usages_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **filter** | **str**| Return only usages specified in the filter. Filter is specified by using OData syntax. Example: $filter&#x3D;(name.value eq &#39;Metric1&#39; or name.value eq &#39;Metric2&#39;) and startTime eq &#39;2014-01-01T00:00:00Z&#39; and endTime eq &#39;2014-12-31T23:59:59Z&#39; and timeGrain eq duration&#39;[Hour|Minute|Day]&#39;. | [optional] 

### Return type

[**CsmUsageQuotaCollection**](CsmUsageQuotaCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_vnet_connection**
> VnetInfo sites_get_site_vnet_connection(resource_group_name, name, vnet_name, subscription_id, api_version)

Retrieves a specific Virtual Network Connection associated with this web app.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vnet_info import VnetInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    vnet_name = 'vnet_name_example' # str | The name of the Virtual Network
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Retrieves a specific Virtual Network Connection associated with this web app.
        api_response = api_instance.sites_get_site_vnet_connection(resource_group_name, name, vnet_name, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_vnet_connection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_vnet_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **vnet_name** | **str**| The name of the Virtual Network | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**VnetInfo**](VnetInfo.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_vnet_connection_slot**
> VnetInfo sites_get_site_vnet_connection_slot(resource_group_name, name, vnet_name, slot, subscription_id, api_version)

Retrieves a specific Virtual Network Connection associated with this web app.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vnet_info import VnetInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    vnet_name = 'vnet_name_example' # str | The name of the Virtual Network
    slot = 'slot_example' # str | The name of the slot for this web app.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Retrieves a specific Virtual Network Connection associated with this web app.
        api_response = api_instance.sites_get_site_vnet_connection_slot(resource_group_name, name, vnet_name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_vnet_connection_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_vnet_connection_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **vnet_name** | **str**| The name of the Virtual Network | 
 **slot** | **str**| The name of the slot for this web app. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**VnetInfo**](VnetInfo.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_vnet_connections**
> List[VnetInfo] sites_get_site_vnet_connections(resource_group_name, name, subscription_id, api_version)

Retrieves a list of all Virtual Network Connections associated with this web app.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vnet_info import VnetInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Retrieves a list of all Virtual Network Connections associated with this web app.
        api_response = api_instance.sites_get_site_vnet_connections(resource_group_name, name, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_vnet_connections:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_vnet_connections: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**List[VnetInfo]**](VnetInfo.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_vnet_connections_slot**
> List[VnetInfo] sites_get_site_vnet_connections_slot(resource_group_name, name, slot, subscription_id, api_version)

Retrieves a list of all Virtual Network Connections associated with this web app.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vnet_info import VnetInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    slot = 'slot_example' # str | The name of the slot for this web app.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Retrieves a list of all Virtual Network Connections associated with this web app.
        api_response = api_instance.sites_get_site_vnet_connections_slot(resource_group_name, name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_vnet_connections_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_vnet_connections_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **slot** | **str**| The name of the slot for this web app. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**List[VnetInfo]**](VnetInfo.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_vnet_gateway**
> object sites_get_site_vnet_gateway(resource_group_name, name, vnet_name, gateway_name, subscription_id, api_version)

Retrieves a Virtual Network connection gateway associated with this web app and virtual network.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    vnet_name = 'vnet_name_example' # str | The name of the Virtual Network
    gateway_name = 'gateway_name_example' # str | The name of the gateway. The only gateway that exists presently is \"primary\"
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Retrieves a Virtual Network connection gateway associated with this web app and virtual network.
        api_response = api_instance.sites_get_site_vnet_gateway(resource_group_name, name, vnet_name, gateway_name, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_vnet_gateway:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_vnet_gateway: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **vnet_name** | **str**| The name of the Virtual Network | 
 **gateway_name** | **str**| The name of the gateway. The only gateway that exists presently is \&quot;primary\&quot; | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Gateway does not exist. Only the \&quot;primary\&quot; gateway exists presently. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_site_vnet_gateway_slot**
> object sites_get_site_vnet_gateway_slot(resource_group_name, name, vnet_name, gateway_name, slot, subscription_id, api_version)

Retrieves a Virtual Network connection gateway associated with this web app and virtual network.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    vnet_name = 'vnet_name_example' # str | The name of the Virtual Network
    gateway_name = 'gateway_name_example' # str | The name of the gateway. The only gateway that exists presently is \"primary\"
    slot = 'slot_example' # str | The name of the slot for this web app.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Retrieves a Virtual Network connection gateway associated with this web app and virtual network.
        api_response = api_instance.sites_get_site_vnet_gateway_slot(resource_group_name, name, vnet_name, gateway_name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_get_site_vnet_gateway_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_site_vnet_gateway_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **vnet_name** | **str**| The name of the Virtual Network | 
 **gateway_name** | **str**| The name of the gateway. The only gateway that exists presently is \&quot;primary\&quot; | 
 **slot** | **str**| The name of the slot for this web app. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Gateway does not exist. Only the \&quot;primary\&quot; gateway exists presently. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_sites**
> SiteCollection sites_get_sites(resource_group_name, subscription_id, api_version, properties_to_include=properties_to_include, include_site_types=include_site_types, include_slots=include_slots)

Gets the web apps for a subscription in the specified resource group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_collection import SiteCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    properties_to_include = 'properties_to_include_example' # str | Additional web app properties included in the response (optional)
    include_site_types = 'include_site_types_example' # str | Types of apps included in the response (optional)
    include_slots = True # bool | Whether or not to include deployments slots in results (optional)

    try:
        # Gets the web apps for a subscription in the specified resource group
        api_response = api_instance.sites_get_sites(resource_group_name, subscription_id, api_version, properties_to_include=properties_to_include, include_site_types=include_site_types, include_slots=include_slots)
        print("The response of SitesApi->sites_get_sites:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_sites: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **properties_to_include** | **str**| Additional web app properties included in the response | [optional] 
 **include_site_types** | **str**| Types of apps included in the response | [optional] 
 **include_slots** | **bool**| Whether or not to include deployments slots in results | [optional] 

### Return type

[**SiteCollection**](SiteCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_slot_config_names**
> SlotConfigNamesResource sites_get_slot_config_names(resource_group_name, name, subscription_id, api_version)

Gets the names of application settings and connection string that remain with the slot during swap operation

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.slot_config_names_resource import SlotConfigNamesResource
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the names of application settings and connection string that remain with the slot during swap operation
        api_response = api_instance.sites_get_slot_config_names(resource_group_name, name, subscription_id, api_version)
        print("The response of SitesApi->sites_get_slot_config_names:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_slot_config_names: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**SlotConfigNamesResource**](SlotConfigNamesResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_slots_differences_from_production**
> SlotDifferenceCollection sites_get_slots_differences_from_production(resource_group_name, name, subscription_id, api_version, slot_swap_entity)

Get the difference in configuration settings between two web app slots

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.csm_slot_entity import CsmSlotEntity
from openapi_client.models.slot_difference_collection import SlotDifferenceCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    slot_swap_entity = openapi_client.CsmSlotEntity() # CsmSlotEntity | Request body that contains the target slot name

    try:
        # Get the difference in configuration settings between two web app slots
        api_response = api_instance.sites_get_slots_differences_from_production(resource_group_name, name, subscription_id, api_version, slot_swap_entity)
        print("The response of SitesApi->sites_get_slots_differences_from_production:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_slots_differences_from_production: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **slot_swap_entity** | [**CsmSlotEntity**](CsmSlotEntity.md)| Request body that contains the target slot name | 

### Return type

[**SlotDifferenceCollection**](SlotDifferenceCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_get_slots_differences_slot**
> SlotDifferenceCollection sites_get_slots_differences_slot(resource_group_name, name, slot, subscription_id, api_version, slot_swap_entity)

Get the difference in configuration settings between two web app slots

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.csm_slot_entity import CsmSlotEntity
from openapi_client.models.slot_difference_collection import SlotDifferenceCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of the source slot
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    slot_swap_entity = openapi_client.CsmSlotEntity() # CsmSlotEntity | Request body that contains the target slot name

    try:
        # Get the difference in configuration settings between two web app slots
        api_response = api_instance.sites_get_slots_differences_slot(resource_group_name, name, slot, subscription_id, api_version, slot_swap_entity)
        print("The response of SitesApi->sites_get_slots_differences_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_get_slots_differences_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of the source slot | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **slot_swap_entity** | [**CsmSlotEntity**](CsmSlotEntity.md)| Request body that contains the target slot name | 

### Return type

[**SlotDifferenceCollection**](SlotDifferenceCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_is_site_cloneable**
> SiteCloneability sites_is_site_cloneable(resource_group_name, name, subscription_id, api_version)

Creates a new web app or modifies an existing web app.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_cloneability import SiteCloneability
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group
    name = 'name_example' # str | Name of the web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Creates a new web app or modifies an existing web app.
        api_response = api_instance.sites_is_site_cloneable(resource_group_name, name, subscription_id, api_version)
        print("The response of SitesApi->sites_is_site_cloneable:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_is_site_cloneable: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group | 
 **name** | **str**| Name of the web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**SiteCloneability**](SiteCloneability.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_is_site_cloneable_slot**
> SiteCloneability sites_is_site_cloneable_slot(resource_group_name, name, slot, subscription_id, api_version)

Creates a new web app or modifies an existing web app.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_cloneability import SiteCloneability
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group
    name = 'name_example' # str | Name of the web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Creates a new web app or modifies an existing web app.
        api_response = api_instance.sites_is_site_cloneable_slot(resource_group_name, name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_is_site_cloneable_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_is_site_cloneable_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group | 
 **name** | **str**| Name of the web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**SiteCloneability**](SiteCloneability.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_list_site_app_settings**
> StringDictionary sites_list_site_app_settings(resource_group_name, name, subscription_id, api_version)

Gets the application settings of web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.string_dictionary import StringDictionary
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the application settings of web app
        api_response = api_instance.sites_list_site_app_settings(resource_group_name, name, subscription_id, api_version)
        print("The response of SitesApi->sites_list_site_app_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_list_site_app_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**StringDictionary**](StringDictionary.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_list_site_app_settings_slot**
> StringDictionary sites_list_site_app_settings_slot(resource_group_name, name, slot, subscription_id, api_version)

Gets the application settings of web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.string_dictionary import StringDictionary
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the application settings of web app
        api_response = api_instance.sites_list_site_app_settings_slot(resource_group_name, name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_list_site_app_settings_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_list_site_app_settings_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**StringDictionary**](StringDictionary.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_list_site_auth_settings**
> SiteAuthSettings sites_list_site_auth_settings(resource_group_name, name, subscription_id, api_version)

Gets the Authentication / Authorization settings associated with web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_auth_settings import SiteAuthSettings
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the Authentication / Authorization settings associated with web app
        api_response = api_instance.sites_list_site_auth_settings(resource_group_name, name, subscription_id, api_version)
        print("The response of SitesApi->sites_list_site_auth_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_list_site_auth_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**SiteAuthSettings**](SiteAuthSettings.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_list_site_auth_settings_slot**
> SiteAuthSettings sites_list_site_auth_settings_slot(resource_group_name, name, slot, subscription_id, api_version)

Gets the Authentication / Authorization settings associated with web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_auth_settings import SiteAuthSettings
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the Authentication / Authorization settings associated with web app
        api_response = api_instance.sites_list_site_auth_settings_slot(resource_group_name, name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_list_site_auth_settings_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_list_site_auth_settings_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**SiteAuthSettings**](SiteAuthSettings.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_list_site_backups**
> BackupItemCollection sites_list_site_backups(resource_group_name, name, subscription_id, api_version)

Lists all available backups for web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_item_collection import BackupItemCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Lists all available backups for web app
        api_response = api_instance.sites_list_site_backups(resource_group_name, name, subscription_id, api_version)
        print("The response of SitesApi->sites_list_site_backups:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_list_site_backups: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**BackupItemCollection**](BackupItemCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_list_site_backups_slot**
> BackupItemCollection sites_list_site_backups_slot(resource_group_name, name, slot, subscription_id, api_version)

Lists all available backups for web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_item_collection import BackupItemCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Lists all available backups for web app
        api_response = api_instance.sites_list_site_backups_slot(resource_group_name, name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_list_site_backups_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_list_site_backups_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**BackupItemCollection**](BackupItemCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_list_site_connection_strings**
> ConnectionStringDictionary sites_list_site_connection_strings(resource_group_name, name, subscription_id, api_version)

Gets the connection strings associated with web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connection_string_dictionary import ConnectionStringDictionary
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the connection strings associated with web app
        api_response = api_instance.sites_list_site_connection_strings(resource_group_name, name, subscription_id, api_version)
        print("The response of SitesApi->sites_list_site_connection_strings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_list_site_connection_strings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**ConnectionStringDictionary**](ConnectionStringDictionary.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_list_site_connection_strings_slot**
> ConnectionStringDictionary sites_list_site_connection_strings_slot(resource_group_name, name, slot, subscription_id, api_version)

Gets the connection strings associated with web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connection_string_dictionary import ConnectionStringDictionary
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the connection strings associated with web app
        api_response = api_instance.sites_list_site_connection_strings_slot(resource_group_name, name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_list_site_connection_strings_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_list_site_connection_strings_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**ConnectionStringDictionary**](ConnectionStringDictionary.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_list_site_metadata**
> StringDictionary sites_list_site_metadata(resource_group_name, name, subscription_id, api_version)

Gets the web app meta data.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.string_dictionary import StringDictionary
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the web app meta data.
        api_response = api_instance.sites_list_site_metadata(resource_group_name, name, subscription_id, api_version)
        print("The response of SitesApi->sites_list_site_metadata:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_list_site_metadata: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**StringDictionary**](StringDictionary.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_list_site_metadata_slot**
> StringDictionary sites_list_site_metadata_slot(resource_group_name, name, slot, subscription_id, api_version)

Gets the web app meta data.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.string_dictionary import StringDictionary
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the web app meta data.
        api_response = api_instance.sites_list_site_metadata_slot(resource_group_name, name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_list_site_metadata_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_list_site_metadata_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**StringDictionary**](StringDictionary.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_list_site_premier_add_ons**
> object sites_list_site_premier_add_ons(resource_group_name, name, subscription_id, api_version)



### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | 
    name = 'name_example' # str | 
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        api_response = api_instance.sites_list_site_premier_add_ons(resource_group_name, name, subscription_id, api_version)
        print("The response of SitesApi->sites_list_site_premier_add_ons:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_list_site_premier_add_ons: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**|  | 
 **name** | **str**|  | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_list_site_premier_add_ons_slot**
> object sites_list_site_premier_add_ons_slot(resource_group_name, name, slot, subscription_id, api_version)



### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | 
    name = 'name_example' # str | 
    slot = 'slot_example' # str | 
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        api_response = api_instance.sites_list_site_premier_add_ons_slot(resource_group_name, name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_list_site_premier_add_ons_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_list_site_premier_add_ons_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**|  | 
 **name** | **str**|  | 
 **slot** | **str**|  | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_list_site_publishing_credentials**
> User sites_list_site_publishing_credentials(resource_group_name, name, subscription_id, api_version)

Gets the web app publishing credentials

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the web app publishing credentials
        api_response = api_instance.sites_list_site_publishing_credentials(resource_group_name, name, subscription_id, api_version)
        print("The response of SitesApi->sites_list_site_publishing_credentials:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_list_site_publishing_credentials: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**User**](User.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_list_site_publishing_credentials_slot**
> User sites_list_site_publishing_credentials_slot(resource_group_name, name, slot, subscription_id, api_version)

Gets the web app publishing credentials

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the web app publishing credentials
        api_response = api_instance.sites_list_site_publishing_credentials_slot(resource_group_name, name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_list_site_publishing_credentials_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_list_site_publishing_credentials_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**User**](User.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_list_site_publishing_profile_xml**
> bytearray sites_list_site_publishing_profile_xml(resource_group_name, name, subscription_id, api_version, options)

Gets the publishing profile for web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.csm_publishing_profile_options import CsmPublishingProfileOptions
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    options = openapi_client.CsmPublishingProfileOptions() # CsmPublishingProfileOptions | Specifies options for publishing profile. Pass CsmPublishingProfileOptions.Format=FileZilla3 for FileZilla FTP format.

    try:
        # Gets the publishing profile for web app
        api_response = api_instance.sites_list_site_publishing_profile_xml(resource_group_name, name, subscription_id, api_version, options)
        print("The response of SitesApi->sites_list_site_publishing_profile_xml:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_list_site_publishing_profile_xml: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **options** | [**CsmPublishingProfileOptions**](CsmPublishingProfileOptions.md)| Specifies options for publishing profile. Pass CsmPublishingProfileOptions.Format&#x3D;FileZilla3 for FileZilla FTP format. | 

### Return type

**bytearray**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_list_site_publishing_profile_xml_slot**
> bytearray sites_list_site_publishing_profile_xml_slot(resource_group_name, name, slot, subscription_id, api_version, options)

Gets the publishing profile for web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.csm_publishing_profile_options import CsmPublishingProfileOptions
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    options = openapi_client.CsmPublishingProfileOptions() # CsmPublishingProfileOptions | Specifies options for publishing profile. Pass CsmPublishingProfileOptions.Format=FileZilla3 for FileZilla FTP format.

    try:
        # Gets the publishing profile for web app
        api_response = api_instance.sites_list_site_publishing_profile_xml_slot(resource_group_name, name, slot, subscription_id, api_version, options)
        print("The response of SitesApi->sites_list_site_publishing_profile_xml_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_list_site_publishing_profile_xml_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **options** | [**CsmPublishingProfileOptions**](CsmPublishingProfileOptions.md)| Specifies options for publishing profile. Pass CsmPublishingProfileOptions.Format&#x3D;FileZilla3 for FileZilla FTP format. | 

### Return type

**bytearray**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_list_site_relay_service_connections**
> RelayServiceConnectionEntity sites_list_site_relay_service_connections(resource_group_name, name, subscription_id, api_version)

Retrieves all BizTalk Hybrid Connections associated with this web app.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.relay_service_connection_entity import RelayServiceConnectionEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Retrieves all BizTalk Hybrid Connections associated with this web app.
        api_response = api_instance.sites_list_site_relay_service_connections(resource_group_name, name, subscription_id, api_version)
        print("The response of SitesApi->sites_list_site_relay_service_connections:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_list_site_relay_service_connections: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**RelayServiceConnectionEntity**](RelayServiceConnectionEntity.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_list_site_relay_service_connections_slot**
> RelayServiceConnectionEntity sites_list_site_relay_service_connections_slot(resource_group_name, name, slot, subscription_id, api_version)

Retrieves all BizTalk Hybrid Connections associated with this web app.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.relay_service_connection_entity import RelayServiceConnectionEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    slot = 'slot_example' # str | The name of the slot for the web app.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Retrieves all BizTalk Hybrid Connections associated with this web app.
        api_response = api_instance.sites_list_site_relay_service_connections_slot(resource_group_name, name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_list_site_relay_service_connections_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_list_site_relay_service_connections_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **slot** | **str**| The name of the slot for the web app. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**RelayServiceConnectionEntity**](RelayServiceConnectionEntity.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_recover_site**
> Site sites_recover_site(resource_group_name, name, subscription_id, api_version, recovery_entity)

Recovers a deleted web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.csm_site_recovery_entity import CsmSiteRecoveryEntity
from openapi_client.models.site import Site
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    recovery_entity = openapi_client.CsmSiteRecoveryEntity() # CsmSiteRecoveryEntity | Snapshot data used for web app recovery. Snapshot information can be obtained by calling GetDeletedSites or GetSiteSnapshots API.

    try:
        # Recovers a deleted web app
        api_response = api_instance.sites_recover_site(resource_group_name, name, subscription_id, api_version, recovery_entity)
        print("The response of SitesApi->sites_recover_site:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_recover_site: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **recovery_entity** | [**CsmSiteRecoveryEntity**](CsmSiteRecoveryEntity.md)| Snapshot data used for web app recovery. Snapshot information can be obtained by calling GetDeletedSites or GetSiteSnapshots API. | 

### Return type

[**Site**](Site.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Asynchronous operation in progress |  -  |
**404** | Web app not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_recover_site_slot**
> Site sites_recover_site_slot(resource_group_name, name, slot, subscription_id, api_version, recovery_entity)

Recovers a deleted web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.csm_site_recovery_entity import CsmSiteRecoveryEntity
from openapi_client.models.site import Site
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    recovery_entity = openapi_client.CsmSiteRecoveryEntity() # CsmSiteRecoveryEntity | Snapshot data used for web app recovery. Snapshot information can be obtained by calling GetDeletedSites or GetSiteSnapshots API.

    try:
        # Recovers a deleted web app
        api_response = api_instance.sites_recover_site_slot(resource_group_name, name, slot, subscription_id, api_version, recovery_entity)
        print("The response of SitesApi->sites_recover_site_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_recover_site_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **recovery_entity** | [**CsmSiteRecoveryEntity**](CsmSiteRecoveryEntity.md)| Snapshot data used for web app recovery. Snapshot information can be obtained by calling GetDeletedSites or GetSiteSnapshots API. | 

### Return type

[**Site**](Site.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Asynchronous operation in progress |  -  |
**404** | Web app not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_reset_production_slot_config**
> object sites_reset_production_slot_config(resource_group_name, name, subscription_id, api_version)

Resets the configuration settings of the current slot if they were previously modified by calling ApplySlotConfig API

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Resets the configuration settings of the current slot if they were previously modified by calling ApplySlotConfig API
        api_response = api_instance.sites_reset_production_slot_config(resource_group_name, name, subscription_id, api_version)
        print("The response of SitesApi->sites_reset_production_slot_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_reset_production_slot_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_reset_slot_config_slot**
> object sites_reset_slot_config_slot(resource_group_name, name, slot, subscription_id, api_version)

Resets the configuration settings of the current slot if they were previously modified by calling ApplySlotConfig API

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Resets the configuration settings of the current slot if they were previously modified by calling ApplySlotConfig API
        api_response = api_instance.sites_reset_slot_config_slot(resource_group_name, name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_reset_slot_config_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_reset_slot_config_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_restart_site**
> object sites_restart_site(resource_group_name, name, subscription_id, api_version, soft_restart=soft_restart, synchronous=synchronous)

Restarts web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    soft_restart = True # bool | Soft restart applies the configuration settings and restarts the app if necessary. Hard restart always restarts and reprovisions the app (optional)
    synchronous = True # bool | If true then the API will block until the app has been restarted (optional)

    try:
        # Restarts web app
        api_response = api_instance.sites_restart_site(resource_group_name, name, subscription_id, api_version, soft_restart=soft_restart, synchronous=synchronous)
        print("The response of SitesApi->sites_restart_site:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_restart_site: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **soft_restart** | **bool**| Soft restart applies the configuration settings and restarts the app if necessary. Hard restart always restarts and reprovisions the app | [optional] 
 **synchronous** | **bool**| If true then the API will block until the app has been restarted | [optional] 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_restart_site_slot**
> object sites_restart_site_slot(resource_group_name, name, slot, subscription_id, api_version, soft_restart=soft_restart, synchronous=synchronous)

Restarts web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    soft_restart = True # bool | Soft restart applies the configuration settings and restarts the app if necessary. Hard restart always restarts and reprovisions the app (optional)
    synchronous = True # bool | If true then the API will block until the app has been restarted (optional)

    try:
        # Restarts web app
        api_response = api_instance.sites_restart_site_slot(resource_group_name, name, slot, subscription_id, api_version, soft_restart=soft_restart, synchronous=synchronous)
        print("The response of SitesApi->sites_restart_site_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_restart_site_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **soft_restart** | **bool**| Soft restart applies the configuration settings and restarts the app if necessary. Hard restart always restarts and reprovisions the app | [optional] 
 **synchronous** | **bool**| If true then the API will block until the app has been restarted | [optional] 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_restore_site**
> RestoreResponse sites_restore_site(resource_group_name, name, backup_id, subscription_id, api_version, request)

Restores a web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.restore_request import RestoreRequest
from openapi_client.models.restore_response import RestoreResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    backup_id = 'backup_id_example' # str | Id of backup to restore
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    request = openapi_client.RestoreRequest() # RestoreRequest | Information on restore request

    try:
        # Restores a web app
        api_response = api_instance.sites_restore_site(resource_group_name, name, backup_id, subscription_id, api_version, request)
        print("The response of SitesApi->sites_restore_site:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_restore_site: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **backup_id** | **str**| Id of backup to restore | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **request** | [**RestoreRequest**](RestoreRequest.md)| Information on restore request | 

### Return type

[**RestoreResponse**](RestoreResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_restore_site_slot**
> RestoreResponse sites_restore_site_slot(resource_group_name, name, backup_id, slot, subscription_id, api_version, request)

Restores a web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.restore_request import RestoreRequest
from openapi_client.models.restore_response import RestoreResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    backup_id = 'backup_id_example' # str | Id of backup to restore
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    request = openapi_client.RestoreRequest() # RestoreRequest | Information on restore request

    try:
        # Restores a web app
        api_response = api_instance.sites_restore_site_slot(resource_group_name, name, backup_id, slot, subscription_id, api_version, request)
        print("The response of SitesApi->sites_restore_site_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_restore_site_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **backup_id** | **str**| Id of backup to restore | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **request** | [**RestoreRequest**](RestoreRequest.md)| Information on restore request | 

### Return type

[**RestoreResponse**](RestoreResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_start_site**
> object sites_start_site(resource_group_name, name, subscription_id, api_version)

Starts web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Starts web app
        api_response = api_instance.sites_start_site(resource_group_name, name, subscription_id, api_version)
        print("The response of SitesApi->sites_start_site:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_start_site: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_start_site_slot**
> object sites_start_site_slot(resource_group_name, name, slot, subscription_id, api_version)

Starts web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Starts web app
        api_response = api_instance.sites_start_site_slot(resource_group_name, name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_start_site_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_start_site_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_stop_site**
> object sites_stop_site(resource_group_name, name, subscription_id, api_version)

Stops web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Stops web app
        api_response = api_instance.sites_stop_site(resource_group_name, name, subscription_id, api_version)
        print("The response of SitesApi->sites_stop_site:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_stop_site: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_stop_site_slot**
> object sites_stop_site_slot(resource_group_name, name, slot, subscription_id, api_version)

Stops web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Stops web app
        api_response = api_instance.sites_stop_site_slot(resource_group_name, name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_stop_site_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_stop_site_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_swap_slot_with_production**
> object sites_swap_slot_with_production(resource_group_name, name, subscription_id, api_version, slot_swap_entity)

Swaps web app slots

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.csm_slot_entity import CsmSlotEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    slot_swap_entity = openapi_client.CsmSlotEntity() # CsmSlotEntity | Request body that contains the target slot name

    try:
        # Swaps web app slots
        api_response = api_instance.sites_swap_slot_with_production(resource_group_name, name, subscription_id, api_version, slot_swap_entity)
        print("The response of SitesApi->sites_swap_slot_with_production:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_swap_slot_with_production: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **slot_swap_entity** | [**CsmSlotEntity**](CsmSlotEntity.md)| Request body that contains the target slot name | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Operation is in progress |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_swap_slots_slot**
> object sites_swap_slots_slot(resource_group_name, name, slot, subscription_id, api_version, slot_swap_entity)

Swaps web app slots

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.csm_slot_entity import CsmSlotEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of source slot for the swap
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    slot_swap_entity = openapi_client.CsmSlotEntity() # CsmSlotEntity | Request body that contains the target slot name

    try:
        # Swaps web app slots
        api_response = api_instance.sites_swap_slots_slot(resource_group_name, name, slot, subscription_id, api_version, slot_swap_entity)
        print("The response of SitesApi->sites_swap_slots_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_swap_slots_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of source slot for the swap | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **slot_swap_entity** | [**CsmSlotEntity**](CsmSlotEntity.md)| Request body that contains the target slot name | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Operation is in progress |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_sync_site_repository**
> object sites_sync_site_repository(resource_group_name, name, subscription_id, api_version)



### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | 
    name = 'name_example' # str | 
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        api_response = api_instance.sites_sync_site_repository(resource_group_name, name, subscription_id, api_version)
        print("The response of SitesApi->sites_sync_site_repository:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_sync_site_repository: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**|  | 
 **name** | **str**|  | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_sync_site_repository_slot**
> object sites_sync_site_repository_slot(resource_group_name, name, slot, subscription_id, api_version)



### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | 
    name = 'name_example' # str | 
    slot = 'slot_example' # str | 
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        api_response = api_instance.sites_sync_site_repository_slot(resource_group_name, name, slot, subscription_id, api_version)
        print("The response of SitesApi->sites_sync_site_repository_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_sync_site_repository_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**|  | 
 **name** | **str**|  | 
 **slot** | **str**|  | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_update_site_app_settings**
> StringDictionary sites_update_site_app_settings(resource_group_name, name, subscription_id, api_version, app_settings)

Updates the application settings of web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.string_dictionary import StringDictionary
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    app_settings = openapi_client.StringDictionary() # StringDictionary | Application settings of web app

    try:
        # Updates the application settings of web app
        api_response = api_instance.sites_update_site_app_settings(resource_group_name, name, subscription_id, api_version, app_settings)
        print("The response of SitesApi->sites_update_site_app_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_update_site_app_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **app_settings** | [**StringDictionary**](StringDictionary.md)| Application settings of web app | 

### Return type

[**StringDictionary**](StringDictionary.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_update_site_app_settings_slot**
> StringDictionary sites_update_site_app_settings_slot(resource_group_name, name, slot, subscription_id, api_version, app_settings)

Updates the application settings of web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.string_dictionary import StringDictionary
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    app_settings = openapi_client.StringDictionary() # StringDictionary | Application settings of web app

    try:
        # Updates the application settings of web app
        api_response = api_instance.sites_update_site_app_settings_slot(resource_group_name, name, slot, subscription_id, api_version, app_settings)
        print("The response of SitesApi->sites_update_site_app_settings_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_update_site_app_settings_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **app_settings** | [**StringDictionary**](StringDictionary.md)| Application settings of web app | 

### Return type

[**StringDictionary**](StringDictionary.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_update_site_auth_settings**
> SiteAuthSettings sites_update_site_auth_settings(resource_group_name, name, subscription_id, api_version, site_auth_settings)

Updates the Authentication / Authorization settings associated with web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_auth_settings import SiteAuthSettings
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    site_auth_settings = openapi_client.SiteAuthSettings() # SiteAuthSettings | Auth settings associated with web app

    try:
        # Updates the Authentication / Authorization settings associated with web app
        api_response = api_instance.sites_update_site_auth_settings(resource_group_name, name, subscription_id, api_version, site_auth_settings)
        print("The response of SitesApi->sites_update_site_auth_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_update_site_auth_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **site_auth_settings** | [**SiteAuthSettings**](SiteAuthSettings.md)| Auth settings associated with web app | 

### Return type

[**SiteAuthSettings**](SiteAuthSettings.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_update_site_auth_settings_slot**
> SiteAuthSettings sites_update_site_auth_settings_slot(resource_group_name, name, slot, subscription_id, api_version, site_auth_settings)

Updates the Authentication / Authorization settings associated with web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_auth_settings import SiteAuthSettings
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    site_auth_settings = openapi_client.SiteAuthSettings() # SiteAuthSettings | Auth settings associated with web app

    try:
        # Updates the Authentication / Authorization settings associated with web app
        api_response = api_instance.sites_update_site_auth_settings_slot(resource_group_name, name, slot, subscription_id, api_version, site_auth_settings)
        print("The response of SitesApi->sites_update_site_auth_settings_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_update_site_auth_settings_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **site_auth_settings** | [**SiteAuthSettings**](SiteAuthSettings.md)| Auth settings associated with web app | 

### Return type

[**SiteAuthSettings**](SiteAuthSettings.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_update_site_backup_configuration**
> BackupRequest sites_update_site_backup_configuration(resource_group_name, name, subscription_id, api_version, request)

Updates backup configuration of web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_request import BackupRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    request = openapi_client.BackupRequest() # BackupRequest | Information on backup request

    try:
        # Updates backup configuration of web app
        api_response = api_instance.sites_update_site_backup_configuration(resource_group_name, name, subscription_id, api_version, request)
        print("The response of SitesApi->sites_update_site_backup_configuration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_update_site_backup_configuration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **request** | [**BackupRequest**](BackupRequest.md)| Information on backup request | 

### Return type

[**BackupRequest**](BackupRequest.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_update_site_backup_configuration_slot**
> BackupRequest sites_update_site_backup_configuration_slot(resource_group_name, name, slot, subscription_id, api_version, request)

Updates backup configuration of web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_request import BackupRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    request = openapi_client.BackupRequest() # BackupRequest | Information on backup request

    try:
        # Updates backup configuration of web app
        api_response = api_instance.sites_update_site_backup_configuration_slot(resource_group_name, name, slot, subscription_id, api_version, request)
        print("The response of SitesApi->sites_update_site_backup_configuration_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_update_site_backup_configuration_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **request** | [**BackupRequest**](BackupRequest.md)| Information on backup request | 

### Return type

[**BackupRequest**](BackupRequest.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_update_site_config**
> SiteConfig sites_update_site_config(resource_group_name, name, subscription_id, api_version, site_config)

Update the configuration of web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_config import SiteConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    site_config = openapi_client.SiteConfig() # SiteConfig | Request body that contains the configuration setting for the web app

    try:
        # Update the configuration of web app
        api_response = api_instance.sites_update_site_config(resource_group_name, name, subscription_id, api_version, site_config)
        print("The response of SitesApi->sites_update_site_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_update_site_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **site_config** | [**SiteConfig**](SiteConfig.md)| Request body that contains the configuration setting for the web app | 

### Return type

[**SiteConfig**](SiteConfig.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_update_site_config_slot**
> SiteConfig sites_update_site_config_slot(resource_group_name, name, slot, subscription_id, api_version, site_config)

Update the configuration of web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_config import SiteConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    site_config = openapi_client.SiteConfig() # SiteConfig | Request body that contains the configuration setting for the web app

    try:
        # Update the configuration of web app
        api_response = api_instance.sites_update_site_config_slot(resource_group_name, name, slot, subscription_id, api_version, site_config)
        print("The response of SitesApi->sites_update_site_config_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_update_site_config_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **site_config** | [**SiteConfig**](SiteConfig.md)| Request body that contains the configuration setting for the web app | 

### Return type

[**SiteConfig**](SiteConfig.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_update_site_connection_strings**
> ConnectionStringDictionary sites_update_site_connection_strings(resource_group_name, name, subscription_id, api_version, connection_strings)

Updates the connection strings associated with web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connection_string_dictionary import ConnectionStringDictionary
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    connection_strings = openapi_client.ConnectionStringDictionary() # ConnectionStringDictionary | Connection strings associated with web app

    try:
        # Updates the connection strings associated with web app
        api_response = api_instance.sites_update_site_connection_strings(resource_group_name, name, subscription_id, api_version, connection_strings)
        print("The response of SitesApi->sites_update_site_connection_strings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_update_site_connection_strings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **connection_strings** | [**ConnectionStringDictionary**](ConnectionStringDictionary.md)| Connection strings associated with web app | 

### Return type

[**ConnectionStringDictionary**](ConnectionStringDictionary.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_update_site_connection_strings_slot**
> ConnectionStringDictionary sites_update_site_connection_strings_slot(resource_group_name, name, slot, subscription_id, api_version, connection_strings)

Updates the connection strings associated with web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connection_string_dictionary import ConnectionStringDictionary
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    connection_strings = openapi_client.ConnectionStringDictionary() # ConnectionStringDictionary | Connection strings associated with web app

    try:
        # Updates the connection strings associated with web app
        api_response = api_instance.sites_update_site_connection_strings_slot(resource_group_name, name, slot, subscription_id, api_version, connection_strings)
        print("The response of SitesApi->sites_update_site_connection_strings_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_update_site_connection_strings_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **connection_strings** | [**ConnectionStringDictionary**](ConnectionStringDictionary.md)| Connection strings associated with web app | 

### Return type

[**ConnectionStringDictionary**](ConnectionStringDictionary.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_update_site_logs_config**
> SiteLogsConfig sites_update_site_logs_config(resource_group_name, name, subscription_id, api_version, site_logs_config)

Updates the meta data for web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_logs_config import SiteLogsConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    site_logs_config = openapi_client.SiteLogsConfig() # SiteLogsConfig | Site logs configuration

    try:
        # Updates the meta data for web app
        api_response = api_instance.sites_update_site_logs_config(resource_group_name, name, subscription_id, api_version, site_logs_config)
        print("The response of SitesApi->sites_update_site_logs_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_update_site_logs_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **site_logs_config** | [**SiteLogsConfig**](SiteLogsConfig.md)| Site logs configuration | 

### Return type

[**SiteLogsConfig**](SiteLogsConfig.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_update_site_logs_config_slot**
> SiteLogsConfig sites_update_site_logs_config_slot(resource_group_name, name, slot, subscription_id, api_version, site_logs_config)

Updates the meta data for web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_logs_config import SiteLogsConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    site_logs_config = openapi_client.SiteLogsConfig() # SiteLogsConfig | Site logs configuration

    try:
        # Updates the meta data for web app
        api_response = api_instance.sites_update_site_logs_config_slot(resource_group_name, name, slot, subscription_id, api_version, site_logs_config)
        print("The response of SitesApi->sites_update_site_logs_config_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_update_site_logs_config_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **site_logs_config** | [**SiteLogsConfig**](SiteLogsConfig.md)| Site logs configuration | 

### Return type

[**SiteLogsConfig**](SiteLogsConfig.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_update_site_metadata**
> StringDictionary sites_update_site_metadata(resource_group_name, name, subscription_id, api_version, metadata)

Updates the meta data for web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.string_dictionary import StringDictionary
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    metadata = openapi_client.StringDictionary() # StringDictionary | Meta data of web app

    try:
        # Updates the meta data for web app
        api_response = api_instance.sites_update_site_metadata(resource_group_name, name, subscription_id, api_version, metadata)
        print("The response of SitesApi->sites_update_site_metadata:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_update_site_metadata: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **metadata** | [**StringDictionary**](StringDictionary.md)| Meta data of web app | 

### Return type

[**StringDictionary**](StringDictionary.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_update_site_metadata_slot**
> StringDictionary sites_update_site_metadata_slot(resource_group_name, name, slot, subscription_id, api_version, metadata)

Updates the meta data for web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.string_dictionary import StringDictionary
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    metadata = openapi_client.StringDictionary() # StringDictionary | Meta data of web app

    try:
        # Updates the meta data for web app
        api_response = api_instance.sites_update_site_metadata_slot(resource_group_name, name, slot, subscription_id, api_version, metadata)
        print("The response of SitesApi->sites_update_site_metadata_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_update_site_metadata_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **metadata** | [**StringDictionary**](StringDictionary.md)| Meta data of web app | 

### Return type

[**StringDictionary**](StringDictionary.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_update_site_relay_service_connection**
> RelayServiceConnectionEntity sites_update_site_relay_service_connection(resource_group_name, name, entity_name, subscription_id, api_version, connection_envelope)

Creates a new association to a BizTalk Hybrid Connection, or updates an existing one.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.relay_service_connection_entity import RelayServiceConnectionEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    entity_name = 'entity_name_example' # str | The name by which the Hybrid Connection is identified
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    connection_envelope = openapi_client.RelayServiceConnectionEntity() # RelayServiceConnectionEntity | The details of the Hybrid Connection

    try:
        # Creates a new association to a BizTalk Hybrid Connection, or updates an existing one.
        api_response = api_instance.sites_update_site_relay_service_connection(resource_group_name, name, entity_name, subscription_id, api_version, connection_envelope)
        print("The response of SitesApi->sites_update_site_relay_service_connection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_update_site_relay_service_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **entity_name** | **str**| The name by which the Hybrid Connection is identified | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **connection_envelope** | [**RelayServiceConnectionEntity**](RelayServiceConnectionEntity.md)| The details of the Hybrid Connection | 

### Return type

[**RelayServiceConnectionEntity**](RelayServiceConnectionEntity.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_update_site_relay_service_connection_slot**
> RelayServiceConnectionEntity sites_update_site_relay_service_connection_slot(resource_group_name, name, entity_name, slot, subscription_id, api_version, connection_envelope)

Creates a new association to a BizTalk Hybrid Connection, or updates an existing one.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.relay_service_connection_entity import RelayServiceConnectionEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    entity_name = 'entity_name_example' # str | The name by which the Hybrid Connection is identified
    slot = 'slot_example' # str | The name of the slot for the web app.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    connection_envelope = openapi_client.RelayServiceConnectionEntity() # RelayServiceConnectionEntity | The details of the Hybrid Connection

    try:
        # Creates a new association to a BizTalk Hybrid Connection, or updates an existing one.
        api_response = api_instance.sites_update_site_relay_service_connection_slot(resource_group_name, name, entity_name, slot, subscription_id, api_version, connection_envelope)
        print("The response of SitesApi->sites_update_site_relay_service_connection_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_update_site_relay_service_connection_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **entity_name** | **str**| The name by which the Hybrid Connection is identified | 
 **slot** | **str**| The name of the slot for the web app. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **connection_envelope** | [**RelayServiceConnectionEntity**](RelayServiceConnectionEntity.md)| The details of the Hybrid Connection | 

### Return type

[**RelayServiceConnectionEntity**](RelayServiceConnectionEntity.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_update_site_source_control**
> SiteSourceControl sites_update_site_source_control(resource_group_name, name, subscription_id, api_version, site_source_control)

Update the source control configuration of web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_source_control import SiteSourceControl
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    site_source_control = openapi_client.SiteSourceControl() # SiteSourceControl | Request body that contains the source control parameters

    try:
        # Update the source control configuration of web app
        api_response = api_instance.sites_update_site_source_control(resource_group_name, name, subscription_id, api_version, site_source_control)
        print("The response of SitesApi->sites_update_site_source_control:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_update_site_source_control: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **site_source_control** | [**SiteSourceControl**](SiteSourceControl.md)| Request body that contains the source control parameters | 

### Return type

[**SiteSourceControl**](SiteSourceControl.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_update_site_source_control_slot**
> SiteSourceControl sites_update_site_source_control_slot(resource_group_name, name, slot, subscription_id, api_version, site_source_control)

Update the source control configuration of web app

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_source_control import SiteSourceControl
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    slot = 'slot_example' # str | Name of web app slot. If not specified then will default to production slot.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    site_source_control = openapi_client.SiteSourceControl() # SiteSourceControl | Request body that contains the source control parameters

    try:
        # Update the source control configuration of web app
        api_response = api_instance.sites_update_site_source_control_slot(resource_group_name, name, slot, subscription_id, api_version, site_source_control)
        print("The response of SitesApi->sites_update_site_source_control_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_update_site_source_control_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **slot** | **str**| Name of web app slot. If not specified then will default to production slot. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **site_source_control** | [**SiteSourceControl**](SiteSourceControl.md)| Request body that contains the source control parameters | 

### Return type

[**SiteSourceControl**](SiteSourceControl.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_update_site_vnet_connection**
> VnetInfo sites_update_site_vnet_connection(resource_group_name, name, vnet_name, subscription_id, api_version, connection_envelope)

Adds a Virtual Network Connection or updates it's properties.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vnet_info import VnetInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    vnet_name = 'vnet_name_example' # str | The name of the Virtual Network
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    connection_envelope = openapi_client.VnetInfo() # VnetInfo | The properties of this Virtual Network Connection

    try:
        # Adds a Virtual Network Connection or updates it's properties.
        api_response = api_instance.sites_update_site_vnet_connection(resource_group_name, name, vnet_name, subscription_id, api_version, connection_envelope)
        print("The response of SitesApi->sites_update_site_vnet_connection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_update_site_vnet_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **vnet_name** | **str**| The name of the Virtual Network | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **connection_envelope** | [**VnetInfo**](VnetInfo.md)| The properties of this Virtual Network Connection | 

### Return type

[**VnetInfo**](VnetInfo.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_update_site_vnet_connection_gateway**
> VnetGateway sites_update_site_vnet_connection_gateway(resource_group_name, name, vnet_name, gateway_name, subscription_id, api_version, connection_envelope)

Updates the Virtual Network Gateway.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vnet_gateway import VnetGateway
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    vnet_name = 'vnet_name_example' # str | The name of the Virtual Network
    gateway_name = 'gateway_name_example' # str | The name of the gateway. The only gateway that exists presently is \"primary\"
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    connection_envelope = openapi_client.VnetGateway() # VnetGateway | The properties to update this gateway with.

    try:
        # Updates the Virtual Network Gateway.
        api_response = api_instance.sites_update_site_vnet_connection_gateway(resource_group_name, name, vnet_name, gateway_name, subscription_id, api_version, connection_envelope)
        print("The response of SitesApi->sites_update_site_vnet_connection_gateway:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_update_site_vnet_connection_gateway: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **vnet_name** | **str**| The name of the Virtual Network | 
 **gateway_name** | **str**| The name of the gateway. The only gateway that exists presently is \&quot;primary\&quot; | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **connection_envelope** | [**VnetGateway**](VnetGateway.md)| The properties to update this gateway with. | 

### Return type

[**VnetGateway**](VnetGateway.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_update_site_vnet_connection_gateway_slot**
> VnetGateway sites_update_site_vnet_connection_gateway_slot(resource_group_name, name, vnet_name, gateway_name, slot, subscription_id, api_version, connection_envelope)

Updates the Virtual Network Gateway.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vnet_gateway import VnetGateway
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    vnet_name = 'vnet_name_example' # str | The name of the Virtual Network
    gateway_name = 'gateway_name_example' # str | The name of the gateway. The only gateway that exists presently is \"primary\"
    slot = 'slot_example' # str | The name of the slot for this web app.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    connection_envelope = openapi_client.VnetGateway() # VnetGateway | The properties to update this gateway with.

    try:
        # Updates the Virtual Network Gateway.
        api_response = api_instance.sites_update_site_vnet_connection_gateway_slot(resource_group_name, name, vnet_name, gateway_name, slot, subscription_id, api_version, connection_envelope)
        print("The response of SitesApi->sites_update_site_vnet_connection_gateway_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_update_site_vnet_connection_gateway_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **vnet_name** | **str**| The name of the Virtual Network | 
 **gateway_name** | **str**| The name of the gateway. The only gateway that exists presently is \&quot;primary\&quot; | 
 **slot** | **str**| The name of the slot for this web app. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **connection_envelope** | [**VnetGateway**](VnetGateway.md)| The properties to update this gateway with. | 

### Return type

[**VnetGateway**](VnetGateway.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_update_site_vnet_connection_slot**
> VnetInfo sites_update_site_vnet_connection_slot(resource_group_name, name, vnet_name, slot, subscription_id, api_version, connection_envelope)

Adds a Virtual Network Connection or updates it's properties.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vnet_info import VnetInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    name = 'name_example' # str | The name of the web app
    vnet_name = 'vnet_name_example' # str | The name of the Virtual Network
    slot = 'slot_example' # str | The name of the slot for this web app.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    connection_envelope = openapi_client.VnetInfo() # VnetInfo | The properties of this Virtual Network Connection

    try:
        # Adds a Virtual Network Connection or updates it's properties.
        api_response = api_instance.sites_update_site_vnet_connection_slot(resource_group_name, name, vnet_name, slot, subscription_id, api_version, connection_envelope)
        print("The response of SitesApi->sites_update_site_vnet_connection_slot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_update_site_vnet_connection_slot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name | 
 **name** | **str**| The name of the web app | 
 **vnet_name** | **str**| The name of the Virtual Network | 
 **slot** | **str**| The name of the slot for this web app. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **connection_envelope** | [**VnetInfo**](VnetInfo.md)| The properties of this Virtual Network Connection | 

### Return type

[**VnetInfo**](VnetInfo.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sites_update_slot_config_names**
> SlotConfigNamesResource sites_update_slot_config_names(resource_group_name, name, subscription_id, api_version, slot_config_names)

Updates the names of application settings and connection string that remain with the slot during swap operation

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.slot_config_names_resource import SlotConfigNamesResource
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SitesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of resource group
    name = 'name_example' # str | Name of web app
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    slot_config_names = openapi_client.SlotConfigNamesResource() # SlotConfigNamesResource | Request body containing the names of application settings and connection strings

    try:
        # Updates the names of application settings and connection string that remain with the slot during swap operation
        api_response = api_instance.sites_update_slot_config_names(resource_group_name, name, subscription_id, api_version, slot_config_names)
        print("The response of SitesApi->sites_update_slot_config_names:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SitesApi->sites_update_slot_config_names: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of resource group | 
 **name** | **str**| Name of web app | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **slot_config_names** | [**SlotConfigNamesResource**](SlotConfigNamesResource.md)| Request body containing the names of application settings and connection strings | 

### Return type

[**SlotConfigNamesResource**](SlotConfigNamesResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

