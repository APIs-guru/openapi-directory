# AssetStreamingLocator

Properties of the Streaming Locator.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_name** | **str** | Asset Name. | [optional] [readonly] 
**created** | **datetime** | The creation time of the Streaming Locator. | [optional] [readonly] 
**default_content_key_policy_name** | **str** | Name of the default ContentKeyPolicy used by this Streaming Locator. | [optional] [readonly] 
**end_time** | **datetime** | The end time of the Streaming Locator. | [optional] [readonly] 
**name** | **str** | Streaming Locator name. | [optional] [readonly] 
**start_time** | **datetime** | The start time of the Streaming Locator. | [optional] [readonly] 
**streaming_locator_id** | **str** | StreamingLocatorId of the Streaming Locator. | [optional] [readonly] 
**streaming_policy_name** | **str** | Name of the Streaming Policy used by this Streaming Locator. | [optional] [readonly] 

## Example

```python
from openapi_client.models.asset_streaming_locator import AssetStreamingLocator

# TODO update the JSON string below
json = "{}"
# create an instance of AssetStreamingLocator from a JSON string
asset_streaming_locator_instance = AssetStreamingLocator.from_json(json)
# print the JSON string representation of the object
print(AssetStreamingLocator.to_json())

# convert the object into a dict
asset_streaming_locator_dict = asset_streaming_locator_instance.to_dict()
# create an instance of AssetStreamingLocator from a dict
asset_streaming_locator_from_dict = AssetStreamingLocator.from_dict(asset_streaming_locator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


