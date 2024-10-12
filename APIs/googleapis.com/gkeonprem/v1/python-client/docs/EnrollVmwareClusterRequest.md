# EnrollVmwareClusterRequest

Message for enrolling an existing VMware cluster to the Anthos On-Prem API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_cluster_membership** | **str** | Required. The admin cluster this VMware user cluster belongs to. This is the full resource name of the admin cluster&#39;s fleet membership. In the future, references to other resource types might be allowed if admin clusters are modeled as their own resources. | [optional] 
**local_name** | **str** | Optional. The object name of the VMware OnPremUserCluster custom resource on the associated admin cluster. This field is used to support conflicting resource names when enrolling existing clusters to the API. When not provided, this field will resolve to the vmware_cluster_id. Otherwise, it must match the object name of the VMware OnPremUserCluster custom resource. It is not modifiable outside / beyond the enrollment operation. | [optional] 
**validate_only** | **bool** | Validate the request without actually doing any updates. | [optional] 
**vmware_cluster_id** | **str** | User provided OnePlatform identifier that is used as part of the resource name. This must be unique among all GKE on-prem clusters within a project and location and will return a 409 if the cluster already exists. (https://tools.ietf.org/html/rfc1123) format. | [optional] 

## Example

```python
from openapi_client.models.enroll_vmware_cluster_request import EnrollVmwareClusterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EnrollVmwareClusterRequest from a JSON string
enroll_vmware_cluster_request_instance = EnrollVmwareClusterRequest.from_json(json)
# print the JSON string representation of the object
print(EnrollVmwareClusterRequest.to_json())

# convert the object into a dict
enroll_vmware_cluster_request_dict = enroll_vmware_cluster_request_instance.to_dict()
# create an instance of EnrollVmwareClusterRequest from a dict
enroll_vmware_cluster_request_from_dict = EnrollVmwareClusterRequest.from_dict(enroll_vmware_cluster_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


