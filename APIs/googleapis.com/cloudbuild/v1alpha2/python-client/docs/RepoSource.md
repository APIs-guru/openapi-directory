# RepoSource

Location of the source in a Google Cloud Source Repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch_name** | **str** | Regex matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax | [optional] 
**commit_sha** | **str** | Explicit commit SHA to build. | [optional] 
**dir** | **str** | Directory, relative to the source root, in which to run the build. This must be a relative path. If a step&#39;s &#x60;dir&#x60; is specified and is an absolute path, this value is ignored for that step&#39;s execution. | [optional] 
**invert_regex** | **bool** | Only trigger a build if the revision regex does NOT match the revision regex. | [optional] 
**project_id** | **str** | ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed. | [optional] 
**repo_name** | **str** | Name of the Cloud Source Repository. | [optional] 
**substitutions** | **Dict[str, str]** | Substitutions to use in a triggered build. Should only be used with RunBuildTrigger | [optional] 
**tag_name** | **str** | Regex matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax | [optional] 

## Example

```python
from openapi_client.models.repo_source import RepoSource

# TODO update the JSON string below
json = "{}"
# create an instance of RepoSource from a JSON string
repo_source_instance = RepoSource.from_json(json)
# print the JSON string representation of the object
print(RepoSource.to_json())

# convert the object into a dict
repo_source_dict = repo_source_instance.to_dict()
# create an instance of RepoSource from a dict
repo_source_from_dict = RepoSource.from_dict(repo_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


