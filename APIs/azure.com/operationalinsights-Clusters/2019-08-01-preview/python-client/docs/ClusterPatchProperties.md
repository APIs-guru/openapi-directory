# ClusterPatchProperties

Log Analytics cluster patch properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_key_uri** | **str** | The Key Vault key or certificate path associated with the Log Analytics cluster. | [optional] 

## Example

```python
from openapi_client.models.cluster_patch_properties import ClusterPatchProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterPatchProperties from a JSON string
cluster_patch_properties_instance = ClusterPatchProperties.from_json(json)
# print the JSON string representation of the object
print(ClusterPatchProperties.to_json())

# convert the object into a dict
cluster_patch_properties_dict = cluster_patch_properties_instance.to_dict()
# create an instance of ClusterPatchProperties from a dict
cluster_patch_properties_from_dict = ClusterPatchProperties.from_dict(cluster_patch_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


