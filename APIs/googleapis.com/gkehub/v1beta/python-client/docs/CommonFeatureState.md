# CommonFeatureState

CommonFeatureState contains Hub-wide Feature status information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appdevexperience** | [**AppDevExperienceFeatureState**](AppDevExperienceFeatureState.md) |  | [optional] 
**clusterupgrade** | [**ClusterUpgradeFleetState**](ClusterUpgradeFleetState.md) |  | [optional] 
**fleetobservability** | [**FleetObservabilityFeatureState**](FleetObservabilityFeatureState.md) |  | [optional] 
**state** | [**FeatureState**](FeatureState.md) |  | [optional] 

## Example

```python
from openapi_client.models.common_feature_state import CommonFeatureState

# TODO update the JSON string below
json = "{}"
# create an instance of CommonFeatureState from a JSON string
common_feature_state_instance = CommonFeatureState.from_json(json)
# print the JSON string representation of the object
print(CommonFeatureState.to_json())

# convert the object into a dict
common_feature_state_dict = common_feature_state_instance.to_dict()
# create an instance of CommonFeatureState from a dict
common_feature_state_from_dict = CommonFeatureState.from_dict(common_feature_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


