# FleetObservabilityFleetObservabilityBaseFeatureState

Base state for fleet observability feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The high-level, machine-readable status of this Feature. | [optional] 
**errors** | [**List[FleetObservabilityFeatureError]**](FleetObservabilityFeatureError.md) | Errors after reconciling the monitoring and logging feature if the code is not OK. | [optional] 

## Example

```python
from openapi_client.models.fleet_observability_fleet_observability_base_feature_state import FleetObservabilityFleetObservabilityBaseFeatureState

# TODO update the JSON string below
json = "{}"
# create an instance of FleetObservabilityFleetObservabilityBaseFeatureState from a JSON string
fleet_observability_fleet_observability_base_feature_state_instance = FleetObservabilityFleetObservabilityBaseFeatureState.from_json(json)
# print the JSON string representation of the object
print(FleetObservabilityFleetObservabilityBaseFeatureState.to_json())

# convert the object into a dict
fleet_observability_fleet_observability_base_feature_state_dict = fleet_observability_fleet_observability_base_feature_state_instance.to_dict()
# create an instance of FleetObservabilityFleetObservabilityBaseFeatureState from a dict
fleet_observability_fleet_observability_base_feature_state_from_dict = FleetObservabilityFleetObservabilityBaseFeatureState.from_dict(fleet_observability_fleet_observability_base_feature_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


