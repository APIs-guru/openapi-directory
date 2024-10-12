# Build


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_number** | **str** | The build number | 
**finish_time** | **str** | The time the build was finished | [optional] 
**id** | **int** | The build ID | 
**last_changed_date** | **str** | The time the build status was last changed | [optional] 
**queue_time** | **str** | The time the build was queued | 
**result** | **str** | The build result | 
**source_branch** | **str** | The source branch name | 
**source_version** | **str** | The source SHA | 
**start_time** | **str** | The time the build was started | [optional] 
**status** | **str** | The build status | 

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


