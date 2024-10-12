# ManagementDnsZoneBinding

Represents a binding between a network and the management DNS zone. A management DNS zone is the Cloud DNS cross-project binding zone that VMware Engine creates for each private cloud. It contains FQDNs and corresponding IP addresses for the private cloud's ESXi hosts and management VM appliances like vCenter and NSX Manager.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Creation time of this resource. | [optional] [readonly] 
**description** | **str** | User-provided description for this resource. | [optional] 
**name** | **str** | Output only. The resource name of this binding. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: &#x60;projects/my-project/locations/us-central1-a/privateClouds/my-cloud/managementDnsZoneBindings/my-management-dns-zone-binding&#x60; | [optional] [readonly] 
**state** | **str** | Output only. The state of the resource. | [optional] [readonly] 
**uid** | **str** | Output only. System-generated unique identifier for the resource. | [optional] [readonly] 
**update_time** | **str** | Output only. Last update time of this resource. | [optional] [readonly] 
**vmware_engine_network** | **str** | Network to bind is a VMware Engine network. Specify the name in the following form for VMware engine network: &#x60;projects/{project}/locations/global/vmwareEngineNetworks/{vmware_engine_network_id}&#x60;. &#x60;{project}&#x60; can either be a project number or a project ID. | [optional] 
**vpc_network** | **str** | Network to bind is a standard consumer VPC. Specify the name in the following form for consumer VPC network: &#x60;projects/{project}/global/networks/{network_id}&#x60;. &#x60;{project}&#x60; can either be a project number or a project ID. | [optional] 

## Example

```python
from openapi_client.models.management_dns_zone_binding import ManagementDnsZoneBinding

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementDnsZoneBinding from a JSON string
management_dns_zone_binding_instance = ManagementDnsZoneBinding.from_json(json)
# print the JSON string representation of the object
print(ManagementDnsZoneBinding.to_json())

# convert the object into a dict
management_dns_zone_binding_dict = management_dns_zone_binding_instance.to_dict()
# create an instance of ManagementDnsZoneBinding from a dict
management_dns_zone_binding_from_dict = ManagementDnsZoneBinding.from_dict(management_dns_zone_binding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


