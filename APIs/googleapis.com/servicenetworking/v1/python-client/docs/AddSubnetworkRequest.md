# AddSubnetworkRequest

Request to create a subnetwork in a previously peered service network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_subnet_cidr_routes_overlap** | **bool** | Optional. Defines the allowSubnetCidrRoutesOverlap field of the subnet, e.g. Available in alpha and beta according to [Compute API documentation](https://cloud.google.com/compute/docs/reference/rest/beta/subnetworks/insert) | [optional] 
**check_service_networking_use_permission** | **bool** | Optional. The IAM permission check determines whether the consumer project has &#39;servicenetworking.services.use&#39; permission or not. | [optional] 
**compute_idempotency_window** | **str** | Optional. Specifies a custom time bucket for Arcus subnetwork request idempotency. If two equivalent concurrent requests are made, Arcus will know to ignore the request if it has already been completed or is in progress. Only requests with matching compute_idempotency_window have guaranteed idempotency. Changing this time window between requests results in undefined behavior. Zero (or empty) value with custom_compute_idempotency_window&#x3D;true specifies no idempotency (i.e. no request ID is provided to Arcus). Maximum value of 14 days (enforced by Arcus limit). For more information on how to use, see: go/revisit-sn-idempotency-window | [optional] 
**consumer** | **str** | Required. A resource that represents the service consumer, such as &#x60;projects/123456&#x60;. The project number can be different from the value in the consumer network parameter. For example, the network might be part of a Shared VPC network. In those cases, Service Networking validates that this resource belongs to that Shared VPC. | [optional] 
**consumer_network** | **str** | Required. The name of the service consumer&#39;s VPC network. The network must have an existing private connection that was provisioned through the connections.create method. The name must be in the following format: &#x60;projects/{project}/global/networks/{network}&#x60;, where {project} is a project number, such as &#x60;12345&#x60;. {network} is the name of a VPC network in the project. | [optional] 
**description** | **str** | Optional. Description of the subnet. | [optional] 
**internal_range** | **str** | Optional. The url of an Internal Range. Eg: &#x60;projects//locations/global/internalRanges/&#x60;. If specified, it means that the subnetwork cidr will be created using the combination of requested_address/ip_prefix_length. Note that the subnet cidr has to be within the cidr range of this Internal Range. | [optional] 
**ip_prefix_length** | **int** | Required. The prefix length of the subnet&#39;s IP address range. Use CIDR range notation, such as &#x60;29&#x60; to provision a subnet with an &#x60;x.x.x.x/29&#x60; CIDR range. The IP address range is drawn from a pool of available ranges in the service consumer&#39;s allocated range. GCE disallows subnets with prefix_length &gt; 29 | [optional] 
**outside_allocation_public_ip_range** | **str** | Optional. Enable outside allocation using public IP addresses. Any public IP range may be specified. If this field is provided, we will not use customer reserved ranges for this primary IP range. | [optional] 
**private_ipv6_google_access** | **str** | Optional. The private IPv6 google access type for the VMs in this subnet. For information about the access types that can be set using this field, see [subnetwork](https://cloud.google.com/compute/docs/reference/rest/v1/subnetworks) in the Compute API documentation. | [optional] 
**purpose** | **str** | Optional. Defines the purpose field of the subnet, e.g. &#39;PRIVATE_SERVICE_CONNECT&#39;. For information about the purposes that can be set using this field, see [subnetwork](https://cloud.google.com/compute/docs/reference/rest/v1/subnetworks) in the Compute API documentation. | [optional] 
**region** | **str** | Required. The name of a [region](/compute/docs/regions-zones) for the subnet, such &#x60;europe-west1&#x60;. | [optional] 
**requested_address** | **str** | Optional. The starting address of a range. The address must be a valid IPv4 address in the x.x.x.x format. This value combined with the IP prefix range is the CIDR range for the subnet. The range must be within the allocated range that is assigned to the private connection. If the CIDR range isn&#39;t available, the call fails. | [optional] 
**requested_ranges** | **List[str]** | Optional. The name of one or more allocated IP address ranges associated with this private service access connection. If no range names are provided all ranges associated with this connection will be considered. If a CIDR range with the specified IP prefix length is not available within these ranges, the call fails. | [optional] 
**role** | **str** | Optional. Defines the role field of the subnet, e.g. &#39;ACTIVE&#39;. For information about the roles that can be set using this field, see [subnetwork](https://cloud.google.com/compute/docs/reference/rest/v1/subnetworks) in the Compute API documentation. | [optional] 
**secondary_ip_range_specs** | [**List[SecondaryIpRangeSpec]**](SecondaryIpRangeSpec.md) | Optional. A list of secondary IP ranges to be created within the new subnetwork. | [optional] 
**subnetwork** | **str** | Required. A name for the new subnet. For information about the naming requirements, see [subnetwork](/compute/docs/reference/rest/v1/subnetworks) in the Compute API documentation. | [optional] 
**subnetwork_users** | **List[str]** | A list of members that are granted the &#x60;roles/servicenetworking.subnetworkAdmin&#x60; role on the subnet. | [optional] 
**use_custom_compute_idempotency_window** | **bool** | Optional. Specifies if Service Networking should use a custom time bucket for Arcus idempotency. If false, Service Networking uses a 300 second (5 minute) Arcus idempotency window. If true, Service Networking uses a custom idempotency window provided by the user in field compute_idempotency_window. For more information on how to use, see: go/revisit-sn-idempotency-window | [optional] 

## Example

```python
from openapi_client.models.add_subnetwork_request import AddSubnetworkRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddSubnetworkRequest from a JSON string
add_subnetwork_request_instance = AddSubnetworkRequest.from_json(json)
# print the JSON string representation of the object
print(AddSubnetworkRequest.to_json())

# convert the object into a dict
add_subnetwork_request_dict = add_subnetwork_request_instance.to_dict()
# create an instance of AddSubnetworkRequest from a dict
add_subnetwork_request_from_dict = AddSubnetworkRequest.from_dict(add_subnetwork_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


