# ClusterManifest

Information about the cluster manifest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**manifest** | **str** | The contents of the cluster manifest file. | [optional] 

## Example

```python
from openapi_client.models.cluster_manifest import ClusterManifest

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterManifest from a JSON string
cluster_manifest_instance = ClusterManifest.from_json(json)
# print the JSON string representation of the object
print(ClusterManifest.to_json())

# convert the object into a dict
cluster_manifest_dict = cluster_manifest_instance.to_dict()
# create an instance of ClusterManifest from a dict
cluster_manifest_from_dict = ClusterManifest.from_dict(cluster_manifest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


