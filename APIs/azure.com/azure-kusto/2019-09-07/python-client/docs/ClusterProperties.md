# ClusterProperties

Class representing the Kusto cluster properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_ingestion_uri** | **str** | The cluster data ingestion URI. | [optional] [readonly] 
**enable_disk_encryption** | **bool** | A boolean value that indicates if the cluster&#39;s disks are encrypted. | [optional] 
**enable_streaming_ingest** | **bool** | A boolean value that indicates if the streaming ingest is enabled. | [optional] [default to False]
**key_vault_properties** | [**KeyVaultProperties**](KeyVaultProperties.md) |  | [optional] 
**optimized_autoscale** | [**OptimizedAutoscale**](OptimizedAutoscale.md) |  | [optional] 
**provisioning_state** | **str** | The provisioned state of the resource. | [optional] [readonly] 
**state** | **str** | The state of the resource. | [optional] [readonly] 
**trusted_external_tenants** | [**List[TrustedExternalTenant]**](TrustedExternalTenant.md) | The cluster&#39;s external tenants. | [optional] 
**uri** | **str** | The cluster URI. | [optional] [readonly] 
**virtual_network_configuration** | [**VirtualNetworkConfiguration**](VirtualNetworkConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.cluster_properties import ClusterProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterProperties from a JSON string
cluster_properties_instance = ClusterProperties.from_json(json)
# print the JSON string representation of the object
print(ClusterProperties.to_json())

# convert the object into a dict
cluster_properties_dict = cluster_properties_instance.to_dict()
# create an instance of ClusterProperties from a dict
cluster_properties_from_dict = ClusterProperties.from_dict(cluster_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


