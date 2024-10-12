# ListDnsRecordSetsResponse

Represents all DNS RecordSets associated with the producer network

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_record_sets** | [**List[DnsRecordSet]**](DnsRecordSet.md) | DNS record Set Resource | [optional] 

## Example

```python
from openapi_client.models.list_dns_record_sets_response import ListDnsRecordSetsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDnsRecordSetsResponse from a JSON string
list_dns_record_sets_response_instance = ListDnsRecordSetsResponse.from_json(json)
# print the JSON string representation of the object
print(ListDnsRecordSetsResponse.to_json())

# convert the object into a dict
list_dns_record_sets_response_dict = list_dns_record_sets_response_instance.to_dict()
# create an instance of ListDnsRecordSetsResponse from a dict
list_dns_record_sets_response_from_dict = ListDnsRecordSetsResponse.from_dict(list_dns_record_sets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


