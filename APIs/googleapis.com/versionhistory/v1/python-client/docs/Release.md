# Release

A Release is owned by a Version. A Release contains information about the release(s) of its parent version. This includes when the release began and ended, as well as what percentage it was released at. If the version is released again, or if the serving percentage changes, it will create another release under the version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fraction** | **float** | Rollout fraction. This fraction indicates the fraction of people that should receive this version in this release. If the fraction is not specified in ReleaseManager, the API will assume fraction is 1. | [optional] 
**fraction_group** | **str** | Rollout fraction group. Only fractions with the same fraction_group are statistically comparable: there may be non-fractional differences between different fraction groups. | [optional] 
**name** | **str** | Release name. Format is \&quot;{product}/platforms/{platform}/channels/{channel}/versions/{version}/releases/{release}\&quot; | [optional] 
**serving** | [**Interval**](Interval.md) |  | [optional] 
**version** | **str** | String containing just the version number. e.g. \&quot;84.0.4147.38\&quot; | [optional] 

## Example

```python
from openapi_client.models.release import Release

# TODO update the JSON string below
json = "{}"
# create an instance of Release from a JSON string
release_instance = Release.from_json(json)
# print the JSON string representation of the object
print(Release.to_json())

# convert the object into a dict
release_dict = release_instance.to_dict()
# create an instance of Release from a dict
release_from_dict = Release.from_dict(release_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


