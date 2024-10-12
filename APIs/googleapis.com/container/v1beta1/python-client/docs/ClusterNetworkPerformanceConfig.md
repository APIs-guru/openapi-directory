# ClusterNetworkPerformanceConfig

Configuration of all network bandwidth tiers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_egress_bandwidth_tier** | **str** | Specifies the total network bandwidth tier for the NodePool. | [optional] 

## Example

```python
from openapi_client.models.cluster_network_performance_config import ClusterNetworkPerformanceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterNetworkPerformanceConfig from a JSON string
cluster_network_performance_config_instance = ClusterNetworkPerformanceConfig.from_json(json)
# print the JSON string representation of the object
print(ClusterNetworkPerformanceConfig.to_json())

# convert the object into a dict
cluster_network_performance_config_dict = cluster_network_performance_config_instance.to_dict()
# create an instance of ClusterNetworkPerformanceConfig from a dict
cluster_network_performance_config_from_dict = ClusterNetworkPerformanceConfig.from_dict(cluster_network_performance_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


