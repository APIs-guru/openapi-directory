# SiteVerificationWebResourceGettokenResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** | The verification method to use in conjunction with this token. For FILE, the token should be placed in the top-level directory of the site, stored inside a file of the same name. For META, the token should be placed in the HEAD tag of the default page that is loaded for the site. For DNS, the token should be placed in a TXT record of the domain. | [optional] 
**token** | **str** | The verification token. The token must be placed appropriately in order for verification to succeed. | [optional] 

## Example

```python
from openapi_client.models.site_verification_web_resource_gettoken_response import SiteVerificationWebResourceGettokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SiteVerificationWebResourceGettokenResponse from a JSON string
site_verification_web_resource_gettoken_response_instance = SiteVerificationWebResourceGettokenResponse.from_json(json)
# print the JSON string representation of the object
print(SiteVerificationWebResourceGettokenResponse.to_json())

# convert the object into a dict
site_verification_web_resource_gettoken_response_dict = site_verification_web_resource_gettoken_response_instance.to_dict()
# create an instance of SiteVerificationWebResourceGettokenResponse from a dict
site_verification_web_resource_gettoken_response_from_dict = SiteVerificationWebResourceGettokenResponse.from_dict(site_verification_web_resource_gettoken_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


