# ClusterPatchParameters

The PatchCluster request parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | The resource tags. | [optional] 

## Example

```python
from openapi_client.models.cluster_patch_parameters import ClusterPatchParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterPatchParameters from a JSON string
cluster_patch_parameters_instance = ClusterPatchParameters.from_json(json)
# print the JSON string representation of the object
print(ClusterPatchParameters.to_json())

# convert the object into a dict
cluster_patch_parameters_dict = cluster_patch_parameters_instance.to_dict()
# create an instance of ClusterPatchParameters from a dict
cluster_patch_parameters_from_dict = ClusterPatchParameters.from_dict(cluster_patch_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


