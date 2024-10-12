# SiteAuthSettings

Configuration settings for the Azure App Service Authentication / Authorization feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | SiteAuthSettings resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.site_auth_settings import SiteAuthSettings

# TODO update the JSON string below
json = "{}"
# create an instance of SiteAuthSettings from a JSON string
site_auth_settings_instance = SiteAuthSettings.from_json(json)
# print the JSON string representation of the object
print(SiteAuthSettings.to_json())

# convert the object into a dict
site_auth_settings_dict = site_auth_settings_instance.to_dict()
# create an instance of SiteAuthSettings from a dict
site_auth_settings_from_dict = SiteAuthSettings.from_dict(site_auth_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


