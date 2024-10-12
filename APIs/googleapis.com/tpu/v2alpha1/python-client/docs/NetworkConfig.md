# NetworkConfig

Network related configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_ip_forward** | **bool** | Allows the TPU node to send and receive packets with non-matching destination or source IPs. This is required if you plan to use the TPU workers to forward routes. | [optional] 
**enable_external_ips** | **bool** | Indicates that external IP addresses would be associated with the TPU workers. If set to false, the specified subnetwork or network should have Private Google Access enabled. | [optional] 
**network** | **str** | The name of the network for the TPU node. It must be a preexisting Google Compute Engine network. If none is provided, \&quot;default\&quot; will be used. | [optional] 
**queue_count** | **int** | Optional. Specifies networking queue count for TPU VM instance&#39;s network interface. | [optional] 
**subnetwork** | **str** | The name of the subnetwork for the TPU node. It must be a preexisting Google Compute Engine subnetwork. If none is provided, \&quot;default\&quot; will be used. | [optional] 

## Example

```python
from openapi_client.models.network_config import NetworkConfig

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkConfig from a JSON string
network_config_instance = NetworkConfig.from_json(json)
# print the JSON string representation of the object
print(NetworkConfig.to_json())

# convert the object into a dict
network_config_dict = network_config_instance.to_dict()
# create an instance of NetworkConfig from a dict
network_config_from_dict = NetworkConfig.from_dict(network_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


