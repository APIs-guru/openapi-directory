# UpdateDnsRecordSetRequest

Request to update a record set from a private managed DNS zone in the shared producer host project. The name, type, ttl, and data values of the existing record set must all exactly match an existing record set in the specified zone.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_network** | **str** | Required. The network that the consumer is using to connect with services. Must be in the form of projects/{project}/global/networks/{network} {project} is the project number, as in &#39;12345&#39; {network} is the network name. | [optional] 
**existing_dns_record_set** | [**DnsRecordSet**](DnsRecordSet.md) |  | [optional] 
**new_dns_record_set** | [**DnsRecordSet**](DnsRecordSet.md) |  | [optional] 
**zone** | **str** | Required. The name of the private DNS zone in the shared producer host project from which the record set will be removed. | [optional] 

## Example

```python
from openapi_client.models.update_dns_record_set_request import UpdateDnsRecordSetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDnsRecordSetRequest from a JSON string
update_dns_record_set_request_instance = UpdateDnsRecordSetRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDnsRecordSetRequest.to_json())

# convert the object into a dict
update_dns_record_set_request_dict = update_dns_record_set_request_instance.to_dict()
# create an instance of UpdateDnsRecordSetRequest from a dict
update_dns_record_set_request_from_dict = UpdateDnsRecordSetRequest.from_dict(update_dns_record_set_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


