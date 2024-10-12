# WebAppsList200ResponseValueInnerPropertiesSiteConfig

Configuration of an App Service app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**always_on** | **bool** | &lt;code&gt;true&lt;/code&gt; if Always On is enabled; otherwise, &lt;code&gt;false&lt;/code&gt;. | [optional] 
**api_definition** | [**WebAppsList200ResponseValueInnerPropertiesSiteConfigApiDefinition**](WebAppsList200ResponseValueInnerPropertiesSiteConfigApiDefinition.md) |  | [optional] 
**api_management_config** | [**WebAppsList200ResponseValueInnerPropertiesSiteConfigApiManagementConfig**](WebAppsList200ResponseValueInnerPropertiesSiteConfigApiManagementConfig.md) |  | [optional] 
**app_command_line** | **str** | App command line to launch. | [optional] 
**app_settings** | [**List[WebAppsList200ResponseValueInnerPropertiesSiteConfigAppSettingsInner]**](WebAppsList200ResponseValueInnerPropertiesSiteConfigAppSettingsInner.md) | Application settings. | [optional] 
**auto_heal_enabled** | **bool** | &lt;code&gt;true&lt;/code&gt; if Auto Heal is enabled; otherwise, &lt;code&gt;false&lt;/code&gt;. | [optional] 
**auto_heal_rules** | [**WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRules**](WebAppsList200ResponseValueInnerPropertiesSiteConfigAutoHealRules.md) |  | [optional] 
**auto_swap_slot_name** | **str** | Auto-swap slot name. | [optional] 
**connection_strings** | [**List[WebAppsList200ResponseValueInnerPropertiesSiteConfigConnectionStringsInner]**](WebAppsList200ResponseValueInnerPropertiesSiteConfigConnectionStringsInner.md) | Connection strings. | [optional] 
**cors** | [**WebAppsList200ResponseValueInnerPropertiesSiteConfigCors**](WebAppsList200ResponseValueInnerPropertiesSiteConfigCors.md) |  | [optional] 
**default_documents** | **List[str]** | Default documents. | [optional] 
**detailed_error_logging_enabled** | **bool** | &lt;code&gt;true&lt;/code&gt; if detailed error logging is enabled; otherwise, &lt;code&gt;false&lt;/code&gt;. | [optional] 
**document_root** | **str** | Document root. | [optional] 
**experiments** | [**WebAppsList200ResponseValueInnerPropertiesSiteConfigExperiments**](WebAppsList200ResponseValueInnerPropertiesSiteConfigExperiments.md) |  | [optional] 
**ftps_state** | **str** | State of FTP / FTPS service | [optional] 
**handler_mappings** | [**List[WebAppsList200ResponseValueInnerPropertiesSiteConfigHandlerMappingsInner]**](WebAppsList200ResponseValueInnerPropertiesSiteConfigHandlerMappingsInner.md) | Handler mappings. | [optional] 
**health_check_path** | **str** | Health check path | [optional] 
**http20_enabled** | **bool** | Http20Enabled: configures a web site to allow clients to connect over http2.0 | [optional] [default to True]
**http_logging_enabled** | **bool** | &lt;code&gt;true&lt;/code&gt; if HTTP logging is enabled; otherwise, &lt;code&gt;false&lt;/code&gt;. | [optional] 
**ip_security_restrictions** | [**List[WebAppsList200ResponseValueInnerPropertiesSiteConfigIpSecurityRestrictionsInner]**](WebAppsList200ResponseValueInnerPropertiesSiteConfigIpSecurityRestrictionsInner.md) | IP security restrictions for main. | [optional] 
**java_container** | **str** | Java container. | [optional] 
**java_container_version** | **str** | Java container version. | [optional] 
**java_version** | **str** | Java version. | [optional] 
**limits** | [**WebAppsList200ResponseValueInnerPropertiesSiteConfigLimits**](WebAppsList200ResponseValueInnerPropertiesSiteConfigLimits.md) |  | [optional] 
**linux_fx_version** | **str** | Linux App Framework and version | [optional] 
**load_balancing** | **str** | Site load balancing. | [optional] 
**local_my_sql_enabled** | **bool** | &lt;code&gt;true&lt;/code&gt; to enable local MySQL; otherwise, &lt;code&gt;false&lt;/code&gt;. | [optional] [default to False]
**logs_directory_size_limit** | **int** | HTTP logs directory size limit. | [optional] 
**machine_key** | [**WebAppsList200ResponseValueInnerPropertiesSiteConfigMachineKey**](WebAppsList200ResponseValueInnerPropertiesSiteConfigMachineKey.md) |  | [optional] 
**managed_pipeline_mode** | **str** | Managed pipeline mode. | [optional] 
**managed_service_identity_id** | **int** | Managed Service Identity Id | [optional] 
**min_tls_version** | **str** | MinTlsVersion: configures the minimum version of TLS required for SSL requests | [optional] 
**net_framework_version** | **str** | .NET Framework version. | [optional] [default to 'v4.6']
**node_version** | **str** | Version of Node.js. | [optional] 
**number_of_workers** | **int** | Number of workers. | [optional] 
**php_version** | **str** | Version of PHP. | [optional] 
**pre_warmed_instance_count** | **int** | Number of preWarmed instances. This setting only applies to the Consumption and Elastic Plans | [optional] 
**publishing_username** | **str** | Publishing user name. | [optional] 
**push** | [**WebAppsList200ResponseValueInnerPropertiesSiteConfigPush**](WebAppsList200ResponseValueInnerPropertiesSiteConfigPush.md) |  | [optional] 
**python_version** | **str** | Version of Python. | [optional] 
**remote_debugging_enabled** | **bool** | &lt;code&gt;true&lt;/code&gt; if remote debugging is enabled; otherwise, &lt;code&gt;false&lt;/code&gt;. | [optional] 
**remote_debugging_version** | **str** | Remote debugging version. | [optional] 
**request_tracing_enabled** | **bool** | &lt;code&gt;true&lt;/code&gt; if request tracing is enabled; otherwise, &lt;code&gt;false&lt;/code&gt;. | [optional] 
**request_tracing_expiration_time** | **datetime** | Request tracing expiration time. | [optional] 
**scm_ip_security_restrictions** | [**List[WebAppsList200ResponseValueInnerPropertiesSiteConfigIpSecurityRestrictionsInner]**](WebAppsList200ResponseValueInnerPropertiesSiteConfigIpSecurityRestrictionsInner.md) | IP security restrictions for scm. | [optional] 
**scm_ip_security_restrictions_use_main** | **bool** | IP security restrictions for scm to use main. | [optional] 
**scm_type** | **str** | SCM type. | [optional] 
**tracing_options** | **str** | Tracing options. | [optional] 
**use32_bit_worker_process** | **bool** | &lt;code&gt;true&lt;/code&gt; to use 32-bit worker process; otherwise, &lt;code&gt;false&lt;/code&gt;. | [optional] 
**virtual_applications** | [**List[WebAppsList200ResponseValueInnerPropertiesSiteConfigVirtualApplicationsInner]**](WebAppsList200ResponseValueInnerPropertiesSiteConfigVirtualApplicationsInner.md) | Virtual applications. | [optional] 
**vnet_name** | **str** | Virtual Network name. | [optional] 
**web_sockets_enabled** | **bool** | &lt;code&gt;true&lt;/code&gt; if WebSocket is enabled; otherwise, &lt;code&gt;false&lt;/code&gt;. | [optional] 
**windows_fx_version** | **str** | Xenon App Framework and version | [optional] 
**x_managed_service_identity_id** | **int** | Explicit Managed Service Identity Id | [optional] 

## Example

```python
from openapi_client.models.web_apps_list200_response_value_inner_properties_site_config import WebAppsList200ResponseValueInnerPropertiesSiteConfig

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsList200ResponseValueInnerPropertiesSiteConfig from a JSON string
web_apps_list200_response_value_inner_properties_site_config_instance = WebAppsList200ResponseValueInnerPropertiesSiteConfig.from_json(json)
# print the JSON string representation of the object
print(WebAppsList200ResponseValueInnerPropertiesSiteConfig.to_json())

# convert the object into a dict
web_apps_list200_response_value_inner_properties_site_config_dict = web_apps_list200_response_value_inner_properties_site_config_instance.to_dict()
# create an instance of WebAppsList200ResponseValueInnerPropertiesSiteConfig from a dict
web_apps_list200_response_value_inner_properties_site_config_from_dict = WebAppsList200ResponseValueInnerPropertiesSiteConfig.from_dict(web_apps_list200_response_value_inner_properties_site_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


