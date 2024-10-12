# SiteConfigResource

Web app configuration ARM resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | Configuration of an App Service app. | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.site_config_resource import SiteConfigResource

# TODO update the JSON string below
json = "{}"
# create an instance of SiteConfigResource from a JSON string
site_config_resource_instance = SiteConfigResource.from_json(json)
# print the JSON string representation of the object
print(SiteConfigResource.to_json())

# convert the object into a dict
site_config_resource_dict = site_config_resource_instance.to_dict()
# create an instance of SiteConfigResource from a dict
site_config_resource_from_dict = SiteConfigResource.from_dict(site_config_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


