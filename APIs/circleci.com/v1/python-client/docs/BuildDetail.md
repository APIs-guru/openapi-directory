# BuildDetail

previous build

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_commit_details** | [**List[CommitDetail]**](CommitDetail.md) |  | [optional] 
**compare** | **str** |  | [optional] 
**job_name** | **str** |  | [optional] 
**node** | **object** |  | [optional] 
**previous_successful_build** | [**PreviousBuild**](PreviousBuild.md) |  | [optional] 
**retries** | **bool** |  | [optional] 
**ssh_enabled** | **bool** |  | [optional] 
**timedout** | **bool** |  | [optional] 
**usage_queued_at** | **datetime** |  | [optional] 
**user** | [**User**](User.md) |  | [optional] 

## Example

```python
from openapi_client.models.build_detail import BuildDetail

# TODO update the JSON string below
json = "{}"
# create an instance of BuildDetail from a JSON string
build_detail_instance = BuildDetail.from_json(json)
# print the JSON string representation of the object
print(BuildDetail.to_json())

# convert the object into a dict
build_detail_dict = build_detail_instance.to_dict()
# create an instance of BuildDetail from a dict
build_detail_from_dict = BuildDetail.from_dict(build_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


