# BuildTimelineRecord


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_operation** | **str** |  | [optional] 
**error_count** | **float** |  | [optional] 
**finish_time** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**issues** | [**List[BuildTimelineRecordsInnerIssuesInner]**](BuildTimelineRecordsInnerIssuesInner.md) |  | [optional] 
**name** | **str** |  | [optional] 
**order** | **float** |  | [optional] 
**percent_complete** | **float** |  | [optional] 
**result** | **str** |  | [optional] 
**start_time** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**warning_count** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.build_timeline_record import BuildTimelineRecord

# TODO update the JSON string below
json = "{}"
# create an instance of BuildTimelineRecord from a JSON string
build_timeline_record_instance = BuildTimelineRecord.from_json(json)
# print the JSON string representation of the object
print(BuildTimelineRecord.to_json())

# convert the object into a dict
build_timeline_record_dict = build_timeline_record_instance.to_dict()
# create an instance of BuildTimelineRecord from a dict
build_timeline_record_from_dict = BuildTimelineRecord.from_dict(build_timeline_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


