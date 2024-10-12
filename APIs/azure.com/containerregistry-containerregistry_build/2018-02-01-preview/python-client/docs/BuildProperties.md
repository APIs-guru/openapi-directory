# BuildProperties

The properties for a build.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_id** | **str** | The unique identifier for the build. | [optional] 
**build_task** | **str** | The build task with which the build was started. | [optional] 
**build_type** | **str** | The type of build. | [optional] 
**create_time** | **datetime** | The time the build was created. | [optional] 
**finish_time** | **datetime** | The time the build finished. | [optional] 
**git_commit_trigger** | [**GitCommitTrigger**](GitCommitTrigger.md) |  | [optional] 
**image_update_trigger** | [**ImageUpdateTrigger**](ImageUpdateTrigger.md) |  | [optional] 
**is_archive_enabled** | **bool** | The value that indicates whether archiving is enabled or not. | [optional] [default to False]
**last_updated_time** | **datetime** | The last updated time for the build. | [optional] 
**output_images** | [**List[ImageDescriptor]**](ImageDescriptor.md) | The list of all images that were generated from the build. | [optional] 
**platform** | [**PlatformProperties**](PlatformProperties.md) |  | [optional] 
**provisioning_state** | **str** | The provisioning state of a build. | [optional] 
**start_time** | **datetime** | The time the build started. | [optional] 
**status** | **str** | The current status of the build. | [optional] 

## Example

```python
from openapi_client.models.build_properties import BuildProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BuildProperties from a JSON string
build_properties_instance = BuildProperties.from_json(json)
# print the JSON string representation of the object
print(BuildProperties.to_json())

# convert the object into a dict
build_properties_dict = build_properties_instance.to_dict()
# create an instance of BuildProperties from a dict
build_properties_from_dict = BuildProperties.from_dict(build_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


