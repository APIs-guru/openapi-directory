# Key

A unique identifier for an entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_id** | [**PartitionId**](PartitionId.md) |  | [optional] 
**path** | [**List[PathElement]**](PathElement.md) | The entity path. An entity path consists of one or more elements composed of a kind and a string or numerical identifier, which identify entities. The first element identifies a _root entity_, the second element identifies a _child_ of the root entity, the third element identifies a child of the second entity, and so forth. The entities identified by all prefixes of the path are called the element&#39;s _ancestors_. An entity path is always fully complete: *all* of the entity&#39;s ancestors are required to be in the path along with the entity identifier itself. The only exception is that in some documented cases, the identifier in the last path element (for the entity) itself may be omitted. For example, the last path element of the key of &#x60;Mutation.insert&#x60; may have no identifier. A path can never be empty, and a path can have at most 100 elements. | [optional] 

## Example

```python
from openapi_client.models.key import Key

# TODO update the JSON string below
json = "{}"
# create an instance of Key from a JSON string
key_instance = Key.from_json(json)
# print the JSON string representation of the object
print(Key.to_json())

# convert the object into a dict
key_dict = key_instance.to_dict()
# create an instance of Key from a dict
key_from_dict = Key.from_dict(key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


