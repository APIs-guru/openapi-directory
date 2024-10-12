# MembershipEndpoint

MembershipEndpoint contains information needed to contact a Kubernetes API, endpoint and any additional Kubernetes metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appliance_cluster** | [**ApplianceCluster**](ApplianceCluster.md) |  | [optional] 
**edge_cluster** | [**EdgeCluster**](EdgeCluster.md) |  | [optional] 
**gke_cluster** | [**GkeCluster**](GkeCluster.md) |  | [optional] 
**google_managed** | **bool** | Output only. Whether the lifecycle of this membership is managed by a google cluster platform service. | [optional] [readonly] 
**kubernetes_metadata** | [**KubernetesMetadata**](KubernetesMetadata.md) |  | [optional] 
**kubernetes_resource** | [**KubernetesResource**](KubernetesResource.md) |  | [optional] 
**multi_cloud_cluster** | [**MultiCloudCluster**](MultiCloudCluster.md) |  | [optional] 
**on_prem_cluster** | [**OnPremCluster**](OnPremCluster.md) |  | [optional] 

## Example

```python
from openapi_client.models.membership_endpoint import MembershipEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of MembershipEndpoint from a JSON string
membership_endpoint_instance = MembershipEndpoint.from_json(json)
# print the JSON string representation of the object
print(MembershipEndpoint.to_json())

# convert the object into a dict
membership_endpoint_dict = membership_endpoint_instance.to_dict()
# create an instance of MembershipEndpoint from a dict
membership_endpoint_from_dict = MembershipEndpoint.from_dict(membership_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


