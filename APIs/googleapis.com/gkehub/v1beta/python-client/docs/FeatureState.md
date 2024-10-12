# FeatureState

FeatureState describes the high-level state of a Feature. It may be used to describe a Feature's state at the environ-level, or per-membershop, depending on the context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The high-level, machine-readable status of this Feature. | [optional] 
**description** | **str** | A human-readable description of the current status. | [optional] 
**update_time** | **str** | The time this status and any related Feature-specific details were updated. | [optional] 

## Example

```python
from openapi_client.models.feature_state import FeatureState

# TODO update the JSON string below
json = "{}"
# create an instance of FeatureState from a JSON string
feature_state_instance = FeatureState.from_json(json)
# print the JSON string representation of the object
print(FeatureState.to_json())

# convert the object into a dict
feature_state_dict = feature_state_instance.to_dict()
# create an instance of FeatureState from a dict
feature_state_from_dict = FeatureState.from_dict(feature_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


