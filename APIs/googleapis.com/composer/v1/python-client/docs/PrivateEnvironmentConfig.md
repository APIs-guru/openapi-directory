# PrivateEnvironmentConfig

The configuration information for configuring a Private IP Cloud Composer environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_composer_connection_subnetwork** | **str** | Optional. When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork. | [optional] 
**cloud_composer_network_ipv4_cidr_block** | **str** | Optional. The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved. Needs to be disjoint from private_cluster_config.master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer. | [optional] 
**cloud_composer_network_ipv4_reserved_range** | **str** | Output only. The IP range reserved for the tenant project&#39;s Cloud Composer network. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer. | [optional] [readonly] 
**cloud_sql_ipv4_cidr_block** | **str** | Optional. The CIDR block from which IP range in tenant project will be reserved for Cloud SQL. Needs to be disjoint from &#x60;web_server_ipv4_cidr_block&#x60;. | [optional] 
**enable_private_builds_only** | **bool** | Optional. If &#x60;true&#x60;, builds performed during operations that install Python packages have only private connectivity to Google services (including Artifact Registry) and VPC network (if either &#x60;NodeConfig.network&#x60; and &#x60;NodeConfig.subnetwork&#x60; fields or &#x60;NodeConfig.composer_network_attachment&#x60; field are specified). If &#x60;false&#x60;, the builds also have access to the internet. This field is supported for Cloud Composer environments in versions composer-3.*.*-airflow-*.*.* and newer. | [optional] 
**enable_private_environment** | **bool** | Optional. If &#x60;true&#x60;, a Private IP Cloud Composer environment is created. If this field is set to true, &#x60;IPAllocationPolicy.use_ip_aliases&#x60; must be set to true for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. | [optional] 
**enable_privately_used_public_ips** | **bool** | Optional. When enabled, IPs from public (non-RFC1918) ranges can be used for &#x60;IPAllocationPolicy.cluster_ipv4_cidr_block&#x60; and &#x60;IPAllocationPolicy.service_ipv4_cidr_block&#x60;. | [optional] 
**networking_config** | [**NetworkingConfig**](NetworkingConfig.md) |  | [optional] 
**private_cluster_config** | [**PrivateClusterConfig**](PrivateClusterConfig.md) |  | [optional] 
**web_server_ipv4_cidr_block** | **str** | Optional. The CIDR block from which IP range for web server will be reserved. Needs to be disjoint from &#x60;private_cluster_config.master_ipv4_cidr_block&#x60; and &#x60;cloud_sql_ipv4_cidr_block&#x60;. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. | [optional] 
**web_server_ipv4_reserved_range** | **str** | Output only. The IP range reserved for the tenant project&#39;s App Engine VMs. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. | [optional] [readonly] 

## Example

```python
from openapi_client.models.private_environment_config import PrivateEnvironmentConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateEnvironmentConfig from a JSON string
private_environment_config_instance = PrivateEnvironmentConfig.from_json(json)
# print the JSON string representation of the object
print(PrivateEnvironmentConfig.to_json())

# convert the object into a dict
private_environment_config_dict = private_environment_config_instance.to_dict()
# create an instance of PrivateEnvironmentConfig from a dict
private_environment_config_from_dict = PrivateEnvironmentConfig.from_dict(private_environment_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


