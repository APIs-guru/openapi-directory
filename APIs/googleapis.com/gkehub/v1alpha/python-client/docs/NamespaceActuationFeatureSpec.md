# NamespaceActuationFeatureSpec

An empty spec for actuation feature. This is required since Feature proto requires a spec.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actuation_mode** | **str** | actuation_mode controls the behavior of the controller | [optional] 

## Example

```python
from openapi_client.models.namespace_actuation_feature_spec import NamespaceActuationFeatureSpec

# TODO update the JSON string below
json = "{}"
# create an instance of NamespaceActuationFeatureSpec from a JSON string
namespace_actuation_feature_spec_instance = NamespaceActuationFeatureSpec.from_json(json)
# print the JSON string representation of the object
print(NamespaceActuationFeatureSpec.to_json())

# convert the object into a dict
namespace_actuation_feature_spec_dict = namespace_actuation_feature_spec_instance.to_dict()
# create an instance of NamespaceActuationFeatureSpec from a dict
namespace_actuation_feature_spec_from_dict = NamespaceActuationFeatureSpec.from_dict(namespace_actuation_feature_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


