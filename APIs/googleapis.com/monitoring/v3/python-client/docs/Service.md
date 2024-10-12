# Service

A Service is a discrete, autonomous, and network-accessible unit, designed to solve an individual concern (Wikipedia (https://en.wikipedia.org/wiki/Service-orientation)). In Cloud Monitoring, a Service acts as the root resource under which operational aspects of the service are accessible.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_engine** | [**AppEngine**](AppEngine.md) |  | [optional] 
**basic_service** | [**BasicService**](BasicService.md) |  | [optional] 
**cloud_endpoints** | [**CloudEndpoints**](CloudEndpoints.md) |  | [optional] 
**cloud_run** | [**CloudRun**](CloudRun.md) |  | [optional] 
**cluster_istio** | [**ClusterIstio**](ClusterIstio.md) |  | [optional] 
**custom** | **object** | Use a custom service to designate a service that you want to monitor when none of the other service types (like App Engine, Cloud Run, or a GKE type) matches your intended service. | [optional] 
**display_name** | **str** | Name used for UI elements listing this Service. | [optional] 
**gke_namespace** | [**GkeNamespace**](GkeNamespace.md) |  | [optional] 
**gke_service** | [**GkeService**](GkeService.md) |  | [optional] 
**gke_workload** | [**GkeWorkload**](GkeWorkload.md) |  | [optional] 
**istio_canonical_service** | [**IstioCanonicalService**](IstioCanonicalService.md) |  | [optional] 
**mesh_istio** | [**MeshIstio**](MeshIstio.md) |  | [optional] 
**name** | **str** | Resource name for this Service. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]  | [optional] 
**telemetry** | [**Telemetry**](Telemetry.md) |  | [optional] 
**user_labels** | **Dict[str, str]** | Labels which have been used to annotate the service. Label keys must start with a letter. Label keys and values may contain lowercase letters, numbers, underscores, and dashes. Label keys and values have a maximum length of 63 characters, and must be less than 128 bytes in size. Up to 64 label entries may be stored. For labels which do not have a semantic value, the empty string may be supplied for the label value. | [optional] 

## Example

```python
from openapi_client.models.service import Service

# TODO update the JSON string below
json = "{}"
# create an instance of Service from a JSON string
service_instance = Service.from_json(json)
# print the JSON string representation of the object
print(Service.to_json())

# convert the object into a dict
service_dict = service_instance.to_dict()
# create an instance of Service from a dict
service_from_dict = Service.from_dict(service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


