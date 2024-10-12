# StreamTarget6


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_url** | **str** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;CustomStreamTarget&lt;/strong&gt;. The backup RTMP ingest URL of the target, without the preceding protocol and without the trailing slash (/). | [optional] 
**chunk_size** | **str** | &lt;strong&gt;The &lt;em&gt;chunk_size&lt;/em&gt; parameter is deprecated. To set the chunk size of a stream target, use the POST /stream_targets/[stream_target_id]/properties endpoint.&lt;/strong&gt; Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;WowzaStreamTarget&lt;/strong&gt; and &lt;em&gt;provider&lt;/em&gt; is &lt;strong&gt;akamai_cupertino&lt;/strong&gt;. The segment duration for HLS encoding. The default is &lt;strong&gt;10&lt;/strong&gt;. | [optional] 
**enabled** | **bool** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;UltraLowLatencyStreamTarget&lt;/strong&gt;. If &lt;strong&gt;true&lt;/strong&gt; (the default), the source stream is ready to be ingested. If **false**, the source stream won&#39;t be ingested by the target&#39;s origin server. | [optional] 
**hds_playback_url** | **str** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;CustomStreamTarget&lt;/strong&gt; and &lt;em&gt;provider&lt;/em&gt; is &lt;em&gt;not&lt;/em&gt; &lt;strong&gt;akamai_cupertino&lt;/strong&gt;. The web address that the target uses to play Adobe HDS streams. | [optional] 
**hls_playback_url** | **str** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;CustomStreamTarget&lt;/strong&gt;. The web address that the target uses to play Apple HLS streams. | [optional] 
**ingest_ip_whitelist** | **List[str]** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;UltraLowLatencyStreamTarget&lt;/strong&gt; and &lt;em&gt;source_delivery_method&lt;/em&gt; is **push**. A list of IP addresses that can be used to connect to the target&#39;s origin server. | [optional] 
**name** | **str** | A descriptive name for the stream target. Maximum 255 characters. | [optional] 
**password** | **str** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;CustomStreamTarget&lt;/strong&gt; and &lt;em&gt;provider&lt;/em&gt; is &lt;em&gt;not&lt;/em&gt; **akamai_cupertino**. A &lt;em&gt;username&lt;/em&gt; must also be present. The password associated with the target username for RTMP authentication. | [optional] 
**primary_url** | **str** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;CustomStreamTarget&lt;/strong&gt;. The primary RTMP ingest URL, without the preceding protocol and without the trailing slash (/). | [optional] 
**provider** | **str** | The CDN for the target. &lt;br /&gt;&lt;br /&gt;Required for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;CustomStreamTarget&lt;/strong&gt;. Valid values for &lt;strong&gt;CustomStreamTarget&lt;/strong&gt; are &lt;strong&gt;akamai&lt;/strong&gt;, &lt;strong&gt;akamai_cupertino&lt;/strong&gt;, &lt;strong&gt;akamai_rtmp&lt;/strong&gt;, &lt;strong&gt;limelight&lt;/strong&gt;, &lt;strong&gt;rtmp&lt;/strong&gt;, and &lt;strong&gt;ustream&lt;/strong&gt;. Values can be appended with **_mock** to use in the sandbox environment. &lt;br /&gt;&lt;br /&gt;Valid values for &lt;strong&gt;WowzaStreamTarget&lt;/strong&gt; are &lt;strong&gt;akamai&lt;/strong&gt;, &lt;strong&gt;akamai_cupertino&lt;/strong&gt; (default), &lt;strong&gt;akamai_legacy_rtmp&lt;/strong&gt;, and &lt;strong&gt;wowza&lt;/strong&gt;. &lt;br /&gt;&lt;br /&gt;&lt;strong&gt;UltraLowLatencyStreamTarget&lt;/strong&gt; defaults to and must be &lt;strong&gt;wowza&lt;/strong&gt;. | [optional] 
**rtmp_playback_url** | **str** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;CustomStreamTarget&lt;/strong&gt;. The web address that the target uses to play RTMP streams. | [optional] 
**source_url** | **str** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;UltraLowLatencyStreamTarget&lt;/strong&gt; and &lt;em&gt;source_delivery_method&lt;/em&gt; is **pull**. The URL of a source IP camera or encoder connecting to the stream target. | [optional] 
**stream_name** | **str** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;CustomStreamTarget&lt;/strong&gt;. The name of the stream as defined in the target&#39;s ingestion settings. | [optional] 
**username** | **str** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;CustomStreamTarget&lt;/strong&gt; and &lt;em&gt;provider&lt;/em&gt; is &lt;em&gt;not&lt;/em&gt; **akamai_cupertino**. The username or ID that the target uses for RTMP authentication. | [optional] 

## Example

```python
from openapi_client.models.stream_target6 import StreamTarget6

# TODO update the JSON string below
json = "{}"
# create an instance of StreamTarget6 from a JSON string
stream_target6_instance = StreamTarget6.from_json(json)
# print the JSON string representation of the object
print(StreamTarget6.to_json())

# convert the object into a dict
stream_target6_dict = stream_target6_instance.to_dict()
# create an instance of StreamTarget6 from a dict
stream_target6_from_dict = StreamTarget6.from_dict(stream_target6_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


