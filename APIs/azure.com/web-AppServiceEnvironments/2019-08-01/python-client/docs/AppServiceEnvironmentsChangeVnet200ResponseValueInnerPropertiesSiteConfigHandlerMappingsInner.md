# AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigHandlerMappingsInner

The IIS handler mappings used to define which handler processes HTTP requests with certain extension.  For example, it is used to configure php-cgi.exe process to handle all HTTP requests with *.php extension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | **str** | Command-line arguments to be passed to the script processor. | [optional] 
**extension** | **str** | Requests with this extension will be handled using the specified FastCGI application. | [optional] 
**script_processor** | **str** | The absolute path to the FastCGI application. | [optional] 

## Example

```python
from openapi_client.models.app_service_environments_change_vnet200_response_value_inner_properties_site_config_handler_mappings_inner import AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigHandlerMappingsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigHandlerMappingsInner from a JSON string
app_service_environments_change_vnet200_response_value_inner_properties_site_config_handler_mappings_inner_instance = AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigHandlerMappingsInner.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigHandlerMappingsInner.to_json())

# convert the object into a dict
app_service_environments_change_vnet200_response_value_inner_properties_site_config_handler_mappings_inner_dict = app_service_environments_change_vnet200_response_value_inner_properties_site_config_handler_mappings_inner_instance.to_dict()
# create an instance of AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigHandlerMappingsInner from a dict
app_service_environments_change_vnet200_response_value_inner_properties_site_config_handler_mappings_inner_from_dict = AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigHandlerMappingsInner.from_dict(app_service_environments_change_vnet200_response_value_inner_properties_site_config_handler_mappings_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


