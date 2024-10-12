# EnrollVmwareAdminClusterRequest

Message for enrolling an existing VMware admin cluster to the GKE on-prem API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**membership** | **str** | Required. This is the full resource name of this admin cluster&#39;s fleet membership. | [optional] 
**vmware_admin_cluster_id** | **str** | User provided OnePlatform identifier that is used as part of the resource name. This must be unique among all GKE on-prem clusters within a project and location and will return a 409 if the cluster already exists. (https://tools.ietf.org/html/rfc1123) format. | [optional] 

## Example

```python
from openapi_client.models.enroll_vmware_admin_cluster_request import EnrollVmwareAdminClusterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EnrollVmwareAdminClusterRequest from a JSON string
enroll_vmware_admin_cluster_request_instance = EnrollVmwareAdminClusterRequest.from_json(json)
# print the JSON string representation of the object
print(EnrollVmwareAdminClusterRequest.to_json())

# convert the object into a dict
enroll_vmware_admin_cluster_request_dict = enroll_vmware_admin_cluster_request_instance.to_dict()
# create an instance of EnrollVmwareAdminClusterRequest from a dict
enroll_vmware_admin_cluster_request_from_dict = EnrollVmwareAdminClusterRequest.from_dict(enroll_vmware_admin_cluster_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


