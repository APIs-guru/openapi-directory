# ScopeFeatureState

ScopeFeatureState contains Scope-wide Feature status information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | [**FeatureState**](FeatureState.md) |  | [optional] 

## Example

```python
from openapi_client.models.scope_feature_state import ScopeFeatureState

# TODO update the JSON string below
json = "{}"
# create an instance of ScopeFeatureState from a JSON string
scope_feature_state_instance = ScopeFeatureState.from_json(json)
# print the JSON string representation of the object
print(ScopeFeatureState.to_json())

# convert the object into a dict
scope_feature_state_dict = scope_feature_state_instance.to_dict()
# create an instance of ScopeFeatureState from a dict
scope_feature_state_from_dict = ScopeFeatureState.from_dict(scope_feature_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


