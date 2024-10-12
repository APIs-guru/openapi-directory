# SiteVerificationWebResourceGettokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**site** | [**SiteVerificationWebResourceGettokenRequestSite**](SiteVerificationWebResourceGettokenRequestSite.md) |  | [optional] 
**verification_method** | **str** | The verification method that will be used to verify this site. For sites, &#39;FILE&#39; or &#39;META&#39; methods may be used. For domains, only &#39;DNS&#39; may be used. | [optional] 

## Example

```python
from openapi_client.models.site_verification_web_resource_gettoken_request import SiteVerificationWebResourceGettokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SiteVerificationWebResourceGettokenRequest from a JSON string
site_verification_web_resource_gettoken_request_instance = SiteVerificationWebResourceGettokenRequest.from_json(json)
# print the JSON string representation of the object
print(SiteVerificationWebResourceGettokenRequest.to_json())

# convert the object into a dict
site_verification_web_resource_gettoken_request_dict = site_verification_web_resource_gettoken_request_instance.to_dict()
# create an instance of SiteVerificationWebResourceGettokenRequest from a dict
site_verification_web_resource_gettoken_request_from_dict = SiteVerificationWebResourceGettokenRequest.from_dict(site_verification_web_resource_gettoken_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


