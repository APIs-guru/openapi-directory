# AnthosObservabilityFeatureSpec

**Anthos Observability**: Spec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_membership_spec** | [**AnthosObservabilityMembershipSpec**](AnthosObservabilityMembershipSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.anthos_observability_feature_spec import AnthosObservabilityFeatureSpec

# TODO update the JSON string below
json = "{}"
# create an instance of AnthosObservabilityFeatureSpec from a JSON string
anthos_observability_feature_spec_instance = AnthosObservabilityFeatureSpec.from_json(json)
# print the JSON string representation of the object
print(AnthosObservabilityFeatureSpec.to_json())

# convert the object into a dict
anthos_observability_feature_spec_dict = anthos_observability_feature_spec_instance.to_dict()
# create an instance of AnthosObservabilityFeatureSpec from a dict
anthos_observability_feature_spec_from_dict = AnthosObservabilityFeatureSpec.from_dict(anthos_observability_feature_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


