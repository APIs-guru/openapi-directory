# ResourceManifest

ResourceManifest represents a single Kubernetes resource to be applied to the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_scoped** | **bool** | Whether the resource provided in the manifest is &#x60;cluster_scoped&#x60;. If unset, the manifest is assumed to be namespace scoped. This field is used for REST mapping when applying the resource in a cluster. | [optional] 
**manifest** | **str** | YAML manifest of the resource. | [optional] 

## Example

```python
from openapi_client.models.resource_manifest import ResourceManifest

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceManifest from a JSON string
resource_manifest_instance = ResourceManifest.from_json(json)
# print the JSON string representation of the object
print(ResourceManifest.to_json())

# convert the object into a dict
resource_manifest_dict = resource_manifest_instance.to_dict()
# create an instance of ResourceManifest from a dict
resource_manifest_from_dict = ResourceManifest.from_dict(resource_manifest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


