# Version

A `Version` is a configuration and a collection of static files which determine how a site is displayed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**ServingConfig**](ServingConfig.md) |  | [optional] 
**create_time** | **str** | Output only. The time at which the version was created. | [optional] 
**create_user** | [**ActingUser**](ActingUser.md) |  | [optional] 
**delete_time** | **str** | Output only. The time at which the version was &#x60;DELETED&#x60;. | [optional] 
**delete_user** | [**ActingUser**](ActingUser.md) |  | [optional] 
**file_count** | **str** | Output only. The total number of files associated with the version. This value is calculated after a version is &#x60;FINALIZED&#x60;. | [optional] 
**finalize_time** | **str** | Output only. The time at which the version was &#x60;FINALIZED&#x60;. | [optional] 
**finalize_user** | [**ActingUser**](ActingUser.md) |  | [optional] 
**labels** | **Dict[str, str]** | The labels used for extra metadata and/or filtering. | [optional] 
**name** | **str** | The fully-qualified resource name for the version, in the format: sites/ SITE_ID/versions/VERSION_ID This name is provided in the response body when you call [&#x60;CreateVersion&#x60;](sites.versions/create). | [optional] 
**status** | **str** | The deploy status of the version. For a successful deploy, call [&#x60;CreateVersion&#x60;](sites.versions/create) to make a new version (&#x60;CREATED&#x60; status), [upload all desired files](sites.versions/populateFiles) to the version, then [update](sites.versions/patch) the version to the &#x60;FINALIZED&#x60; status. Note that if you leave the version in the &#x60;CREATED&#x60; state for more than 12 hours, the system will automatically mark the version as &#x60;ABANDONED&#x60;. You can also change the status of a version to &#x60;DELETED&#x60; by calling [&#x60;DeleteVersion&#x60;](sites.versions/delete). | [optional] 
**version_bytes** | **str** | Output only. The total stored bytesize of the version. This value is calculated after a version is &#x60;FINALIZED&#x60;. | [optional] 

## Example

```python
from openapi_client.models.version import Version

# TODO update the JSON string below
json = "{}"
# create an instance of Version from a JSON string
version_instance = Version.from_json(json)
# print the JSON string representation of the object
print(Version.to_json())

# convert the object into a dict
version_dict = version_instance.to_dict()
# create an instance of Version from a dict
version_from_dict = Version.from_dict(version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


