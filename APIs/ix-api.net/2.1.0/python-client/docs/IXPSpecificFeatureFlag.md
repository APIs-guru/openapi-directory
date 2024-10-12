# IXPSpecificFeatureFlag


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the feature flag.  | 
**name** | **str** | The name of the feature flag.  | 

## Example

```python
from openapi_client.models.ixp_specific_feature_flag import IXPSpecificFeatureFlag

# TODO update the JSON string below
json = "{}"
# create an instance of IXPSpecificFeatureFlag from a JSON string
ixp_specific_feature_flag_instance = IXPSpecificFeatureFlag.from_json(json)
# print the JSON string representation of the object
print(IXPSpecificFeatureFlag.to_json())

# convert the object into a dict
ixp_specific_feature_flag_dict = ixp_specific_feature_flag_instance.to_dict()
# create an instance of IXPSpecificFeatureFlag from a dict
ixp_specific_feature_flag_from_dict = IXPSpecificFeatureFlag.from_dict(ixp_specific_feature_flag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


