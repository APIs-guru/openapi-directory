# ClusterPatch

The top level Log Analytics cluster resource container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ClusterPatchProperties**](ClusterPatchProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.cluster_patch import ClusterPatch

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterPatch from a JSON string
cluster_patch_instance = ClusterPatch.from_json(json)
# print the JSON string representation of the object
print(ClusterPatch.to_json())

# convert the object into a dict
cluster_patch_dict = cluster_patch_instance.to_dict()
# create an instance of ClusterPatch from a dict
cluster_patch_from_dict = ClusterPatch.from_dict(cluster_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


