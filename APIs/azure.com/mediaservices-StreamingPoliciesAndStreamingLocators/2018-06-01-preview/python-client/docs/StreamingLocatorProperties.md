# StreamingLocatorProperties

Class to specify properties of Streaming Locator

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternative_media_id** | **str** | An Alternative Media Identifier associated with the StreamingLocator.  This identifier can be used to distinguish different StreamingLocators for the same Asset for authorization purposes in the CustomLicenseAcquisitionUrlTemplate or the CustomKeyAcquisitionUrlTemplate of the StreamingPolicy specified in the StreamingPolicyName field. | [optional] 
**asset_name** | **str** | Asset Name | 
**content_keys** | [**List[StreamingLocatorContentKey]**](StreamingLocatorContentKey.md) | ContentKeys used by this Streaming Locator | [optional] 
**created** | **datetime** | Creation time of Streaming Locator | [optional] [readonly] 
**default_content_key_policy_name** | **str** | Default ContentKeyPolicy used by this Streaming Locator | [optional] 
**end_time** | **datetime** | EndTime of Streaming Locator | [optional] 
**start_time** | **datetime** | StartTime of Streaming Locator | [optional] 
**streaming_locator_id** | **str** | StreamingLocatorId of Streaming Locator | [optional] 
**streaming_policy_name** | **str** | Streaming policy name used by this streaming locator. Either specify the name of streaming policy you created or use one of the predefined streaming polices. The predefined streaming policies available are: &#39;Predefined_DownloadOnly&#39;, &#39;Predefined_ClearStreamingOnly&#39;, &#39;Predefined_DownloadAndClearStreaming&#39;, &#39;Predefined_ClearKey&#39;, &#39;Predefined_SecureStreaming&#39; and &#39;Predefined_SecureStreamingWithFairPlay&#39; | 

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


