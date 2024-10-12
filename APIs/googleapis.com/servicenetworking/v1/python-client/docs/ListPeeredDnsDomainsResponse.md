# ListPeeredDnsDomainsResponse

Response to list peered DNS domains for a given connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**peered_dns_domains** | [**List[PeeredDnsDomain]**](PeeredDnsDomain.md) | The list of peered DNS domains. | [optional] 

## Example

```python
from openapi_client.models.list_peered_dns_domains_response import ListPeeredDnsDomainsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPeeredDnsDomainsResponse from a JSON string
list_peered_dns_domains_response_instance = ListPeeredDnsDomainsResponse.from_json(json)
# print the JSON string representation of the object
print(ListPeeredDnsDomainsResponse.to_json())

# convert the object into a dict
list_peered_dns_domains_response_dict = list_peered_dns_domains_response_instance.to_dict()
# create an instance of ListPeeredDnsDomainsResponse from a dict
list_peered_dns_domains_response_from_dict = ListPeeredDnsDomainsResponse.from_dict(list_peered_dns_domains_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


