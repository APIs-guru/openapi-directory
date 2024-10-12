# SiteVerificationWebResourceGettokenRequestSite

The site for which a verification token will be generated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identifier** | **str** | The site identifier. If the type is set to SITE, the identifier is a URL. If the type is set to INET_DOMAIN, the site identifier is a domain name. | [optional] 
**type** | **str** | The type of resource to be verified. Can be SITE or INET_DOMAIN (domain name). | [optional] 

## Example

```python
from openapi_client.models.site_verification_web_resource_gettoken_request_site import SiteVerificationWebResourceGettokenRequestSite

# TODO update the JSON string below
json = "{}"
# create an instance of SiteVerificationWebResourceGettokenRequestSite from a JSON string
site_verification_web_resource_gettoken_request_site_instance = SiteVerificationWebResourceGettokenRequestSite.from_json(json)
# print the JSON string representation of the object
print(SiteVerificationWebResourceGettokenRequestSite.to_json())

# convert the object into a dict
site_verification_web_resource_gettoken_request_site_dict = site_verification_web_resource_gettoken_request_site_instance.to_dict()
# create an instance of SiteVerificationWebResourceGettokenRequestSite from a dict
site_verification_web_resource_gettoken_request_site_from_dict = SiteVerificationWebResourceGettokenRequestSite.from_dict(site_verification_web_resource_gettoken_request_site_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


