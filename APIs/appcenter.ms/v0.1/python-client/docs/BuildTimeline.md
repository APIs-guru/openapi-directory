# BuildTimeline


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**records** | [**List[BuildTimelineRecordsInner]**](BuildTimelineRecordsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.build_timeline import BuildTimeline

# TODO update the JSON string below
json = "{}"
# create an instance of BuildTimeline from a JSON string
build_timeline_instance = BuildTimeline.from_json(json)
# print the JSON string representation of the object
print(BuildTimeline.to_json())

# convert the object into a dict
build_timeline_dict = build_timeline_instance.to_dict()
# create an instance of BuildTimeline from a dict
build_timeline_from_dict = BuildTimeline.from_dict(build_timeline_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


