# DeploymentLocationsHostingEnvironmentsInner

Description of an App Service Environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_multi_sizes** | **str** | List of comma separated strings describing which VM sizes are allowed for front-ends. | [optional] [readonly] 
**allowed_worker_sizes** | **str** | List of comma separated strings describing which VM sizes are allowed for workers. | [optional] [readonly] 
**api_management_account_id** | **str** | API Management Account associated with the App Service Environment. | [optional] 
**cluster_settings** | [**List[DeploymentLocationsHostingEnvironmentsInnerClusterSettingsInner]**](DeploymentLocationsHostingEnvironmentsInnerClusterSettingsInner.md) | Custom settings for changing the behavior of the App Service Environment. | [optional] 
**database_edition** | **str** | Edition of the metadata database for the App Service Environment, e.g. \&quot;Standard\&quot;. | [optional] [readonly] 
**database_service_objective** | **str** | Service objective of the metadata database for the App Service Environment, e.g. \&quot;S0\&quot;. | [optional] [readonly] 
**default_front_end_scale_factor** | **int** | Default Scale Factor for FrontEnds. | [optional] [readonly] 
**dns_suffix** | **str** | DNS suffix of the App Service Environment. | [optional] 
**dynamic_cache_enabled** | **bool** | True/false indicating whether the App Service Environment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available (most likely because NSG blocked the incoming traffic). | [optional] 
**environment_capacities** | [**List[DeploymentLocationsHostingEnvironmentsInnerEnvironmentCapacitiesInner]**](DeploymentLocationsHostingEnvironmentsInnerEnvironmentCapacitiesInner.md) | Current total, used, and available worker capacities. | [optional] [readonly] 
**environment_is_healthy** | **bool** | True/false indicating whether the App Service Environment is healthy. | [optional] [readonly] 
**environment_status** | **str** | Detailed message about with results of the last check of the App Service Environment. | [optional] [readonly] 
**front_end_scale_factor** | **int** | Scale factor for front-ends. | [optional] 
**has_linux_workers** | **bool** | Flag that displays whether an ASE has linux workers or not | [optional] 
**internal_load_balancing_mode** | **str** | Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment. | [optional] 
**ipssl_address_count** | **int** | Number of IP SSL addresses reserved for the App Service Environment. | [optional] 
**last_action** | **str** | Last deployment action on the App Service Environment. | [optional] [readonly] 
**last_action_result** | **str** | Result of the last deployment action on the App Service Environment. | [optional] [readonly] 
**location** | **str** | Location of the App Service Environment, e.g. \&quot;West US\&quot;. | 
**maximum_number_of_machines** | **int** | Maximum number of VMs in the App Service Environment. | [optional] [readonly] 
**multi_role_count** | **int** | Number of front-end instances. | [optional] 
**multi_size** | **str** | Front-end VM size, e.g. \&quot;Medium\&quot;, \&quot;Large\&quot;. | [optional] 
**name** | **str** | Name of the App Service Environment. | 
**network_access_control_list** | [**List[DeploymentLocationsHostingEnvironmentsInnerNetworkAccessControlListInner]**](DeploymentLocationsHostingEnvironmentsInnerNetworkAccessControlListInner.md) | Access control list for controlling traffic to the App Service Environment. | [optional] 
**provisioning_state** | **str** | Provisioning state of the App Service Environment. | [optional] [readonly] 
**resource_group** | **str** | Resource group of the App Service Environment. | [optional] [readonly] 
**ssl_cert_key_vault_id** | **str** | Key Vault ID for ILB App Service Environment default SSL certificate | [optional] 
**ssl_cert_key_vault_secret_name** | **str** | Key Vault Secret Name for ILB App Service Environment default SSL certificate | [optional] 
**status** | **str** | Current status of the App Service Environment. | [optional] [readonly] 
**subscription_id** | **str** | Subscription of the App Service Environment. | [optional] [readonly] 
**suspended** | **bool** | &lt;code&gt;true&lt;/code&gt; if the App Service Environment is suspended; otherwise, &lt;code&gt;false&lt;/code&gt;. The environment can be suspended, e.g. when the management endpoint is no longer available  (most likely because NSG blocked the incoming traffic). | [optional] 
**upgrade_domains** | **int** | Number of upgrade domains of the App Service Environment. | [optional] [readonly] 
**user_whitelisted_ip_ranges** | **List[str]** | User added ip ranges to whitelist on ASE db | [optional] 
**vip_mappings** | [**List[DeploymentLocationsHostingEnvironmentsInnerVipMappingsInner]**](DeploymentLocationsHostingEnvironmentsInnerVipMappingsInner.md) | Description of IP SSL mapping for the App Service Environment. | [optional] [readonly] 
**virtual_network** | [**DeploymentLocationsHostingEnvironmentsInnerVirtualNetwork**](DeploymentLocationsHostingEnvironmentsInnerVirtualNetwork.md) |  | 
**vnet_name** | **str** | Name of the Virtual Network for the App Service Environment. | [optional] 
**vnet_resource_group_name** | **str** | Resource group of the Virtual Network. | [optional] 
**vnet_subnet_name** | **str** | Subnet of the Virtual Network. | [optional] 
**worker_pools** | [**List[DeploymentLocationsHostingEnvironmentsInnerWorkerPoolsInner]**](DeploymentLocationsHostingEnvironmentsInnerWorkerPoolsInner.md) | Description of worker pools with worker size IDs, VM sizes, and number of workers in each pool. | 

## Example

```python
from openapi_client.models.deployment_locations_hosting_environments_inner import DeploymentLocationsHostingEnvironmentsInner

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentLocationsHostingEnvironmentsInner from a JSON string
deployment_locations_hosting_environments_inner_instance = DeploymentLocationsHostingEnvironmentsInner.from_json(json)
# print the JSON string representation of the object
print(DeploymentLocationsHostingEnvironmentsInner.to_json())

# convert the object into a dict
deployment_locations_hosting_environments_inner_dict = deployment_locations_hosting_environments_inner_instance.to_dict()
# create an instance of DeploymentLocationsHostingEnvironmentsInner from a dict
deployment_locations_hosting_environments_inner_from_dict = DeploymentLocationsHostingEnvironmentsInner.from_dict(deployment_locations_hosting_environments_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


