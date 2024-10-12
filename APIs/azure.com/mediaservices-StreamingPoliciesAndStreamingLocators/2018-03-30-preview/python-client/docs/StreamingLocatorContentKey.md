# StreamingLocatorContentKey

Class for content key in Streaming Locator

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of Content Key | 
**label** | **str** | Label of Content Key | [optional] 
**policy_name** | **str** | ContentKeyPolicy used by Content Key | [optional] 
**tracks** | [**List[TrackSelection]**](TrackSelection.md) | Tracks which use this Content Key | [optional] 
**type** | **str** | Encryption type of Content Key | 
**value** | **str** | Value of Content Key | [optional] 

## Example

```python
from openapi_client.models.streaming_locator_content_key import StreamingLocatorContentKey

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingLocatorContentKey from a JSON string
streaming_locator_content_key_instance = StreamingLocatorContentKey.from_json(json)
# print the JSON string representation of the object
print(StreamingLocatorContentKey.to_json())

# convert the object into a dict
streaming_locator_content_key_dict = streaming_locator_content_key_instance.to_dict()
# create an instance of StreamingLocatorContentKey from a dict
streaming_locator_content_key_from_dict = StreamingLocatorContentKey.from_dict(streaming_locator_content_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


