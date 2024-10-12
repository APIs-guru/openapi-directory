# FleetObservabilityFeatureSpec

**Fleet Observability**: The Hub-wide input for the FleetObservability feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logging_config** | [**FleetObservabilityLoggingConfig**](FleetObservabilityLoggingConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.fleet_observability_feature_spec import FleetObservabilityFeatureSpec

# TODO update the JSON string below
json = "{}"
# create an instance of FleetObservabilityFeatureSpec from a JSON string
fleet_observability_feature_spec_instance = FleetObservabilityFeatureSpec.from_json(json)
# print the JSON string representation of the object
print(FleetObservabilityFeatureSpec.to_json())

# convert the object into a dict
fleet_observability_feature_spec_dict = fleet_observability_feature_spec_instance.to_dict()
# create an instance of FleetObservabilityFeatureSpec from a dict
fleet_observability_feature_spec_from_dict = FleetObservabilityFeatureSpec.from_dict(fleet_observability_feature_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


