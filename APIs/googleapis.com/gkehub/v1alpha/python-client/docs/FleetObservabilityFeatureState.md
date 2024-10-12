# FleetObservabilityFeatureState

**FleetObservability**: Hub-wide Feature for FleetObservability feature. state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logging** | [**FleetObservabilityFleetObservabilityLoggingState**](FleetObservabilityFleetObservabilityLoggingState.md) |  | [optional] 
**monitoring** | [**FleetObservabilityFleetObservabilityMonitoringState**](FleetObservabilityFleetObservabilityMonitoringState.md) |  | [optional] 

## Example

```python
from openapi_client.models.fleet_observability_feature_state import FleetObservabilityFeatureState

# TODO update the JSON string below
json = "{}"
# create an instance of FleetObservabilityFeatureState from a JSON string
fleet_observability_feature_state_instance = FleetObservabilityFeatureState.from_json(json)
# print the JSON string representation of the object
print(FleetObservabilityFeatureState.to_json())

# convert the object into a dict
fleet_observability_feature_state_dict = fleet_observability_feature_state_instance.to_dict()
# create an instance of FleetObservabilityFeatureState from a dict
fleet_observability_feature_state_from_dict = FleetObservabilityFeatureState.from_dict(fleet_observability_feature_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


