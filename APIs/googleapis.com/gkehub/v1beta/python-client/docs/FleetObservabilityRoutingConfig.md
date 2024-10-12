# FleetObservabilityRoutingConfig

RoutingConfig configures the behaviour of fleet logging feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **str** | mode configures the logs routing mode. | [optional] 

## Example

```python
from openapi_client.models.fleet_observability_routing_config import FleetObservabilityRoutingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of FleetObservabilityRoutingConfig from a JSON string
fleet_observability_routing_config_instance = FleetObservabilityRoutingConfig.from_json(json)
# print the JSON string representation of the object
print(FleetObservabilityRoutingConfig.to_json())

# convert the object into a dict
fleet_observability_routing_config_dict = fleet_observability_routing_config_instance.to_dict()
# create an instance of FleetObservabilityRoutingConfig from a dict
fleet_observability_routing_config_from_dict = FleetObservabilityRoutingConfig.from_dict(fleet_observability_routing_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


