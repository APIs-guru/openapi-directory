# DnsKeysListResponse

The response to a request to enumerate DnsKeys in a ManagedZone.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_keys** | [**List[DnsKey]**](DnsKey.md) | The requested resources. | [optional] 
**header** | [**ResponseHeader**](ResponseHeader.md) |  | [optional] 
**kind** | **str** | Type of resource. | [optional] [default to 'dns#dnsKeysListResponse']
**next_page_token** | **str** | The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another list request using this value as your pagination token. In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change between the first and last paginated list request, the set of all elements returned are an inconsistent view of the collection. There is no way to retrieve a \&quot;snapshot\&quot; of collections larger than the maximum page size. | [optional] 

## Example

```python
from openapi_client.models.dns_keys_list_response import DnsKeysListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DnsKeysListResponse from a JSON string
dns_keys_list_response_instance = DnsKeysListResponse.from_json(json)
# print the JSON string representation of the object
print(DnsKeysListResponse.to_json())

# convert the object into a dict
dns_keys_list_response_dict = dns_keys_list_response_instance.to_dict()
# create an instance of DnsKeysListResponse from a dict
dns_keys_list_response_from_dict = DnsKeysListResponse.from_dict(dns_keys_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


