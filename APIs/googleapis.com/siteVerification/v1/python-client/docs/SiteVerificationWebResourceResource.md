# SiteVerificationWebResourceResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The string used to identify this site. This value should be used in the \&quot;id\&quot; portion of the REST URL for the Get, Update, and Delete operations. | [optional] 
**owners** | **List[str]** | The email addresses of all verified owners. | [optional] 
**site** | [**SiteVerificationWebResourceResourceSite**](SiteVerificationWebResourceResourceSite.md) |  | [optional] 

## Example

```python
from openapi_client.models.site_verification_web_resource_resource import SiteVerificationWebResourceResource

# TODO update the JSON string below
json = "{}"
# create an instance of SiteVerificationWebResourceResource from a JSON string
site_verification_web_resource_resource_instance = SiteVerificationWebResourceResource.from_json(json)
# print the JSON string representation of the object
print(SiteVerificationWebResourceResource.to_json())

# convert the object into a dict
site_verification_web_resource_resource_dict = site_verification_web_resource_resource_instance.to_dict()
# create an instance of SiteVerificationWebResourceResource from a dict
site_verification_web_resource_resource_from_dict = SiteVerificationWebResourceResource.from_dict(site_verification_web_resource_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


