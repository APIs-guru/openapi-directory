# Recording


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date and time that the recording was created. | [optional] 
**download_url** | **str** | The URL that can be used to download the recording. | [optional] 
**duration** | **int** | The length of the recording, in hours, minutes, and seconds. | [optional] 
**file_name** | **str** | The file name of the recording. | [optional] 
**file_size** | **int** | The file size of the recording. | [optional] 
**id** | **str** | The unique alphanumeric string that identifies the recording. | [optional] 
**reason** | **str** | The reason that a recording has the state &lt;strong&gt;failed&lt;/strong&gt;. | [optional] 
**starts_at** | **str** | The date and time that the recording started. | [optional] 
**state** | **str** | The state of the recording. | [optional] 
**transcoder_id** | **str** | The unique alphanumeric string that identifies the transcoder that was recorded. | [optional] 
**transcoder_name** | **str** | The descriptive name of the transcoder that was recorded. | [optional] 
**transcoding_uptime_id** | **datetime** | The unique identifier associated with the transcoding uptime for this recording. | [optional] 
**updated_at** | **datetime** | The date and time that the recording was updated. | [optional] 

## Example

```python
from openapi_client.models.recording import Recording

# TODO update the JSON string below
json = "{}"
# create an instance of Recording from a JSON string
recording_instance = Recording.from_json(json)
# print the JSON string representation of the object
print(Recording.to_json())

# convert the object into a dict
recording_dict = recording_instance.to_dict()
# create an instance of Recording from a dict
recording_from_dict = Recording.from_dict(recording_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


