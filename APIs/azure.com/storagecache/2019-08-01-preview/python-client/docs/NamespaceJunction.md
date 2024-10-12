# NamespaceJunction

A namespace junction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**namespace_path** | **str** | Namespace path on a cache for a storage target. | [optional] 
**nfs_export** | **str** | NFS export where targetPath exists. | [optional] 
**target_path** | **str** | Path in storage target to which namespacePath points. | [optional] 

## Example

```python
from openapi_client.models.namespace_junction import NamespaceJunction

# TODO update the JSON string below
json = "{}"
# create an instance of NamespaceJunction from a JSON string
namespace_junction_instance = NamespaceJunction.from_json(json)
# print the JSON string representation of the object
print(NamespaceJunction.to_json())

# convert the object into a dict
namespace_junction_dict = namespace_junction_instance.to_dict()
# create an instance of NamespaceJunction from a dict
namespace_junction_from_dict = NamespaceJunction.from_dict(namespace_junction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


