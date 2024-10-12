# WowzaStreamTarget


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chunk_size** | **str** | &lt;strong&gt;The &lt;em&gt;chunk_size&lt;/em&gt; parameter is deprecated. To set the chunk size of a stream target, use the POST /stream_targets/[stream_target_id]/properties endpoint.&lt;/strong&gt; Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;WowzaStreamTarget&lt;/strong&gt; and &lt;em&gt;provider&lt;/em&gt; is &lt;strong&gt;akamai_cupertino&lt;/strong&gt;. The segment duration for HLS encoding. The default is &lt;strong&gt;10&lt;/strong&gt;. | [optional] 
**location** | **str** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;WowzaStreamTarget&lt;/strong&gt; and &lt;em&gt;provider&lt;/em&gt; is &lt;em&gt;not&lt;/em&gt; &lt;strong&gt;akamai_cupertino&lt;/strong&gt;. Choose a location as close as possible to your video source. | 
**name** | **str** | A descriptive name for the stream target. Maximum 255 characters. | 
**provider** | **str** | The CDN for the target. &lt;br /&gt;&lt;br /&gt;Required for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;CustomStreamTarget&lt;/strong&gt;. Valid values for &lt;strong&gt;CustomStreamTarget&lt;/strong&gt; are &lt;strong&gt;akamai&lt;/strong&gt;, &lt;strong&gt;akamai_cupertino&lt;/strong&gt;, &lt;strong&gt;akamai_rtmp&lt;/strong&gt;, &lt;strong&gt;limelight&lt;/strong&gt;, &lt;strong&gt;rtmp&lt;/strong&gt;, and &lt;strong&gt;ustream&lt;/strong&gt;. Values can be appended with **_mock** to use in the sandbox environment. &lt;br /&gt;&lt;br /&gt;Valid values for &lt;strong&gt;WowzaStreamTarget&lt;/strong&gt; are &lt;strong&gt;akamai&lt;/strong&gt;, &lt;strong&gt;akamai_cupertino&lt;/strong&gt; (default), &lt;strong&gt;akamai_legacy_rtmp&lt;/strong&gt;, and &lt;strong&gt;wowza&lt;/strong&gt;. &lt;br /&gt;&lt;br /&gt;&lt;strong&gt;UltraLowLatencyStreamTarget&lt;/strong&gt; defaults to and must be &lt;strong&gt;wowza&lt;/strong&gt;. | [optional] 
**type** | **str** | &lt;strong&gt;WowzaStreamTarget&lt;/strong&gt; is a Wowza CDN target. &lt;strong&gt;UltraLowLatencyStreamTarget&lt;/strong&gt; is an ultra low latency Wowza stream target. &lt;strong&gt;CustomStreamTarget&lt;/strong&gt; (the default) is an external, third-party destination. &lt;!--and &lt;strong&gt;FacebookStreamTarget&lt;/strong&gt; (a Facebook Live target).--&gt; | [optional] 
**use_cors** | **bool** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;WowzaStreamTarget&lt;/strong&gt; and &lt;em&gt;provider&lt;/em&gt; is &lt;strong&gt;akamai_cupertino&lt;/strong&gt;. CORS, or cross-origin resource sharing, allows streams to be sent to providers such as Peer5, Viblast, and Streamroot, which implement a peer-to-peer grid delivery system. | [optional] 
**use_https** | **bool** | &lt;strong&gt;The &lt;em&gt;use_https&lt;/em&gt; parameter is deprecated. Use the POST /stream_targets/[&lt;em&gt;stream_target_id&lt;/em&gt;]/properties endpoint and the &lt;em&gt;relative_playlists&lt;/em&gt; parameter instead.&lt;/strong&gt; | [optional] 
**use_secure_ingest** | **bool** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;WowzaStreamTarget&lt;/strong&gt; and &lt;em&gt;provider&lt;/em&gt; is &lt;strong&gt;akamai_cupertino&lt;/strong&gt;. If &lt;strong&gt;true&lt;/strong&gt;, generates a &lt;em&gt;secure_ingest_query_param&lt;/em&gt; to securely deliver the stream from the transcoder to the provider. | [optional] 

## Example

```python
from openapi_client.models.wowza_stream_target import WowzaStreamTarget

# TODO update the JSON string below
json = "{}"
# create an instance of WowzaStreamTarget from a JSON string
wowza_stream_target_instance = WowzaStreamTarget.from_json(json)
# print the JSON string representation of the object
print(WowzaStreamTarget.to_json())

# convert the object into a dict
wowza_stream_target_dict = wowza_stream_target_instance.to_dict()
# create an instance of WowzaStreamTarget from a dict
wowza_stream_target_from_dict = WowzaStreamTarget.from_dict(wowza_stream_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


