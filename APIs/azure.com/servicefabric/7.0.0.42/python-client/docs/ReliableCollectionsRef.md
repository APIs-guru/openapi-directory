# ReliableCollectionsRef

Specifying this parameter adds support for reliable collections

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**do_not_persist_state** | **bool** | False (the default) if ReliableCollections state is persisted to disk as usual. True if you do not want to persist state, in which case replication is still enabled and you can use ReliableCollections as distributed cache. | [optional] 
**name** | **str** | Name of ReliableCollection resource. Right now it&#39;s not used and you can use any string. | 

## Example

```python
from openapi_client.models.reliable_collections_ref import ReliableCollectionsRef

# TODO update the JSON string below
json = "{}"
# create an instance of ReliableCollectionsRef from a JSON string
reliable_collections_ref_instance = ReliableCollectionsRef.from_json(json)
# print the JSON string representation of the object
print(ReliableCollectionsRef.to_json())

# convert the object into a dict
reliable_collections_ref_dict = reliable_collections_ref_instance.to_dict()
# create an instance of ReliableCollectionsRef from a dict
reliable_collections_ref_from_dict = ReliableCollectionsRef.from_dict(reliable_collections_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


