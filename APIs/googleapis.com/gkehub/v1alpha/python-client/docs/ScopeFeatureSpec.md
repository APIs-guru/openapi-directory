# ScopeFeatureSpec

ScopeFeatureSpec contains feature specs for a fleet scope.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clusterupgrade** | [**ClusterUpgradeScopeSpec**](ClusterUpgradeScopeSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.scope_feature_spec import ScopeFeatureSpec

# TODO update the JSON string below
json = "{}"
# create an instance of ScopeFeatureSpec from a JSON string
scope_feature_spec_instance = ScopeFeatureSpec.from_json(json)
# print the JSON string representation of the object
print(ScopeFeatureSpec.to_json())

# convert the object into a dict
scope_feature_spec_dict = scope_feature_spec_instance.to_dict()
# create an instance of ScopeFeatureSpec from a dict
scope_feature_spec_from_dict = ScopeFeatureSpec.from_dict(scope_feature_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


