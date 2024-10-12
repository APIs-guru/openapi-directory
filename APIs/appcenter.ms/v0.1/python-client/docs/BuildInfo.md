# BuildInfo

Contains metadata about the build that produced the release being uploaded

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch_name** | **str** | The branch name of the build producing the release | [optional] 
**commit_hash** | **str** | The commit hash of the build producing the release | [optional] 
**commit_message** | **str** | The commit message of the build producing the release | [optional] 

## Example

```python
from openapi_client.models.build_info import BuildInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BuildInfo from a JSON string
build_info_instance = BuildInfo.from_json(json)
# print the JSON string representation of the object
print(BuildInfo.to_json())

# convert the object into a dict
build_info_dict = build_info_instance.to_dict()
# create an instance of BuildInfo from a dict
build_info_from_dict = BuildInfo.from_dict(build_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


