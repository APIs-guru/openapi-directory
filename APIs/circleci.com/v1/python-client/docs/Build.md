# Build


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | commit message body | [optional] 
**branch** | **str** |  | [optional] 
**build_time_millis** | **int** |  | [optional] 
**build_url** | **str** |  | [optional] 
**committer_email** | **str** |  | [optional] 
**committer_name** | **str** |  | [optional] 
**dont_build** | **str** | reason why we didn&#39;t build, if we didn&#39;t build | [optional] 
**lifecycle** | [**Lifecycle**](Lifecycle.md) |  | [optional] 
**previous** | [**PreviousBuild**](PreviousBuild.md) |  | [optional] 
**queued_at** | **datetime** | time build was queued | [optional] 
**reponame** | **str** |  | [optional] 
**retry_of** | **int** | build_num of the build this is a retry of | [optional] 
**start_time** | **datetime** | time build started | [optional] 
**stop_time** | **datetime** | time build finished | [optional] 
**subject** | **str** |  | [optional] 
**username** | **str** |  | [optional] 
**vcs_url** | **str** |  | [optional] 
**why** | **str** | short string explaining the reason we built | [optional] 

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


