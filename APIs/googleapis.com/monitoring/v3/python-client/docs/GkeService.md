# GkeService

GKE Service. The \"service\" here represents a Kubernetes service object (https://kubernetes.io/docs/concepts/services-networking/service). The field names correspond to the resource labels on k8s_service monitored resources (https://cloud.google.com/monitoring/api/resources#tag_k8s_service).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_name** | **str** | The name of the parent cluster. | [optional] 
**location** | **str** | The location of the parent cluster. This may be a zone or region. | [optional] 
**namespace_name** | **str** | The name of the parent namespace. | [optional] 
**project_id** | **str** | Output only. The project this resource lives in. For legacy services migrated from the Custom type, this may be a distinct project from the one parenting the service itself. | [optional] [readonly] 
**service_name** | **str** | The name of this service. | [optional] 

## Example

```python
from openapi_client.models.gke_service import GkeService

# TODO update the JSON string below
json = "{}"
# create an instance of GkeService from a JSON string
gke_service_instance = GkeService.from_json(json)
# print the JSON string representation of the object
print(GkeService.to_json())

# convert the object into a dict
gke_service_dict = gke_service_instance.to_dict()
# create an instance of GkeService from a dict
gke_service_from_dict = GkeService.from_dict(gke_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


