# GoogleDomainsDns

Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations). Configuration for using the free DNS zone provided by Google Domains as a `Registration`'s `dns_provider`. You cannot configure the DNS zone itself using the API. To configure the DNS zone, go to [Google Domains](https://domains.google/).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ds_records** | [**List[DsRecord]**](DsRecord.md) | Output only. The list of DS records published for this domain. The list is automatically populated when &#x60;ds_state&#x60; is &#x60;DS_RECORDS_PUBLISHED&#x60;, otherwise it remains empty. | [optional] [readonly] 
**ds_state** | **str** | Required. The state of DS records for this domain. Used to enable or disable automatic DNSSEC. | [optional] 
**name_servers** | **List[str]** | Output only. A list of name servers that store the DNS zone for this domain. Each name server is a domain name, with Unicode domain names expressed in Punycode format. This field is automatically populated with the name servers assigned to the Google Domains DNS zone. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_domains_dns import GoogleDomainsDns

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDomainsDns from a JSON string
google_domains_dns_instance = GoogleDomainsDns.from_json(json)
# print the JSON string representation of the object
print(GoogleDomainsDns.to_json())

# convert the object into a dict
google_domains_dns_dict = google_domains_dns_instance.to_dict()
# create an instance of GoogleDomainsDns from a dict
google_domains_dns_from_dict = GoogleDomainsDns.from_dict(google_domains_dns_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


