# RemoveDnsZoneRequest

Request to remove a private managed DNS zone in the shared producer host project and a matching DNS peering zone in the consumer project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_network** | **str** | Required. The network that the consumer is using to connect with services. Must be in the form of projects/{project}/global/networks/{network} {project} is the project number, as in &#39;12345&#39; {network} is the network name. | [optional] 
**name** | **str** | Required. The name for both the private zone in the shared producer host project and the peering zone in the consumer project. | [optional] 

## Example

```python
from openapi_client.models.remove_dns_zone_request import RemoveDnsZoneRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveDnsZoneRequest from a JSON string
remove_dns_zone_request_instance = RemoveDnsZoneRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveDnsZoneRequest.to_json())

# convert the object into a dict
remove_dns_zone_request_dict = remove_dns_zone_request_instance.to_dict()
# create an instance of RemoveDnsZoneRequest from a dict
remove_dns_zone_request_from_dict = RemoveDnsZoneRequest.from_dict(remove_dns_zone_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


