# UsageNetworkStreamSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes_billed** | **int** | The amount of usage, in bytes, that was billed for the stream source during the selected time frame. | [optional] 
**bytes_used** | **int** | The amount of content, in bytes, that went through the stream source during the selected time frame. | [optional] 
**deleted** | **bool** | A value of &lt;strong&gt;true&lt;/strong&gt; indicates that the stream source has been removed from Wowza Streaming Cloud. | [optional] 
**id** | **str** | The unique alphanumeric string that identifies the stream source. | [optional] 
**name** | **str** | A descriptive name for the stream source. | [optional] 

## Example

```python
from openapi_client.models.usage_network_stream_source import UsageNetworkStreamSource

# TODO update the JSON string below
json = "{}"
# create an instance of UsageNetworkStreamSource from a JSON string
usage_network_stream_source_instance = UsageNetworkStreamSource.from_json(json)
# print the JSON string representation of the object
print(UsageNetworkStreamSource.to_json())

# convert the object into a dict
usage_network_stream_source_dict = usage_network_stream_source_instance.to_dict()
# create an instance of UsageNetworkStreamSource from a dict
usage_network_stream_source_from_dict = UsageNetworkStreamSource.from_dict(usage_network_stream_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


