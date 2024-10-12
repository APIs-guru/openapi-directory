# StreamingLocatorProperties

Properties of the Streaming Locator.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternative_media_id** | **str** | Alternative Media ID of this Streaming Locator | [optional] 
**asset_name** | **str** | Asset Name | 
**content_keys** | [**List[StreamingLocatorContentKey]**](StreamingLocatorContentKey.md) | The ContentKeys used by this Streaming Locator. | [optional] 
**created** | **datetime** | The creation time of the Streaming Locator. | [optional] [readonly] 
**default_content_key_policy_name** | **str** | Name of the default ContentKeyPolicy used by this Streaming Locator. | [optional] 
**end_time** | **datetime** | The end time of the Streaming Locator. | [optional] 
**filters** | **List[str]** | A list of asset or account filters which apply to this streaming locator | [optional] 
**start_time** | **datetime** | The start time of the Streaming Locator. | [optional] 
**streaming_locator_id** | **str** | The StreamingLocatorId of the Streaming Locator. | [optional] 
**streaming_policy_name** | **str** | Name of the Streaming Policy used by this Streaming Locator. Either specify the name of Streaming Policy you created or use one of the predefined Streaming Policies. The predefined Streaming Policies available are: &#39;Predefined_DownloadOnly&#39;, &#39;Predefined_ClearStreamingOnly&#39;, &#39;Predefined_DownloadAndClearStreaming&#39;, &#39;Predefined_ClearKey&#39;, &#39;Predefined_MultiDrmCencStreaming&#39; and &#39;Predefined_MultiDrmStreaming&#39; | 

## Example

```python
from openapi_client.models.streaming_locator_properties import StreamingLocatorProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingLocatorProperties from a JSON string
streaming_locator_properties_instance = StreamingLocatorProperties.from_json(json)
# print the JSON string representation of the object
print(StreamingLocatorProperties.to_json())

# convert the object into a dict
streaming_locator_properties_dict = streaming_locator_properties_instance.to_dict()
# create an instance of StreamingLocatorProperties from a dict
streaming_locator_properties_from_dict = StreamingLocatorProperties.from_dict(streaming_locator_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


