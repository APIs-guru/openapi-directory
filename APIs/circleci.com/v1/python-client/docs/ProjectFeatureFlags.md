# ProjectFeatureFlags


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_fork_prs** | **bool** |  | [optional] 
**fleet** | **bool** |  | [optional] 
**junit** | **bool** |  | [optional] 
**oss** | **bool** |  | [optional] 
**osx** | **bool** |  | [optional] 
**set_github_status** | **bool** |  | [optional] 
**trusty_beta** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.project_feature_flags import ProjectFeatureFlags

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectFeatureFlags from a JSON string
project_feature_flags_instance = ProjectFeatureFlags.from_json(json)
# print the JSON string representation of the object
print(ProjectFeatureFlags.to_json())

# convert the object into a dict
project_feature_flags_dict = project_feature_flags_instance.to_dict()
# create an instance of ProjectFeatureFlags from a dict
project_feature_flags_from_dict = ProjectFeatureFlags.from_dict(project_feature_flags_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


