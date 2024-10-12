# Release

 A `Release` is a particular [collection of configurations and files](sites.versions) that is set to be public at a particular time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | The deploy description when the release was created. The value can be up to 512 characters. | [optional] 
**name** | **str** | Output only. The unique identifier for the release, in either of the following formats: - sites/SITE_ID/releases/RELEASE_ID - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID This name is provided in the response body when you call [&#x60;releases.create&#x60;](sites.releases/create) or [&#x60;channels.releases.create&#x60;](sites.channels.releases/create). | [optional] 
**release_time** | **str** | Output only. The time at which the version is set to be public. | [optional] 
**release_user** | [**ActingUser**](ActingUser.md) |  | [optional] 
**type** | **str** | Explains the reason for the release. Specify a value for this field only when creating a &#x60;SITE_DISABLE&#x60; type release. | [optional] 
**version** | [**Version**](Version.md) |  | [optional] 

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


