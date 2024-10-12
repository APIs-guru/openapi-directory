# Segment

An audio segment in an episode.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channels** | **int** | The number of audio channels in the segment. Generated at creation. | [optional] 
**created_date** | **datetime** | The date the segment was created. Generated at creation. | [optional] 
**episode_id** | **int** | The ID of the episode that owns the segment. | 
**file_name** | **str** | The name of the audio content file. Generated at creation. | [optional] 
**file_size** | **int** | The size of the audio content file in bytes. Generated at creation. | [optional] 
**id** | **int** | The unique ID of the segment. Generated at creation. | [optional] 
**in_cue** | **str** | The in-cue copy that signals the start of the segment to a board operator. | [optional] 
**last_modified_date** | **datetime** | The date the segment was last modified/updated. Automatically updated on any write operation. | [optional] 
**length** | **int** | The length (duration) of the segment in seconds. | [optional] 
**original_file_name** | **str** | The original name of the audio content file. | [optional] 
**out_cue** | **str** | The out-cue copy that signals the end of the segment to a board operator. | [optional] 
**segment_number** | **int** | The number of the segment in the episode, starting with 1. | 

## Example

```python
from openapi_client.models.segment import Segment

# TODO update the JSON string below
json = "{}"
# create an instance of Segment from a JSON string
segment_instance = Segment.from_json(json)
# print the JSON string representation of the object
print(Segment.to_json())

# convert the object into a dict
segment_dict = segment_instance.to_dict()
# create an instance of Segment from a dict
segment_from_dict = Segment.from_dict(segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


