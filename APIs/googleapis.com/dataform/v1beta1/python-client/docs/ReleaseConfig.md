# ReleaseConfig

Represents a Dataform release configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_compilation_config** | [**CodeCompilationConfig**](CodeCompilationConfig.md) |  | [optional] 
**cron_schedule** | **str** | Optional. Optional schedule (in cron format) for automatic creation of compilation results. | [optional] 
**disabled** | **bool** | Optional. Disables automatic creation of compilation results. | [optional] 
**git_commitish** | **str** | Required. Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. Examples: - a commit SHA: &#x60;12ade345&#x60; - a tag: &#x60;tag1&#x60; - a branch name: &#x60;branch1&#x60; | [optional] 
**name** | **str** | Output only. The release config&#39;s name. | [optional] [readonly] 
**recent_scheduled_release_records** | [**List[ScheduledReleaseRecord]**](ScheduledReleaseRecord.md) | Output only. Records of the 10 most recent scheduled release attempts, ordered in in descending order of &#x60;release_time&#x60;. Updated whenever automatic creation of a compilation result is triggered by cron_schedule. | [optional] [readonly] 
**release_compilation_result** | **str** | Optional. The name of the currently released compilation result for this release config. This value is updated when a compilation result is automatically created from this release config (using cron_schedule), or when this resource is updated by API call (perhaps to roll back to an earlier release). The compilation result must have been created using this release config. Must be in the format &#x60;projects/*/locations/*/repositories/*/compilationResults/*&#x60;. | [optional] 
**time_zone** | **str** | Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC. | [optional] 

## Example

```python
from openapi_client.models.release_config import ReleaseConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseConfig from a JSON string
release_config_instance = ReleaseConfig.from_json(json)
# print the JSON string representation of the object
print(ReleaseConfig.to_json())

# convert the object into a dict
release_config_dict = release_config_instance.to_dict()
# create an instance of ReleaseConfig from a dict
release_config_from_dict = ReleaseConfig.from_dict(release_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


