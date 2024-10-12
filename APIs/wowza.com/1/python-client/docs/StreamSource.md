# StreamSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_ip_address** | **str** | If &lt;em&gt;location_method&lt;/em&gt; is &lt;strong&gt;ip_address&lt;/strong&gt;, specify the backup IP address of the source encoder. | [optional] 
**backup_url** | **str** | The backup RTMP playback URL of the transcoded stream. | [optional] 
**created_at** | **datetime** | The date and time that the stream source was created. | [optional] 
**id** | **str** | The unique alphanumeric string that identifies the stream source. | [optional] 
**ip_address** | **str** | If &lt;em&gt;location_method&lt;/em&gt; is &lt;strong&gt;ip_address&lt;/strong&gt;, specify the primary IP address of the source encoder. | [optional] 
**location** | **str** | If &lt;em&gt;location_method&lt;/em&gt; is &lt;strong&gt;region&lt;/strong&gt;, specify a location as close as possible to the source encoder. | [optional] 
**location_method** | **str** | The method used to determine the location of the stream source, either by &lt;strong&gt;region&lt;/strong&gt; or based on the source encoder&#39;s &lt;strong&gt;ip_address&lt;/strong&gt;. | [optional] 
**name** | **str** | A descriptive name for the stream source. Maximum 255 characters. | [optional] 
**password** | **str** | The password that you can use to configure the source encoder to authenticate to the stream source. | [optional] 
**playback_url** | **str** | The full RTMP playback URL. | [optional] 
**primary_url** | **str** | The primary RTMP playback URL of the transcoded stream. | [optional] 
**provider** | **str** | The provider of the Wowza Streaming Cloud stream source. | [optional] 
**stream_name** | **str** | The name of the stream that you can use to configure the source encoder to connect to the stream source. | [optional] 
**updated_at** | **datetime** | The date and time that the stream source was updated. | [optional] 
**username** | **str** | The username that you can use to configure the source encoder to authenticate to the stream source. | [optional] 

## Example

```python
from openapi_client.models.stream_source import StreamSource

# TODO update the JSON string below
json = "{}"
# create an instance of StreamSource from a JSON string
stream_source_instance = StreamSource.from_json(json)
# print the JSON string representation of the object
print(StreamSource.to_json())

# convert the object into a dict
stream_source_dict = stream_source_instance.to_dict()
# create an instance of StreamSource from a dict
stream_source_from_dict = StreamSource.from_dict(stream_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


