# SiteVerificationWebResourceListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[SiteVerificationWebResourceResource]**](SiteVerificationWebResourceResource.md) | The list of sites that are owned by the authenticated user. | [optional] 

## Example

```python
from openapi_client.models.site_verification_web_resource_list_response import SiteVerificationWebResourceListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SiteVerificationWebResourceListResponse from a JSON string
site_verification_web_resource_list_response_instance = SiteVerificationWebResourceListResponse.from_json(json)
# print the JSON string representation of the object
print(SiteVerificationWebResourceListResponse.to_json())

# convert the object into a dict
site_verification_web_resource_list_response_dict = site_verification_web_resource_list_response_instance.to_dict()
# create an instance of SiteVerificationWebResourceListResponse from a dict
site_verification_web_resource_list_response_from_dict = SiteVerificationWebResourceListResponse.from_dict(site_verification_web_resource_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


