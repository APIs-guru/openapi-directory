# UsageNetworkTranscoder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes_billed** | **int** | The amount of usage, in bytes, that was billed for the live stream or transcoder during the selected time frame. | [optional] 
**bytes_used** | **int** | The amount of content, in bytes, that went through the live stream or transcoder during the selected time frame. | [optional] 
**deleted** | **bool** | A value of &lt;strong&gt;true&lt;/strong&gt; indicates that the live stream or transcoder has been removed from Wowza Streaming Cloud. | [optional] 
**id** | **int** | The unique alphanumeric string that identifies the live stream or transcoder. | [optional] 
**name** | **str** | A descriptive name for the live stream or transcoder. | [optional] 

## Example

```python
from openapi_client.models.usage_network_transcoder import UsageNetworkTranscoder

# TODO update the JSON string below
json = "{}"
# create an instance of UsageNetworkTranscoder from a JSON string
usage_network_transcoder_instance = UsageNetworkTranscoder.from_json(json)
# print the JSON string representation of the object
print(UsageNetworkTranscoder.to_json())

# convert the object into a dict
usage_network_transcoder_dict = usage_network_transcoder_instance.to_dict()
# create an instance of UsageNetworkTranscoder from a dict
usage_network_transcoder_from_dict = UsageNetworkTranscoder.from_dict(usage_network_transcoder_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


