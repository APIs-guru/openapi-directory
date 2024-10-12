# WebAppsList200ResponseValueInnerPropertiesSiteConfigVirtualApplicationsInner

Virtual application in an app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**physical_path** | **str** | Physical path. | [optional] 
**preload_enabled** | **bool** | &lt;code&gt;true&lt;/code&gt; if preloading is enabled; otherwise, &lt;code&gt;false&lt;/code&gt;. | [optional] 
**virtual_directories** | [**List[WebAppsList200ResponseValueInnerPropertiesSiteConfigVirtualApplicationsInnerVirtualDirectoriesInner]**](WebAppsList200ResponseValueInnerPropertiesSiteConfigVirtualApplicationsInnerVirtualDirectoriesInner.md) | Virtual directories for virtual application. | [optional] 
**virtual_path** | **str** | Virtual path. | [optional] 

## Example

```python
from openapi_client.models.web_apps_list200_response_value_inner_properties_site_config_virtual_applications_inner import WebAppsList200ResponseValueInnerPropertiesSiteConfigVirtualApplicationsInner

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsList200ResponseValueInnerPropertiesSiteConfigVirtualApplicationsInner from a JSON string
web_apps_list200_response_value_inner_properties_site_config_virtual_applications_inner_instance = WebAppsList200ResponseValueInnerPropertiesSiteConfigVirtualApplicationsInner.from_json(json)
# print the JSON string representation of the object
print(WebAppsList200ResponseValueInnerPropertiesSiteConfigVirtualApplicationsInner.to_json())

# convert the object into a dict
web_apps_list200_response_value_inner_properties_site_config_virtual_applications_inner_dict = web_apps_list200_response_value_inner_properties_site_config_virtual_applications_inner_instance.to_dict()
# create an instance of WebAppsList200ResponseValueInnerPropertiesSiteConfigVirtualApplicationsInner from a dict
web_apps_list200_response_value_inner_properties_site_config_virtual_applications_inner_from_dict = WebAppsList200ResponseValueInnerPropertiesSiteConfigVirtualApplicationsInner.from_dict(web_apps_list200_response_value_inner_properties_site_config_virtual_applications_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


