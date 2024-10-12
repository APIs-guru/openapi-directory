# StreamingPolicyContentKeys

Class to specify properties of all content keys in Streaming Policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_key** | [**DefaultKey**](DefaultKey.md) |  | [optional] 
**key_to_track_mappings** | [**List[StreamingPolicyContentKey]**](StreamingPolicyContentKey.md) | Representing tracks needs separate content key | [optional] 

## Example

```python
from openapi_client.models.streaming_policy_content_keys import StreamingPolicyContentKeys

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingPolicyContentKeys from a JSON string
streaming_policy_content_keys_instance = StreamingPolicyContentKeys.from_json(json)
# print the JSON string representation of the object
print(StreamingPolicyContentKeys.to_json())

# convert the object into a dict
streaming_policy_content_keys_dict = streaming_policy_content_keys_instance.to_dict()
# create an instance of StreamingPolicyContentKeys from a dict
streaming_policy_content_keys_from_dict = StreamingPolicyContentKeys.from_dict(streaming_policy_content_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


