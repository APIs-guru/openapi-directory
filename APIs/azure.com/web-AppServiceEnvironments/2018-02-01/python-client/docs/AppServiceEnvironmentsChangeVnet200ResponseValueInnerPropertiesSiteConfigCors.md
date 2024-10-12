# AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigCors

Cross-Origin Resource Sharing (CORS) settings for the app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_origins** | **List[str]** | Gets or sets the list of origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). Use \&quot;*\&quot; to allow all. | [optional] 
**support_credentials** | **bool** | Gets or sets whether CORS requests with credentials are allowed. See  https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Requests_with_credentials for more details. | [optional] 

## Example

```python
from openapi_client.models.app_service_environments_change_vnet200_response_value_inner_properties_site_config_cors import AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigCors

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigCors from a JSON string
app_service_environments_change_vnet200_response_value_inner_properties_site_config_cors_instance = AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigCors.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigCors.to_json())

# convert the object into a dict
app_service_environments_change_vnet200_response_value_inner_properties_site_config_cors_dict = app_service_environments_change_vnet200_response_value_inner_properties_site_config_cors_instance.to_dict()
# create an instance of AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigCors from a dict
app_service_environments_change_vnet200_response_value_inner_properties_site_config_cors_from_dict = AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigCors.from_dict(app_service_environments_change_vnet200_response_value_inner_properties_site_config_cors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


