# SkaffoldGitSource

Git repository containing Skaffold Config modules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | Optional. Relative path from the repository root to the Skaffold file. | [optional] 
**ref** | **str** | Optional. Git ref the package should be cloned from. | [optional] 
**repo** | **str** | Required. Git repository the package should be cloned from. | [optional] 

## Example

```python
from openapi_client.models.skaffold_git_source import SkaffoldGitSource

# TODO update the JSON string below
json = "{}"
# create an instance of SkaffoldGitSource from a JSON string
skaffold_git_source_instance = SkaffoldGitSource.from_json(json)
# print the JSON string representation of the object
print(SkaffoldGitSource.to_json())

# convert the object into a dict
skaffold_git_source_dict = skaffold_git_source_instance.to_dict()
# create an instance of SkaffoldGitSource from a dict
skaffold_git_source_from_dict = SkaffoldGitSource.from_dict(skaffold_git_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


