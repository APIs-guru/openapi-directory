# BuildFilter

Properties that are enabled for Odata querying.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_id** | **str** | The unique identifier for the build. | [optional] 
**build_task_name** | **str** | The name of the build task that the build corresponds to. | [optional] 
**build_type** | **str** | The type of build. | [optional] 
**create_time** | **datetime** | The create time for a build. | [optional] 
**finish_time** | **datetime** | The time the build finished. | [optional] 
**is_archive_enabled** | **bool** | The value that indicates whether archiving is enabled or not. | [optional] 
**output_image_manifests** | **str** | The list of comma-separated image manifests that were generated from the build. | [optional] 
**status** | **str** | The current status of the build. | [optional] 

## Example

```python
from openapi_client.models.build_filter import BuildFilter

# TODO update the JSON string below
json = "{}"
# create an instance of BuildFilter from a JSON string
build_filter_instance = BuildFilter.from_json(json)
# print the JSON string representation of the object
print(BuildFilter.to_json())

# convert the object into a dict
build_filter_dict = build_filter_instance.to_dict()
# create an instance of BuildFilter from a dict
build_filter_from_dict = BuildFilter.from_dict(build_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


