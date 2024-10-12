# CustomDomainMetadata

Metadata associated with a`CustomDomain` operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cert_state** | **str** | The &#x60;CertState&#x60; of the domain name&#39;s SSL certificate. | [optional] 
**host_state** | **str** | The &#x60;HostState&#x60; of the domain name this &#x60;CustomDomain&#x60; refers to. | [optional] 
**issues** | [**List[Status]**](Status.md) | A list of issues that are currently preventing Hosting from completing the operation. These are generally DNS-related issues that Hosting encounters when querying a domain name&#39;s records or attempting to mint an SSL certificate. | [optional] 
**live_migration_steps** | [**List[LiveMigrationStep]**](LiveMigrationStep.md) | A set of DNS record updates and ACME challenges that allow you to transition domain names to Firebase Hosting with zero downtime. These updates allow Hosting to create an SSL certificate and establish ownership for your custom domain before Hosting begins serving traffic on it. If your domain name is already in active use with another provider, add one of the challenges and make the recommended DNS updates. After adding challenges and adjusting DNS records as necessary, wait for the &#x60;ownershipState&#x60; to be &#x60;OWNERSHIP_ACTIVE&#x60; and the &#x60;certState&#x60; to be &#x60;CERT_ACTIVE&#x60; before sending traffic to Hosting. | [optional] 
**ownership_state** | **str** | The &#x60;OwnershipState&#x60; of the domain name this &#x60;CustomDomain&#x60; refers to. | [optional] 
**quick_setup_updates** | [**DnsUpdates**](DnsUpdates.md) |  | [optional] 

## Example

```python
from openapi_client.models.custom_domain_metadata import CustomDomainMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CustomDomainMetadata from a JSON string
custom_domain_metadata_instance = CustomDomainMetadata.from_json(json)
# print the JSON string representation of the object
print(CustomDomainMetadata.to_json())

# convert the object into a dict
custom_domain_metadata_dict = custom_domain_metadata_instance.to_dict()
# create an instance of CustomDomainMetadata from a dict
custom_domain_metadata_from_dict = CustomDomainMetadata.from_dict(custom_domain_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


