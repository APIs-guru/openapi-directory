# DataplaneV2FeatureSpec

**Dataplane V2**: Spec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_encryption** | **bool** | Enable dataplane-v2 based encryption for multiple clusters. | [optional] 

## Example

```python
from openapi_client.models.dataplane_v2_feature_spec import DataplaneV2FeatureSpec

# TODO update the JSON string below
json = "{}"
# create an instance of DataplaneV2FeatureSpec from a JSON string
dataplane_v2_feature_spec_instance = DataplaneV2FeatureSpec.from_json(json)
# print the JSON string representation of the object
print(DataplaneV2FeatureSpec.to_json())

# convert the object into a dict
dataplane_v2_feature_spec_dict = dataplane_v2_feature_spec_instance.to_dict()
# create an instance of DataplaneV2FeatureSpec from a dict
dataplane_v2_feature_spec_from_dict = DataplaneV2FeatureSpec.from_dict(dataplane_v2_feature_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


