# NetworkPerformanceConfig

Configuration of all network bandwidth tiers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_egress_bandwidth_tier** | **str** | Specifies the total network bandwidth tier for the NodePool. | [optional] 

## Example

```python
from openapi_client.models.network_performance_config import NetworkPerformanceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkPerformanceConfig from a JSON string
network_performance_config_instance = NetworkPerformanceConfig.from_json(json)
# print the JSON string representation of the object
print(NetworkPerformanceConfig.to_json())

# convert the object into a dict
network_performance_config_dict = network_performance_config_instance.to_dict()
# create an instance of NetworkPerformanceConfig from a dict
network_performance_config_from_dict = NetworkPerformanceConfig.from_dict(network_performance_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


