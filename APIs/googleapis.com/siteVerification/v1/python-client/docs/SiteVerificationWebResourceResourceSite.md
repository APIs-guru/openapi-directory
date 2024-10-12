# SiteVerificationWebResourceResourceSite

The address and type of a site that is verified or will be verified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identifier** | **str** | The site identifier. If the type is set to SITE, the identifier is a URL. If the type is set to INET_DOMAIN, the site identifier is a domain name. | [optional] 
**type** | **str** | The site type. Can be SITE or INET_DOMAIN (domain name). | [optional] 

## Example

```python
from openapi_client.models.site_verification_web_resource_resource_site import SiteVerificationWebResourceResourceSite

# TODO update the JSON string below
json = "{}"
# create an instance of SiteVerificationWebResourceResourceSite from a JSON string
site_verification_web_resource_resource_site_instance = SiteVerificationWebResourceResourceSite.from_json(json)
# print the JSON string representation of the object
print(SiteVerificationWebResourceResourceSite.to_json())

# convert the object into a dict
site_verification_web_resource_resource_site_dict = site_verification_web_resource_resource_site_instance.to_dict()
# create an instance of SiteVerificationWebResourceResourceSite from a dict
site_verification_web_resource_resource_site_from_dict = SiteVerificationWebResourceResourceSite.from_dict(site_verification_web_resource_resource_site_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


