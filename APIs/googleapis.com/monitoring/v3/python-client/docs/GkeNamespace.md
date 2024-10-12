# GkeNamespace

GKE Namespace. The field names correspond to the resource metadata labels on monitored resources that fall under a namespace (for example, k8s_container or k8s_pod).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_name** | **str** | The name of the parent cluster. | [optional] 
**location** | **str** | The location of the parent cluster. This may be a zone or region. | [optional] 
**namespace_name** | **str** | The name of this namespace. | [optional] 
**project_id** | **str** | Output only. The project this resource lives in. For legacy services migrated from the Custom type, this may be a distinct project from the one parenting the service itself. | [optional] [readonly] 

## Example

```python
from openapi_client.models.gke_namespace import GkeNamespace

# TODO update the JSON string below
json = "{}"
# create an instance of GkeNamespace from a JSON string
gke_namespace_instance = GkeNamespace.from_json(json)
# print the JSON string representation of the object
print(GkeNamespace.to_json())

# convert the object into a dict
gke_namespace_dict = gke_namespace_instance.to_dict()
# create an instance of GkeNamespace from a dict
gke_namespace_from_dict = GkeNamespace.from_dict(gke_namespace_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


