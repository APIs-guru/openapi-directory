# IXPSpecificFeatureFlagPartial

IXP-Specific Feature Flag

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the feature flag.  | [optional] 
**name** | **str** | The name of the feature flag.  | [optional] 

## Example

```python
from openapi_client.models.ixp_specific_feature_flag_partial import IXPSpecificFeatureFlagPartial

# TODO update the JSON string below
json = "{}"
# create an instance of IXPSpecificFeatureFlagPartial from a JSON string
ixp_specific_feature_flag_partial_instance = IXPSpecificFeatureFlagPartial.from_json(json)
# print the JSON string representation of the object
print(IXPSpecificFeatureFlagPartial.to_json())

# convert the object into a dict
ixp_specific_feature_flag_partial_dict = ixp_specific_feature_flag_partial_instance.to_dict()
# create an instance of IXPSpecificFeatureFlagPartial from a dict
ixp_specific_feature_flag_partial_from_dict = IXPSpecificFeatureFlagPartial.from_dict(ixp_specific_feature_flag_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


