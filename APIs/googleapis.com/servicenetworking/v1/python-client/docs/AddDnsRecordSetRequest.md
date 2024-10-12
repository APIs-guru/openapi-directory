# AddDnsRecordSetRequest

Request to add a record set to a private managed DNS zone in the shared producer host project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_network** | **str** | Required. The network that the consumer is using to connect with services. Must be in the form of projects/{project}/global/networks/{network} {project} is the project number, as in &#39;12345&#39; {network} is the network name. | [optional] 
**dns_record_set** | [**DnsRecordSet**](DnsRecordSet.md) |  | [optional] 
**zone** | **str** | Required. The name of the private DNS zone in the shared producer host project to which the record set will be added. | [optional] 

## Example

```python
from openapi_client.models.add_dns_record_set_request import AddDnsRecordSetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddDnsRecordSetRequest from a JSON string
add_dns_record_set_request_instance = AddDnsRecordSetRequest.from_json(json)
# print the JSON string representation of the object
print(AddDnsRecordSetRequest.to_json())

# convert the object into a dict
add_dns_record_set_request_dict = add_dns_record_set_request_instance.to_dict()
# create an instance of AddDnsRecordSetRequest from a dict
add_dns_record_set_request_from_dict = AddDnsRecordSetRequest.from_dict(add_dns_record_set_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


