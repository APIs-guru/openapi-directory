# AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigConnectionStringsInner

Database connection string information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_string** | **str** | Connection string value. | [optional] 
**name** | **str** | Name of connection string. | [optional] 
**type** | **str** | Type of database. | [optional] 

## Example

```python
from openapi_client.models.app_service_environments_change_vnet200_response_value_inner_properties_site_config_connection_strings_inner import AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigConnectionStringsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigConnectionStringsInner from a JSON string
app_service_environments_change_vnet200_response_value_inner_properties_site_config_connection_strings_inner_instance = AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigConnectionStringsInner.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigConnectionStringsInner.to_json())

# convert the object into a dict
app_service_environments_change_vnet200_response_value_inner_properties_site_config_connection_strings_inner_dict = app_service_environments_change_vnet200_response_value_inner_properties_site_config_connection_strings_inner_instance.to_dict()
# create an instance of AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigConnectionStringsInner from a dict
app_service_environments_change_vnet200_response_value_inner_properties_site_config_connection_strings_inner_from_dict = AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigConnectionStringsInner.from_dict(app_service_environments_change_vnet200_response_value_inner_properties_site_config_connection_strings_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


