# BuildTaskBuildRequest

The queue build parameters based on a build task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_task_name** | **str** | The name of build task against which build has to be queued. | 

## Example

```python
from openapi_client.models.build_task_build_request import BuildTaskBuildRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BuildTaskBuildRequest from a JSON string
build_task_build_request_instance = BuildTaskBuildRequest.from_json(json)
# print the JSON string representation of the object
print(BuildTaskBuildRequest.to_json())

# convert the object into a dict
build_task_build_request_dict = build_task_build_request_instance.to_dict()
# create an instance of BuildTaskBuildRequest from a dict
build_task_build_request_from_dict = BuildTaskBuildRequest.from_dict(build_task_build_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


