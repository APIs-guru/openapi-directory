# ClusterIstio

Istio service scoped to a single Kubernetes cluster. Learn more at https://istio.io. Clusters running OSS Istio will have their services ingested as this type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_name** | **str** | The name of the Kubernetes cluster in which this Istio service is defined. Corresponds to the cluster_name resource label in k8s_cluster resources. | [optional] 
**location** | **str** | The location of the Kubernetes cluster in which this Istio service is defined. Corresponds to the location resource label in k8s_cluster resources. | [optional] 
**service_name** | **str** | The name of the Istio service underlying this service. Corresponds to the destination_service_name metric label in Istio metrics. | [optional] 
**service_namespace** | **str** | The namespace of the Istio service underlying this service. Corresponds to the destination_service_namespace metric label in Istio metrics. | [optional] 

## Example

```python
from openapi_client.models.cluster_istio import ClusterIstio

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterIstio from a JSON string
cluster_istio_instance = ClusterIstio.from_json(json)
# print the JSON string representation of the object
print(ClusterIstio.to_json())

# convert the object into a dict
cluster_istio_dict = cluster_istio_instance.to_dict()
# create an instance of ClusterIstio from a dict
cluster_istio_from_dict = ClusterIstio.from_dict(cluster_istio_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


