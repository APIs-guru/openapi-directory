# FeatureDependency


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature_name** | **str** | The name of the feature, for example, UserApps, UEIdentity, etc. | 
**version** | **str** | The version of the feature. | 

## Example

```python
from openapi_client.models.feature_dependency import FeatureDependency

# TODO update the JSON string below
json = "{}"
# create an instance of FeatureDependency from a JSON string
feature_dependency_instance = FeatureDependency.from_json(json)
# print the JSON string representation of the object
print(FeatureDependency.to_json())

# convert the object into a dict
feature_dependency_dict = feature_dependency_instance.to_dict()
# create an instance of FeatureDependency from a dict
feature_dependency_from_dict = FeatureDependency.from_dict(feature_dependency_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


