# Build

Build information of the Instance if it's in `ACTIVE` state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commit_id** | **str** | Output only. Commit ID of the latest commit in the build. | [optional] [readonly] 
**commit_time** | **str** | Output only. Commit time of the latest commit in the build. | [optional] [readonly] 
**repo** | **str** | Output only. Path of the open source repository: github.com/apigee/registry. | [optional] [readonly] 

## Example

```python
from openapi_client.models.build import Build

# TODO update the JSON string below
json = "{}"
# create an instance of Build from a JSON string
build_instance = Build.from_json(json)
# print the JSON string representation of the object
print(Build.to_json())

# convert the object into a dict
build_dict = build_instance.to_dict()
# create an instance of Build from a dict
build_from_dict = Build.from_dict(build_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


