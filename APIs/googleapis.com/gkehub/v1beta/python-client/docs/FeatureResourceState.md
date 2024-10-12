# FeatureResourceState

FeatureResourceState describes the state of a Feature *resource* in the GkeHub API. See `FeatureState` for the \"running state\" of the Feature in the Hub and across Memberships.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | The current state of the Feature resource in the Hub API. | [optional] 

## Example

```python
from openapi_client.models.feature_resource_state import FeatureResourceState

# TODO update the JSON string below
json = "{}"
# create an instance of FeatureResourceState from a JSON string
feature_resource_state_instance = FeatureResourceState.from_json(json)
# print the JSON string representation of the object
print(FeatureResourceState.to_json())

# convert the object into a dict
feature_resource_state_dict = feature_resource_state_instance.to_dict()
# create an instance of FeatureResourceState from a dict
feature_resource_state_from_dict = FeatureResourceState.from_dict(feature_resource_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


