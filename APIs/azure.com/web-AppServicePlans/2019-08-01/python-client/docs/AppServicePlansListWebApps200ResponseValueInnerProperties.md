# AppServicePlansListWebApps200ResponseValueInnerProperties

Site resource specific properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability_state** | **str** | Management information availability state for the app. | [optional] [readonly] 
**client_affinity_enabled** | **bool** | &lt;code&gt;true&lt;/code&gt; to enable client affinity; &lt;code&gt;false&lt;/code&gt; to stop sending session affinity cookies, which route client requests in the same session to the same instance. Default is &lt;code&gt;true&lt;/code&gt;. | [optional] 
**client_cert_enabled** | **bool** | &lt;code&gt;true&lt;/code&gt; to enable client certificate authentication (TLS mutual authentication); otherwise, &lt;code&gt;false&lt;/code&gt;. Default is &lt;code&gt;false&lt;/code&gt;. | [optional] 
**client_cert_exclusion_paths** | **str** | client certificate authentication comma-separated exclusion paths | [optional] 
**cloning_info** | [**AppServicePlansListWebApps200ResponseValueInnerPropertiesCloningInfo**](AppServicePlansListWebApps200ResponseValueInnerPropertiesCloningInfo.md) |  | [optional] 
**container_size** | **int** | Size of the function container. | [optional] 
**daily_memory_time_quota** | **int** | Maximum allowed daily memory-time quota (applicable on dynamic apps only). | [optional] 
**default_host_name** | **str** | Default hostname of the app. Read-only. | [optional] [readonly] 
**enabled** | **bool** | &lt;code&gt;true&lt;/code&gt; if the app is enabled; otherwise, &lt;code&gt;false&lt;/code&gt;. Setting this value to false disables the app (takes the app offline). | [optional] 
**enabled_host_names** | **List[str]** | Enabled hostnames for the app.Hostnames need to be assigned (see HostNames) AND enabled. Otherwise, the app is not served on those hostnames. | [optional] [readonly] 
**host_name_ssl_states** | [**List[AppServicePlansListWebApps200ResponseValueInnerPropertiesHostNameSslStatesInner]**](AppServicePlansListWebApps200ResponseValueInnerPropertiesHostNameSslStatesInner.md) | Hostname SSL states are used to manage the SSL bindings for app&#39;s hostnames. | [optional] 
**host_names** | **List[str]** | Hostnames associated with the app. | [optional] [readonly] 
**host_names_disabled** | **bool** | &lt;code&gt;true&lt;/code&gt; to disable the public hostnames of the app; otherwise, &lt;code&gt;false&lt;/code&gt;.  If &lt;code&gt;true&lt;/code&gt;, the app is only accessible via API management process. | [optional] 
**hosting_environment_profile** | [**AppServicePlansList200ResponseValueInnerPropertiesHostingEnvironmentProfile**](AppServicePlansList200ResponseValueInnerPropertiesHostingEnvironmentProfile.md) |  | [optional] 
**https_only** | **bool** | HttpsOnly: configures a web site to accept only https requests. Issues redirect for http requests | [optional] 
**hyper_v** | **bool** | Hyper-V sandbox. | [optional] [default to False]
**in_progress_operation_id** | **str** | Specifies an operation id if this site has a pending operation. | [optional] [readonly] 
**is_default_container** | **bool** | &lt;code&gt;true&lt;/code&gt; if the app is a default container; otherwise, &lt;code&gt;false&lt;/code&gt;. | [optional] [readonly] 
**is_xenon** | **bool** | Obsolete: Hyper-V sandbox. | [optional] [default to False]
**last_modified_time_utc** | **datetime** | Last time the app was modified, in UTC. Read-only. | [optional] [readonly] 
**max_number_of_workers** | **int** | Maximum number of workers. This only applies to Functions container. | [optional] [readonly] 
**outbound_ip_addresses** | **str** | List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from tenants that site can be hosted with current settings. Read-only. | [optional] [readonly] 
**possible_outbound_ip_addresses** | **str** | List of IP addresses that the app uses for outbound connections (e.g. database access). Includes VIPs from all tenants except dataComponent. Read-only. | [optional] [readonly] 
**redundancy_mode** | **str** | Site redundancy mode | [optional] 
**repository_site_name** | **str** | Name of the repository site. | [optional] [readonly] 
**reserved** | **bool** | &lt;code&gt;true&lt;/code&gt; if reserved; otherwise, &lt;code&gt;false&lt;/code&gt;. | [optional] [default to False]
**resource_group** | **str** | Name of the resource group the app belongs to. Read-only. | [optional] [readonly] 
**scm_site_also_stopped** | **bool** | &lt;code&gt;true&lt;/code&gt; to stop SCM (KUDU) site when the app is stopped; otherwise, &lt;code&gt;false&lt;/code&gt;. The default is &lt;code&gt;false&lt;/code&gt;. | [optional] [default to False]
**server_farm_id** | **str** | Resource ID of the associated App Service plan, formatted as: \&quot;/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}\&quot;. | [optional] 
**site_config** | [**AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfig**](AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfig.md) |  | [optional] 
**slot_swap_status** | [**AppServicePlansListWebApps200ResponseValueInnerPropertiesSlotSwapStatus**](AppServicePlansListWebApps200ResponseValueInnerPropertiesSlotSwapStatus.md) |  | [optional] 
**state** | **str** | Current state of the app. | [optional] [readonly] 
**suspended_till** | **datetime** | App suspended till in case memory-time quota is exceeded. | [optional] [readonly] 
**target_swap_slot** | **str** | Specifies which deployment slot this app will swap into. Read-only. | [optional] [readonly] 
**traffic_manager_host_names** | **List[str]** | Azure Traffic Manager hostnames associated with the app. Read-only. | [optional] [readonly] 
**usage_state** | **str** | State indicating whether the app has exceeded its quota usage. Read-only. | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_service_plans_list_web_apps200_response_value_inner_properties import AppServicePlansListWebApps200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansListWebApps200ResponseValueInnerProperties from a JSON string
app_service_plans_list_web_apps200_response_value_inner_properties_instance = AppServicePlansListWebApps200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansListWebApps200ResponseValueInnerProperties.to_json())

# convert the object into a dict
app_service_plans_list_web_apps200_response_value_inner_properties_dict = app_service_plans_list_web_apps200_response_value_inner_properties_instance.to_dict()
# create an instance of AppServicePlansListWebApps200ResponseValueInnerProperties from a dict
app_service_plans_list_web_apps200_response_value_inner_properties_from_dict = AppServicePlansListWebApps200ResponseValueInnerProperties.from_dict(app_service_plans_list_web_apps200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


