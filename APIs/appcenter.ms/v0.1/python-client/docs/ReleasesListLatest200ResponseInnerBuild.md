# ReleasesListLatest200ResponseInnerBuild

Build information for the release 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch_name** | **str** | The branch name of the build producing the release | [optional] 
**commit_hash** | **str** | The commit hash of the build producing the release | [optional] 
**commit_message** | **str** | The commit message of the build producing the release | [optional] 

## Example

```python
from openapi_client.models.releases_list_latest200_response_inner_build import ReleasesListLatest200ResponseInnerBuild

# TODO update the JSON string below
json = "{}"
# create an instance of ReleasesListLatest200ResponseInnerBuild from a JSON string
releases_list_latest200_response_inner_build_instance = ReleasesListLatest200ResponseInnerBuild.from_json(json)
# print the JSON string representation of the object
print(ReleasesListLatest200ResponseInnerBuild.to_json())

# convert the object into a dict
releases_list_latest200_response_inner_build_dict = releases_list_latest200_response_inner_build_instance.to_dict()
# create an instance of ReleasesListLatest200ResponseInnerBuild from a dict
releases_list_latest200_response_inner_build_from_dict = ReleasesListLatest200ResponseInnerBuild.from_dict(releases_list_latest200_response_inner_build_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


