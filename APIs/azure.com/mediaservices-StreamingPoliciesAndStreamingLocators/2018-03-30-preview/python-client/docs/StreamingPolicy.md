# StreamingPolicy

A Streaming Policy resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StreamingPolicyProperties**](StreamingPolicyProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource ID for the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.streaming_policy import StreamingPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingPolicy from a JSON string
streaming_policy_instance = StreamingPolicy.from_json(json)
# print the JSON string representation of the object
print(StreamingPolicy.to_json())

# convert the object into a dict
streaming_policy_dict = streaming_policy_instance.to_dict()
# create an instance of StreamingPolicy from a dict
streaming_policy_from_dict = StreamingPolicy.from_dict(streaming_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


