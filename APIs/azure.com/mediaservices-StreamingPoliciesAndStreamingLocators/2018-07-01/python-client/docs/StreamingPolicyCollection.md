# StreamingPolicyCollection

A collection of StreamingPolicy items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_next_link** | **str** | A link to the next page of the collection (when the collection contains too many results to return in one response). | [optional] 
**value** | [**List[StreamingPolicy]**](StreamingPolicy.md) | A collection of StreamingPolicy items. | [optional] 

## Example

```python
from openapi_client.models.streaming_policy_collection import StreamingPolicyCollection

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingPolicyCollection from a JSON string
streaming_policy_collection_instance = StreamingPolicyCollection.from_json(json)
# print the JSON string representation of the object
print(StreamingPolicyCollection.to_json())

# convert the object into a dict
streaming_policy_collection_dict = streaming_policy_collection_instance.to_dict()
# create an instance of StreamingPolicyCollection from a dict
streaming_policy_collection_from_dict = StreamingPolicyCollection.from_dict(streaming_policy_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


