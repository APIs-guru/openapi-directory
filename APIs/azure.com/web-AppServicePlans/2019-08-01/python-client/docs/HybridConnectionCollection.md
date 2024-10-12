# HybridConnectionCollection

Collection of hostname bindings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[HybridConnectionCollectionValueInner]**](HybridConnectionCollectionValueInner.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.hybrid_connection_collection import HybridConnectionCollection

# TODO update the JSON string below
json = "{}"
# create an instance of HybridConnectionCollection from a JSON string
hybrid_connection_collection_instance = HybridConnectionCollection.from_json(json)
# print the JSON string representation of the object
print(HybridConnectionCollection.to_json())

# convert the object into a dict
hybrid_connection_collection_dict = hybrid_connection_collection_instance.to_dict()
# create an instance of HybridConnectionCollection from a dict
hybrid_connection_collection_from_dict = HybridConnectionCollection.from_dict(hybrid_connection_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


