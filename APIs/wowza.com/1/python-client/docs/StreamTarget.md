# StreamTarget


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_url** | **str** | The backup ingest URL for a target whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;WowzaStreamTarget&lt;/strong&gt; or &lt;strong&gt;CustomStreamTarget&lt;/strong&gt;. | [optional] 
**chunk_size** | **str** | &lt;strong&gt;The &lt;em&gt;chunk_size&lt;/em&gt; parameter is deprecated. To set the chunk size of a stream target, use the POST /stream_targets/[stream_target_id]/properties endpoint.&lt;/strong&gt; Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;WowzaStreamTarget&lt;/strong&gt; and &lt;em&gt;provider&lt;/em&gt; is &lt;strong&gt;akamai_cupertino&lt;/strong&gt;. The segment duration for HLS encoding. The default is &lt;strong&gt;10&lt;/strong&gt;. | [optional] 
**connection_code** | **str** | A six-character, alphanumeric string that allows Wowza Streaming Engine to send a transcoded stream to a &lt;strong&gt;WowzaStreamTarget&lt;/strong&gt; or for the Wowza GoCoder app to send an encoded stream to a &lt;strong&gt;UltraLowLatencyStreamTarget&lt;/strong&gt;. The code can be used once and expires 24 hours after it&#39;s created. | [optional] 
**connection_code_expires_at** | **datetime** | The date and time that the &lt;em&gt;connection_code&lt;/em&gt; expires. | [optional] 
**created_at** | **datetime** | The date and time that the stream target was created. | [optional] 
**enable_hls** | **bool** | Returned only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;UltraLowLatencyStreamTarget&lt;/strong&gt;. Indicates whether Apple HLS playback is enabled for the stream target. | [optional] 
**enabled** | **bool** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;UltraLowLatencyStreamTarget&lt;/strong&gt;. If &lt;strong&gt;true&lt;/strong&gt; (the default), the source stream is ready to be ingested. If **false**, the source stream won&#39;t be ingested by the target&#39;s origin server. | [optional] 
**hds_playback_url** | **str** | The web address that the target uses to play Adobe HDS streams. | [optional] 
**hls_playback_url** | **str** | Only for targets whose &lt;em&gt;provider&lt;/em&gt; is &lt;strong&gt;akamai_cupertino&lt;/strong&gt;. The web address that the target uses to play Apple HLS streams. | [optional] 
**id** | **str** | The unique alphanumeric string that identifies the stream target. | [optional] 
**ingest_ip_whitelist** | **List[str]** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;UltraLowLatencyStreamTarget&lt;/strong&gt; and &lt;em&gt;source_delivery_method&lt;/em&gt; is **push**. A list of IP addresses that can be used to connect to the target&#39;s origin server. | [optional] 
**location** | **str** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;WowzaStreamTarget&lt;/strong&gt; and &lt;em&gt;provider&lt;/em&gt; is &lt;em&gt;not&lt;/em&gt; &lt;strong&gt;akamai_cupertino&lt;/strong&gt;. Choose a location as close as possible to your video source. | [optional] 
**name** | **str** | A descriptive name for the stream target. Maximum 255 characters. | [optional] 
**password** | **str** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;CustomStreamTarget&lt;/strong&gt; and &lt;em&gt;provider&lt;/em&gt; is &lt;em&gt;not&lt;/em&gt; **akamai_cupertino**. A &lt;em&gt;username&lt;/em&gt; must also be present. The password associated with the target username for RTMP authentication. | [optional] 
**playback_urls** | [**HashOfPlaybackURLs**](HashOfPlaybackURLs.md) |  | [optional] 
**primary_url** | **str** | The primary ingest URL of the target. | [optional] 
**provider** | **str** | The CDN for the target. &lt;br /&gt;&lt;br /&gt;Required for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;CustomStreamTarget&lt;/strong&gt;. Valid values for &lt;strong&gt;CustomStreamTarget&lt;/strong&gt; are &lt;strong&gt;akamai&lt;/strong&gt;, &lt;strong&gt;akamai_cupertino&lt;/strong&gt;, &lt;strong&gt;akamai_rtmp&lt;/strong&gt;, &lt;strong&gt;limelight&lt;/strong&gt;, &lt;strong&gt;rtmp&lt;/strong&gt;, and &lt;strong&gt;ustream&lt;/strong&gt;. Values can be appended with **_mock** to use in the sandbox environment. &lt;br /&gt;&lt;br /&gt;Valid values for &lt;strong&gt;WowzaStreamTarget&lt;/strong&gt; are &lt;strong&gt;akamai&lt;/strong&gt;, &lt;strong&gt;akamai_cupertino&lt;/strong&gt; (default), &lt;strong&gt;akamai_legacy_rtmp&lt;/strong&gt;, and &lt;strong&gt;wowza&lt;/strong&gt;. &lt;br /&gt;&lt;br /&gt;&lt;strong&gt;UltraLowLatencyStreamTarget&lt;/strong&gt; defaults to and must be &lt;strong&gt;wowza&lt;/strong&gt;. | [optional] 
**region_override** | **str** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;UltraLowLatencyStreamTarget&lt;/strong&gt; and &lt;em&gt;source_delivery_method&lt;/em&gt; is **pull**. The location of the stream target&#39;s origin server. If unspecified, Wowza Streaming Cloud determines the optimal region for the origin server. | [optional] 
**rtmp_playback_url** | **str** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;CustomStreamTarget&lt;/strong&gt;. The web address that the target uses to play RTMP streams. | [optional] 
**secure_ingest_query_param** | **str** | Only for targets whose &lt;em&gt;use_secure_ingest&lt;/em&gt; is &lt;strong&gt;true&lt;/strong&gt;. The query parameter needed for secure stream delivery between the transcoder and the target. | [optional] 
**source_delivery_method** | **str** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;UltraLowLatencyStreamTarget&lt;/strong&gt;. The type of connection between the stream source and the stream target. **push** instructs the source to push the stream to the stream target. **pull** instructs the stream target to pull the stream from the source. | [optional] 
**source_url** | **str** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;UltraLowLatencyStreamTarget&lt;/strong&gt; and &lt;em&gt;source_delivery_method&lt;/em&gt; is **pull**. The URL of a source IP camera or encoder connecting to the stream target. | [optional] 
**stream_name** | **str** | The name of the stream being ingested into the target. Returned for all targets except those whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;UltraLowLatencyStreamTarget&lt;/strong&gt; and whose &lt;em&gt;source_delivery_method&lt;/em&gt; is **pull**. | [optional] 
**type** | **str** | &lt;strong&gt;WowzaStreamTarget&lt;/strong&gt; is a Wowza CDN target. &lt;strong&gt;UltraLowLatencyStreamTarget&lt;/strong&gt; is an ultra low latency Wowza stream target. &lt;strong&gt;CustomStreamTarget&lt;/strong&gt; (the default) is an external, third-party destination. &lt;!--and &lt;strong&gt;FacebookStreamTarget&lt;/strong&gt; (a Facebook Live target).--&gt; | [optional] 
**updated_at** | **datetime** | The date and time that the stream target was updated. | [optional] 
**use_cors** | **bool** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;WowzaStreamTarget&lt;/strong&gt; and &lt;em&gt;provider&lt;/em&gt; is &lt;strong&gt;akamai_cupertino&lt;/strong&gt;. CORS, or cross-origin resource sharing, allows streams to be sent to providers such as Peer5, Viblast, and Streamroot, which implement a peer-to-peer grid delivery system. | [optional] 
**use_https** | **bool** | &lt;strong&gt;The &lt;em&gt;use_https&lt;/em&gt; parameter is deprecated. Use the POST /stream_targets/[&lt;em&gt;stream_target_id&lt;/em&gt;]/properties endpoint and the &lt;em&gt;relative_playlists&lt;/em&gt; parameter instead.&lt;/strong&gt; | [optional] 
**use_secure_ingest** | **bool** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;WowzaStreamTarget&lt;/strong&gt; and &lt;em&gt;provider&lt;/em&gt; is &lt;strong&gt;akamai_cupertino&lt;/strong&gt;. If &lt;strong&gt;true&lt;/strong&gt;, generates a &lt;em&gt;secure_ingest_query_param&lt;/em&gt; to securely deliver the stream from the transcoder to the provider. | [optional] 
**username** | **str** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;CustomStreamTarget&lt;/strong&gt; and &lt;em&gt;provider&lt;/em&gt; is &lt;em&gt;not&lt;/em&gt; **akamai_cupertino**. The username or ID that the target uses for RTMP authentication. | [optional] 

## Example

```python
from openapi_client.models.stream_target import StreamTarget

# TODO update the JSON string below
json = "{}"
# create an instance of StreamTarget from a JSON string
stream_target_instance = StreamTarget.from_json(json)
# print the JSON string representation of the object
print(StreamTarget.to_json())

# convert the object into a dict
stream_target_dict = stream_target_instance.to_dict()
# create an instance of StreamTarget from a dict
stream_target_from_dict = StreamTarget.from_dict(stream_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


