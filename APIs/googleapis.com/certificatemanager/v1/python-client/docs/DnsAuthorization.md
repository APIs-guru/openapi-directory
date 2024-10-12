# DnsAuthorization

A DnsAuthorization resource describes a way to perform domain authorization for certificate issuance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The creation timestamp of a DnsAuthorization. | [optional] [readonly] 
**description** | **str** | One or more paragraphs of text description of a DnsAuthorization. | [optional] 
**dns_resource_record** | [**DnsResourceRecord**](DnsResourceRecord.md) |  | [optional] 
**domain** | **str** | Required. Immutable. A domain that is being authorized. A DnsAuthorization resource covers a single domain and its wildcard, e.g. authorization for &#x60;example.com&#x60; can be used to issue certificates for &#x60;example.com&#x60; and &#x60;*.example.com&#x60;. | [optional] 
**labels** | **Dict[str, str]** | Set of labels associated with a DnsAuthorization. | [optional] 
**name** | **str** | A user-defined name of the dns authorization. DnsAuthorization names must be unique globally and match pattern &#x60;projects/*/locations/*/dnsAuthorizations/*&#x60;. | [optional] 
**type** | **str** | Immutable. Type of DnsAuthorization. If unset during resource creation the following default will be used: - in location global: FIXED_RECORD. | [optional] 
**update_time** | **str** | Output only. The last update timestamp of a DnsAuthorization. | [optional] [readonly] 

## Example

```python
from openapi_client.models.dns_authorization import DnsAuthorization

# TODO update the JSON string below
json = "{}"
# create an instance of DnsAuthorization from a JSON string
dns_authorization_instance = DnsAuthorization.from_json(json)
# print the JSON string representation of the object
print(DnsAuthorization.to_json())

# convert the object into a dict
dns_authorization_dict = dns_authorization_instance.to_dict()
# create an instance of DnsAuthorization from a dict
dns_authorization_from_dict = DnsAuthorization.from_dict(dns_authorization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


