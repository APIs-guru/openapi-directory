# EnrollBareMetalClusterRequest

Message for enrolling an existing bare metal cluster to the Anthos On-Prem API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_cluster_membership** | **str** | Required. The admin cluster this bare metal user cluster belongs to. This is the full resource name of the admin cluster&#39;s fleet membership. In the future, references to other resource types might be allowed if admin clusters are modeled as their own resources. | [optional] 
**bare_metal_cluster_id** | **str** | User provided OnePlatform identifier that is used as part of the resource name. This must be unique among all bare metal clusters within a project and location and will return a 409 if the cluster already exists. (https://tools.ietf.org/html/rfc1123) format. | [optional] 
**local_name** | **str** | Optional. The object name of the bare metal cluster custom resource on the associated admin cluster. This field is used to support conflicting resource names when enrolling existing clusters to the API. When not provided, this field will resolve to the bare_metal_cluster_id. Otherwise, it must match the object name of the bare metal cluster custom resource. It is not modifiable outside / beyond the enrollment operation. | [optional] 

## Example

```python
from openapi_client.models.enroll_bare_metal_cluster_request import EnrollBareMetalClusterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EnrollBareMetalClusterRequest from a JSON string
enroll_bare_metal_cluster_request_instance = EnrollBareMetalClusterRequest.from_json(json)
# print the JSON string representation of the object
print(EnrollBareMetalClusterRequest.to_json())

# convert the object into a dict
enroll_bare_metal_cluster_request_dict = enroll_bare_metal_cluster_request_instance.to_dict()
# create an instance of EnrollBareMetalClusterRequest from a dict
enroll_bare_metal_cluster_request_from_dict = EnrollBareMetalClusterRequest.from_dict(enroll_bare_metal_cluster_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


