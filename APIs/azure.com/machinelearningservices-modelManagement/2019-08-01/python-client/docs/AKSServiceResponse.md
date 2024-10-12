# AKSServiceResponse

The response for an AKS service.

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
**deployment_status** | [**AKSReplicaStatus**](AKSReplicaStatus.md) |  | [optional] 
**environment** | [**ModelEnvironmentDefinition**](ModelEnvironmentDefinition.md) |  | [optional] 
**image_details** | [**ImageResponseBase**](ImageResponseBase.md) |  | [optional] 
**image_id** | **str** | The Id of the Image. | [optional] 
**liveness_probe_requirements** | [**LivenessProbeRequirements**](LivenessProbeRequirements.md) |  | [optional] 
**max_concurrent_requests_per_container** | **int** | The maximum number of concurrent requests per container. | [optional] 
**max_queue_wait_ms** | **int** | Maximum time a request will wait in the queue (in milliseconds). After this time, the service will return 503 (Service Unavailable) | [optional] 
**model_config_map** | **Dict[str, object]** | Details on the models and configurations. | [optional] 
**models** | [**List[Model]**](Model.md) | The list of models. | [optional] 
**namespace** | **str** | The Kubernetes namespace of the deployment. | [optional] 
**num_replicas** | **int** | The number of replicas on the cluster. | [optional] 
**scoring_timeout_ms** | **int** | The scoring timeout in milliseconds. | [optional] 
**scoring_uri** | **str** | The Uri for sending scoring requests. | [optional] 
**swagger_uri** | **str** | The Uri for sending swagger requests. | [optional] 

## Example

```python
from openapi_client.models.aks_service_response import AKSServiceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AKSServiceResponse from a JSON string
aks_service_response_instance = AKSServiceResponse.from_json(json)
# print the JSON string representation of the object
print(AKSServiceResponse.to_json())

# convert the object into a dict
aks_service_response_dict = aks_service_response_instance.to_dict()
# create an instance of AKSServiceResponse from a dict
aks_service_response_from_dict = AKSServiceResponse.from_dict(aks_service_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


