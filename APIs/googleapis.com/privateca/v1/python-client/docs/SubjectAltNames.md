# SubjectAltNames

SubjectAltNames corresponds to a more modern way of listing what the asserted identity is in a certificate (i.e., compared to the \"common name\" in the distinguished name).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_sans** | [**List[X509Extension]**](X509Extension.md) | Contains additional subject alternative name values. For each custom_san, the &#x60;value&#x60; field must contain an ASN.1 encoded UTF8String. | [optional] 
**dns_names** | **List[str]** | Contains only valid, fully-qualified host names. | [optional] 
**email_addresses** | **List[str]** | Contains only valid RFC 2822 E-mail addresses. | [optional] 
**ip_addresses** | **List[str]** | Contains only valid 32-bit IPv4 addresses or RFC 4291 IPv6 addresses. | [optional] 
**uris** | **List[str]** | Contains only valid RFC 3986 URIs. | [optional] 

## Example

```python
from openapi_client.models.subject_alt_names import SubjectAltNames

# TODO update the JSON string below
json = "{}"
# create an instance of SubjectAltNames from a JSON string
subject_alt_names_instance = SubjectAltNames.from_json(json)
# print the JSON string representation of the object
print(SubjectAltNames.to_json())

# convert the object into a dict
subject_alt_names_dict = subject_alt_names_instance.to_dict()
# create an instance of SubjectAltNames from a dict
subject_alt_names_from_dict = SubjectAltNames.from_dict(subject_alt_names_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


