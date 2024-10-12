# ReleasesGetLatestByDistributionGroup200ResponseBuild

Contains metadata about the build that produced the release being uploaded

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch_name** | **str** | The branch name of the build producing the release | [optional] 
**commit_hash** | **str** | The commit hash of the build producing the release | [optional] 
**commit_message** | **str** | The commit message of the build producing the release | [optional] 

## Example

```python
from openapi_client.models.releases_get_latest_by_distribution_group200_response_build import ReleasesGetLatestByDistributionGroup200ResponseBuild

# TODO update the JSON string below
json = "{}"
# create an instance of ReleasesGetLatestByDistributionGroup200ResponseBuild from a JSON string
releases_get_latest_by_distribution_group200_response_build_instance = ReleasesGetLatestByDistributionGroup200ResponseBuild.from_json(json)
# print the JSON string representation of the object
print(ReleasesGetLatestByDistributionGroup200ResponseBuild.to_json())

# convert the object into a dict
releases_get_latest_by_distribution_group200_response_build_dict = releases_get_latest_by_distribution_group200_response_build_instance.to_dict()
# create an instance of ReleasesGetLatestByDistributionGroup200ResponseBuild from a dict
releases_get_latest_by_distribution_group200_response_build_from_dict = ReleasesGetLatestByDistributionGroup200ResponseBuild.from_dict(releases_get_latest_by_distribution_group200_response_build_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


