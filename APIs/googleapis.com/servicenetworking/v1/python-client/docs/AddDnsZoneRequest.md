# AddDnsZoneRequest

Request to add a private managed DNS zone in the shared producer host project and a matching DNS peering zone in the consumer project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_network** | **str** | Required. The network that the consumer is using to connect with services. Must be in the form of projects/{project}/global/networks/{network} {project} is the project number, as in &#39;12345&#39; {network} is the network name. | [optional] 
**dns_suffix** | **str** | Required. The DNS name suffix for the zones e.g. &#x60;example.com.&#x60;. Cloud DNS requires that a DNS suffix ends with a trailing dot. | [optional] 
**name** | **str** | Required. The name for both the private zone in the shared producer host project and the peering zone in the consumer project. Must be unique within both projects. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes. | [optional] 

## Example

```python
from openapi_client.models.add_dns_zone_request import AddDnsZoneRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddDnsZoneRequest from a JSON string
add_dns_zone_request_instance = AddDnsZoneRequest.from_json(json)
# print the JSON string representation of the object
print(AddDnsZoneRequest.to_json())

# convert the object into a dict
add_dns_zone_request_dict = add_dns_zone_request_instance.to_dict()
# create an instance of AddDnsZoneRequest from a dict
add_dns_zone_request_from_dict = AddDnsZoneRequest.from_dict(add_dns_zone_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


