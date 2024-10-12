# CustomDomain

A `CustomDomain` is an entity that links a domain name to a Firebase Hosting site. Add a `CustomDomain` to your site to allow Hosting to serve the site's content in response to requests against your domain name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | Annotations you can add to leave both human- and machine-readable metadata about your &#x60;CustomDomain&#x60;. | [optional] 
**cert** | [**Certificate**](Certificate.md) |  | [optional] 
**cert_preference** | **str** | A field that lets you specify which SSL certificate type Hosting creates for your domain name. Spark plan custom domains only have access to the &#x60;GROUPED&#x60; cert type, while Blaze plan domains can select any option. | [optional] 
**create_time** | **str** | Output only. The custom domain&#39;s create time. | [optional] [readonly] 
**delete_time** | **str** | Output only. The time the &#x60;CustomDomain&#x60; was deleted; null for custom domains that haven&#39;t been deleted. Deleted custom domains persist for approximately 30 days, after which time Hosting removes them completely. To restore a deleted custom domain, make an &#x60;UndeleteCustomDomain&#x60; request. | [optional] [readonly] 
**etag** | **str** | Output only. A string that represents the current state of the &#x60;CustomDomain&#x60; and allows you to confirm its initial state in requests that would modify it. Use the tag to ensure consistency when making &#x60;UpdateCustomDomain&#x60;, &#x60;DeleteCustomDomain&#x60;, and &#x60;UndeleteCustomDomain&#x60; requests. | [optional] [readonly] 
**expire_time** | **str** | Output only. The minimum time before a soft-deleted &#x60;CustomDomain&#x60; is completely removed from Hosting; null for custom domains that haven&#39;t been deleted. | [optional] [readonly] 
**host_state** | **str** | Output only. The &#x60;HostState&#x60; of the domain name this &#x60;CustomDomain&#x60; refers to. | [optional] [readonly] 
**issues** | [**List[Status]**](Status.md) | Output only. A set of errors Hosting systems encountered when trying to establish Hosting&#39;s ability to serve secure content for your domain name. Resolve these issues to ensure your &#x60;CustomDomain&#x60; behaves properly. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Labels used for extra metadata and/or filtering. | [optional] 
**name** | **str** | Output only. The fully-qualified name of the &#x60;CustomDomain&#x60;. | [optional] [readonly] 
**ownership_state** | **str** | Output only. The &#x60;OwnershipState&#x60; of the domain name this &#x60;CustomDomain&#x60; refers to. | [optional] [readonly] 
**reconciling** | **bool** | Output only. A field that, if true, indicates that Hosting&#39;s systems are attmepting to make the custom domain&#39;s state match your preferred state. This is most frequently &#x60;true&#x60; when initially provisioning a &#x60;CustomDomain&#x60; after a &#x60;CreateCustomDomain&#x60; request or when creating a new SSL certificate to match an updated &#x60;cert_preference&#x60; after an &#x60;UpdateCustomDomain&#x60; request. | [optional] [readonly] 
**redirect_target** | **str** | A domain name that this &#x60;CustomDomain&#x60; should direct traffic towards. If specified, Hosting will respond to requests against this custom domain with an HTTP 301 code, and route traffic to the specified &#x60;redirect_target&#x60; instead. | [optional] 
**required_dns_updates** | [**DnsUpdates**](DnsUpdates.md) |  | [optional] 
**update_time** | **str** | Output only. The last time the &#x60;CustomDomain&#x60; was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.custom_domain import CustomDomain

# TODO update the JSON string below
json = "{}"
# create an instance of CustomDomain from a JSON string
custom_domain_instance = CustomDomain.from_json(json)
# print the JSON string representation of the object
print(CustomDomain.to_json())

# convert the object into a dict
custom_domain_dict = custom_domain_instance.to_dict()
# create an instance of CustomDomain from a dict
custom_domain_from_dict = CustomDomain.from_dict(custom_domain_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


