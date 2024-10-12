# WebAppsList200ResponseValueInnerPropertiesSiteConfigCors

Cross-Origin Resource Sharing (CORS) settings for the app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_origins** | **List[str]** | Gets or sets the list of origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). Use \&quot;*\&quot; to allow all. | [optional] 

## Example

```python
from openapi_client.models.web_apps_list200_response_value_inner_properties_site_config_cors import WebAppsList200ResponseValueInnerPropertiesSiteConfigCors

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsList200ResponseValueInnerPropertiesSiteConfigCors from a JSON string
web_apps_list200_response_value_inner_properties_site_config_cors_instance = WebAppsList200ResponseValueInnerPropertiesSiteConfigCors.from_json(json)
# print the JSON string representation of the object
print(WebAppsList200ResponseValueInnerPropertiesSiteConfigCors.to_json())

# convert the object into a dict
web_apps_list200_response_value_inner_properties_site_config_cors_dict = web_apps_list200_response_value_inner_properties_site_config_cors_instance.to_dict()
# create an instance of WebAppsList200ResponseValueInnerPropertiesSiteConfigCors from a dict
web_apps_list200_response_value_inner_properties_site_config_cors_from_dict = WebAppsList200ResponseValueInnerPropertiesSiteConfigCors.from_dict(web_apps_list200_response_value_inner_properties_site_config_cors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


