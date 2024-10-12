# FeatureSpec

**Workload Certificate**: The Hub-wide input for the WorkloadCertificate feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_config** | [**MembershipSpec**](MembershipSpec.md) |  | [optional] 
**provision_google_ca** | **str** | Immutable. Specifies CA configuration. | [optional] 

## Example

```python
from openapi_client.models.feature_spec import FeatureSpec

# TODO update the JSON string below
json = "{}"
# create an instance of FeatureSpec from a JSON string
feature_spec_instance = FeatureSpec.from_json(json)
# print the JSON string representation of the object
print(FeatureSpec.to_json())

# convert the object into a dict
feature_spec_dict = feature_spec_instance.to_dict()
# create an instance of FeatureSpec from a dict
feature_spec_from_dict = FeatureSpec.from_dict(feature_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


