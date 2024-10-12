# AKSServiceCreateRequest

The request to create an AKS service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aad_auth_enabled** | **bool** | Whether or not AAD authentication is enabled. | [optional] 
**app_insights_enabled** | **bool** | Whether or not Application Insights is enabled. | [optional] 
**auth_enabled** | **bool** | Whether or not authentication is enabled. | [optional] 
**auto_scaler** | [**AutoScaler**](AutoScaler.md) |  | [optional] 
**compute_name** | **str** | The name of the compute resource. | [optional] 
**container_resource_requirements** | [**ContainerResourceRequirements**](ContainerResourceRequirements.md) |  | [optional] 
**data_collection** | [**ModelDataCollection**](ModelDataCollection.md) |  | [optional] 
**liveness_probe_requirements** | [**LivenessProbeRequirements**](LivenessProbeRequirements.md) |  | [optional] 
**max_concurrent_requests_per_container** | **int** | The maximum number of concurrent requests per container. | [optional] 
**max_queue_wait_ms** | **int** | Maximum time a request will wait in the queue (in milliseconds). After this time, the service will return 503 (Service Unavailable) | [optional] 
**namespace** | **str** | Kubernetes namespace for the service. | [optional] 
**num_replicas** | **int** | The number of replicas on the cluster. | [optional] 
**scoring_timeout_ms** | **int** | The scoring timeout in milliseconds. | [optional] 

## Example

```python
from openapi_client.models.aks_service_create_request import AKSServiceCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AKSServiceCreateRequest from a JSON string
aks_service_create_request_instance = AKSServiceCreateRequest.from_json(json)
# print the JSON string representation of the object
print(AKSServiceCreateRequest.to_json())

# convert the object into a dict
aks_service_create_request_dict = aks_service_create_request_instance.to_dict()
# create an instance of AKSServiceCreateRequest from a dict
aks_service_create_request_from_dict = AKSServiceCreateRequest.from_dict(aks_service_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


