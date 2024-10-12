# UsageTimeTranscoder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted** | **bool** | A value of &lt;strong&gt;true&lt;/strong&gt; indicates that the live stream or transcoder has been removed from Wowza Streaming Cloud. | [optional] 
**id** | **int** | The unique alphanumeric string that identifies the live stream or transcoder. | [optional] 
**name** | **str** | A descriptive name for the live stream or transcoder. | [optional] 
**seconds_billed** | **int** | The amount of stream processing time, in seconds, that was billed for the live stream or transcoder. | [optional] 
**seconds_used** | **int** | The amount of time, in seconds, that it took for the live stream or transcoder to be processed. | [optional] 

## Example

```python
from openapi_client.models.usage_time_transcoder import UsageTimeTranscoder

# TODO update the JSON string below
json = "{}"
# create an instance of UsageTimeTranscoder from a JSON string
usage_time_transcoder_instance = UsageTimeTranscoder.from_json(json)
# print the JSON string representation of the object
print(UsageTimeTranscoder.to_json())

# convert the object into a dict
usage_time_transcoder_dict = usage_time_transcoder_instance.to_dict()
# create an instance of UsageTimeTranscoder from a dict
usage_time_transcoder_from_dict = UsageTimeTranscoder.from_dict(usage_time_transcoder_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


