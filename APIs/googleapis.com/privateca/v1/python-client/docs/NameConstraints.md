# NameConstraints

Describes the X.509 name constraints extension, per https://tools.ietf.org/html/rfc5280#section-4.2.1.10

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**critical** | **bool** | Indicates whether or not the name constraints are marked critical. | [optional] 
**excluded_dns_names** | **List[str]** | Contains excluded DNS names. Any DNS name that can be constructed by simply adding zero or more labels to the left-hand side of the name satisfies the name constraint. For example, &#x60;example.com&#x60;, &#x60;www.example.com&#x60;, &#x60;www.sub.example.com&#x60; would satisfy &#x60;example.com&#x60; while &#x60;example1.com&#x60; does not. | [optional] 
**excluded_email_addresses** | **List[str]** | Contains the excluded email addresses. The value can be a particular email address, a hostname to indicate all email addresses on that host or a domain with a leading period (e.g. &#x60;.example.com&#x60;) to indicate all email addresses in that domain. | [optional] 
**excluded_ip_ranges** | **List[str]** | Contains the excluded IP ranges. For IPv4 addresses, the ranges are expressed using CIDR notation as specified in RFC 4632. For IPv6 addresses, the ranges are expressed in similar encoding as IPv4 addresses. | [optional] 
**excluded_uris** | **List[str]** | Contains the excluded URIs that apply to the host part of the name. The value can be a hostname or a domain with a leading period (like &#x60;.example.com&#x60;) | [optional] 
**permitted_dns_names** | **List[str]** | Contains permitted DNS names. Any DNS name that can be constructed by simply adding zero or more labels to the left-hand side of the name satisfies the name constraint. For example, &#x60;example.com&#x60;, &#x60;www.example.com&#x60;, &#x60;www.sub.example.com&#x60; would satisfy &#x60;example.com&#x60; while &#x60;example1.com&#x60; does not. | [optional] 
**permitted_email_addresses** | **List[str]** | Contains the permitted email addresses. The value can be a particular email address, a hostname to indicate all email addresses on that host or a domain with a leading period (e.g. &#x60;.example.com&#x60;) to indicate all email addresses in that domain. | [optional] 
**permitted_ip_ranges** | **List[str]** | Contains the permitted IP ranges. For IPv4 addresses, the ranges are expressed using CIDR notation as specified in RFC 4632. For IPv6 addresses, the ranges are expressed in similar encoding as IPv4 addresses. | [optional] 
**permitted_uris** | **List[str]** | Contains the permitted URIs that apply to the host part of the name. The value can be a hostname or a domain with a leading period (like &#x60;.example.com&#x60;) | [optional] 

## Example

```python
from openapi_client.models.name_constraints import NameConstraints

# TODO update the JSON string below
json = "{}"
# create an instance of NameConstraints from a JSON string
name_constraints_instance = NameConstraints.from_json(json)
# print the JSON string representation of the object
print(NameConstraints.to_json())

# convert the object into a dict
name_constraints_dict = name_constraints_instance.to_dict()
# create an instance of NameConstraints from a dict
name_constraints_from_dict = NameConstraints.from_dict(name_constraints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


