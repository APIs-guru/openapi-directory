# GoogleCloudServicenetworkingV1betaSubnetwork

Represents a subnet that was created or discovered by a private access management service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_cidr_range** | **str** | Subnetwork CIDR range in &#x60;10.x.x.x/y&#x60; format. | [optional] 
**name** | **str** | Subnetwork name. See https://cloud.google.com/compute/docs/vpc/ | [optional] 
**network** | **str** | In the Shared VPC host project, the VPC network that&#39;s peered with the consumer network. For example: &#x60;projects/1234321/global/networks/host-network&#x60; | [optional] 
**outside_allocation** | **bool** | This is a discovered subnet that is not within the current consumer allocated ranges. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_servicenetworking_v1beta_subnetwork import GoogleCloudServicenetworkingV1betaSubnetwork

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudServicenetworkingV1betaSubnetwork from a JSON string
google_cloud_servicenetworking_v1beta_subnetwork_instance = GoogleCloudServicenetworkingV1betaSubnetwork.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudServicenetworkingV1betaSubnetwork.to_json())

# convert the object into a dict
google_cloud_servicenetworking_v1beta_subnetwork_dict = google_cloud_servicenetworking_v1beta_subnetwork_instance.to_dict()
# create an instance of GoogleCloudServicenetworkingV1betaSubnetwork from a dict
google_cloud_servicenetworking_v1beta_subnetwork_from_dict = GoogleCloudServicenetworkingV1betaSubnetwork.from_dict(google_cloud_servicenetworking_v1beta_subnetwork_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


