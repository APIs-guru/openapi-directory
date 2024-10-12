# DomainLookupResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**age** | **int** | The number of days since the domain was registered. A domain age of under 90 days is generally considered to be potentially risky. A value of 0 indicates no registration date was found for this domain | 
**blocklists** | **List[str]** | An array of strings indicating which blocklist categories this domain is listed on. Current categories are: phishing, malware, spam, anonymizer, nefarious | 
**dns_provider** | **str** | The primary domain of the DNS provider for this domain | 
**domain** | **str** | The primary domain name excluding any subdomains. This is also referred to as the second-level domain (SLD) | 
**fqdn** | **str** | The fully qualified domain name (FQDN) | 
**is_adult** | **bool** | This domain is hosting adult content such as porn, webcams, escorts, etc | 
**is_gov** | **bool** | Is this domain under a government or military TLD | 
**is_malicious** | **bool** | Consider this domain malicious as it is currently listed on at least 1 blocklist | 
**is_opennic** | **bool** | Is this domain under an OpenNIC TLD | 
**is_pending** | **bool** | True if this domain is unseen and is currently being processed in the background. This field only matters when the &#39;live&#39; lookup setting has been explicitly disabled and indicates that not all domain data my be present yet | 
**is_subdomain** | **bool** | Is the FQDN a subdomain of the primary domain | 
**mail_provider** | **str** | The primary domain of the email provider for this domain. An empty value indicates the domain has no valid MX records | 
**rank** | **int** | The domains estimated global traffic rank with the highest rank being 1. A value of 0 indicates the domain is currently ranked outside of the top 1M of domains | 
**registered_date** | **str** | The ISO date this domain was registered or first seen on the internet. An empty value indicates we could not reliably determine the date | 
**registrar_id** | **int** | The IANA registrar ID (0 if no registrar ID was found) | 
**registrar_name** | **str** | The name of the domain registrar owning this domain | 
**sensors** | [**List[BlocklistSensor]**](BlocklistSensor.md) | An array of objects containing details on which specific blocklist sensors have detected this domain | 
**tld** | **str** | The top-level domain (TLD) | 
**tld_cc** | **str** | For a country code top-level domain (ccTLD) this will contain the associated ISO 2-letter country code | 
**valid** | **bool** | True if a valid domain was found. For a domain to be considered valid it must be registered and have valid DNS NS records | 

## Example

```python
from openapi_client.models.domain_lookup_response import DomainLookupResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DomainLookupResponse from a JSON string
domain_lookup_response_instance = DomainLookupResponse.from_json(json)
# print the JSON string representation of the object
print(DomainLookupResponse.to_json())

# convert the object into a dict
domain_lookup_response_dict = domain_lookup_response_instance.to_dict()
# create an instance of DomainLookupResponse from a dict
domain_lookup_response_from_dict = DomainLookupResponse.from_dict(domain_lookup_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


