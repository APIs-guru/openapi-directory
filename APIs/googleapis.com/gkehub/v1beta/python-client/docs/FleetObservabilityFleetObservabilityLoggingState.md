# FleetObservabilityFleetObservabilityLoggingState

Feature state for logging feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_log** | [**FleetObservabilityFleetObservabilityBaseFeatureState**](FleetObservabilityFleetObservabilityBaseFeatureState.md) |  | [optional] 
**scope_log** | [**FleetObservabilityFleetObservabilityBaseFeatureState**](FleetObservabilityFleetObservabilityBaseFeatureState.md) |  | [optional] 

## Example

```python
from openapi_client.models.fleet_observability_fleet_observability_logging_state import FleetObservabilityFleetObservabilityLoggingState

# TODO update the JSON string below
json = "{}"
# create an instance of FleetObservabilityFleetObservabilityLoggingState from a JSON string
fleet_observability_fleet_observability_logging_state_instance = FleetObservabilityFleetObservabilityLoggingState.from_json(json)
# print the JSON string representation of the object
print(FleetObservabilityFleetObservabilityLoggingState.to_json())

# convert the object into a dict
fleet_observability_fleet_observability_logging_state_dict = fleet_observability_fleet_observability_logging_state_instance.to_dict()
# create an instance of FleetObservabilityFleetObservabilityLoggingState from a dict
fleet_observability_fleet_observability_logging_state_from_dict = FleetObservabilityFleetObservabilityLoggingState.from_dict(fleet_observability_fleet_observability_logging_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


