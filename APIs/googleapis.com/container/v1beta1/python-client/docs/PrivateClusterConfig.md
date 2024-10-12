# PrivateClusterConfig

Configuration options for private clusters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_private_endpoint** | **bool** | Whether the master&#39;s internal IP address is used as the cluster endpoint. | [optional] 
**enable_private_nodes** | **bool** | Whether nodes have internal IP addresses only. If enabled, all nodes are given only RFC 1918 private addresses and communicate with the master via private networking. | [optional] 
**master_global_access_config** | [**PrivateClusterMasterGlobalAccessConfig**](PrivateClusterMasterGlobalAccessConfig.md) |  | [optional] 
**master_ipv4_cidr_block** | **str** | The IP range in CIDR notation to use for the hosted master network. This range will be used for assigning internal IP addresses to the master or set of masters, as well as the ILB VIP. This range must not overlap with any other ranges in use within the cluster&#39;s network. | [optional] 
**peering_name** | **str** | Output only. The peering name in the customer VPC used by this cluster. | [optional] 
**private_endpoint** | **str** | Output only. The internal IP address of this cluster&#39;s master endpoint. | [optional] 
**private_endpoint_subnetwork** | **str** | Subnet to provision the master&#39;s private endpoint during cluster creation. Specified in projects/*/regions/*/subnetworks/* format. | [optional] 
**public_endpoint** | **str** | Output only. The external IP address of this cluster&#39;s master endpoint. | [optional] 

## Example

```python
from openapi_client.models.private_cluster_config import PrivateClusterConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateClusterConfig from a JSON string
private_cluster_config_instance = PrivateClusterConfig.from_json(json)
# print the JSON string representation of the object
print(PrivateClusterConfig.to_json())

# convert the object into a dict
private_cluster_config_dict = private_cluster_config_instance.to_dict()
# create an instance of PrivateClusterConfig from a dict
private_cluster_config_from_dict = PrivateClusterConfig.from_dict(private_cluster_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


