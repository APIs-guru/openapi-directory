# PrivateClusterConfig

Configuration options for the private GKE cluster in a Cloud Composer environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_private_endpoint** | **bool** | Optional. If &#x60;true&#x60;, access to the public endpoint of the GKE cluster is denied. | [optional] 
**master_ipv4_cidr_block** | **str** | Optional. The CIDR block from which IPv4 range for GKE master will be reserved. If left blank, the default value of &#39;172.16.0.0/23&#39; is used. | [optional] 
**master_ipv4_reserved_range** | **str** | Output only. The IP range in CIDR notation to use for the hosted master network. This range is used for assigning internal IP addresses to the cluster master or set of masters and to the internal load balancer virtual IP. This range must not overlap with any other ranges in use within the cluster&#39;s network. | [optional] [readonly] 

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


