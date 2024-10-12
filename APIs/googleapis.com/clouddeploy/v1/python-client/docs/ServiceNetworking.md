# ServiceNetworking

Information about the Kubernetes Service networking configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment** | **str** | Required. Name of the Kubernetes Deployment whose traffic is managed by the specified Service. | [optional] 
**disable_pod_overprovisioning** | **bool** | Optional. Whether to disable Pod overprovisioning. If Pod overprovisioning is disabled then Cloud Deploy will limit the number of total Pods used for the deployment strategy to the number of Pods the Deployment has on the cluster. | [optional] 
**service** | **str** | Required. Name of the Kubernetes Service. | [optional] 

## Example

```python
from openapi_client.models.service_networking import ServiceNetworking

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceNetworking from a JSON string
service_networking_instance = ServiceNetworking.from_json(json)
# print the JSON string representation of the object
print(ServiceNetworking.to_json())

# convert the object into a dict
service_networking_dict = service_networking_instance.to_dict()
# create an instance of ServiceNetworking from a dict
service_networking_from_dict = ServiceNetworking.from_dict(service_networking_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


