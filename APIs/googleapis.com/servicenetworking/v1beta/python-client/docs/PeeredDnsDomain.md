# PeeredDnsDomain

DNS domain suffix for which requests originating in the producer VPC network are resolved in the associated consumer VPC network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_suffix** | **str** | The DNS domain name suffix e.g. &#x60;example.com.&#x60;. Cloud DNS requires that a DNS suffix ends with a trailing dot. | [optional] 
**name** | **str** | User assigned name for this resource. Must be unique within the consumer network. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes. | [optional] 

## Example

```python
from openapi_client.models.peered_dns_domain import PeeredDnsDomain

# TODO update the JSON string below
json = "{}"
# create an instance of PeeredDnsDomain from a JSON string
peered_dns_domain_instance = PeeredDnsDomain.from_json(json)
# print the JSON string representation of the object
print(PeeredDnsDomain.to_json())

# convert the object into a dict
peered_dns_domain_dict = peered_dns_domain_instance.to_dict()
# create an instance of PeeredDnsDomain from a dict
peered_dns_domain_from_dict = PeeredDnsDomain.from_dict(peered_dns_domain_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


