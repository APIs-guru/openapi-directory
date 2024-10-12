# StreamingPolicyContentKey

Class to specify properties of content key

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | Label can be used to specify Content Key when creating a Streaming Locator | [optional] 
**policy_name** | **str** | Policy used by Content Key | [optional] 
**tracks** | [**List[TrackSelection]**](TrackSelection.md) | Tracks which use this content key | [optional] 

## Example

```python
from openapi_client.models.streaming_policy_content_key import StreamingPolicyContentKey

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingPolicyContentKey from a JSON string
streaming_policy_content_key_instance = StreamingPolicyContentKey.from_json(json)
# print the JSON string representation of the object
print(StreamingPolicyContentKey.to_json())

# convert the object into a dict
streaming_policy_content_key_dict = streaming_policy_content_key_instance.to_dict()
# create an instance of StreamingPolicyContentKey from a dict
streaming_policy_content_key_from_dict = StreamingPolicyContentKey.from_dict(streaming_policy_content_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


