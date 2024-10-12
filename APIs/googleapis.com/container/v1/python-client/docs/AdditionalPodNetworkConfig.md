# AdditionalPodNetworkConfig

AdditionalPodNetworkConfig is the configuration for additional pod networks within the NodeNetworkConfig message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_pods_per_node** | [**MaxPodsConstraint**](MaxPodsConstraint.md) |  | [optional] 
**secondary_pod_range** | **str** | The name of the secondary range on the subnet which provides IP address for this pod range | [optional] 
**subnetwork** | **str** | Name of the subnetwork where the additional pod network belongs | [optional] 

## Example

```python
from openapi_client.models.additional_pod_network_config import AdditionalPodNetworkConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AdditionalPodNetworkConfig from a JSON string
additional_pod_network_config_instance = AdditionalPodNetworkConfig.from_json(json)
# print the JSON string representation of the object
print(AdditionalPodNetworkConfig.to_json())

# convert the object into a dict
additional_pod_network_config_dict = additional_pod_network_config_instance.to_dict()
# create an instance of AdditionalPodNetworkConfig from a dict
additional_pod_network_config_from_dict = AdditionalPodNetworkConfig.from_dict(additional_pod_network_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


