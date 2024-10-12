# WebAppsList200ResponseValueInnerPropertiesSiteConfigConnectionStringsInner

Database connection string information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_string** | **str** | Connection string value. | [optional] 
**name** | **str** | Name of connection string. | [optional] 
**type** | **str** | Type of database. | [optional] 

## Example

```python
from openapi_client.models.web_apps_list200_response_value_inner_properties_site_config_connection_strings_inner import WebAppsList200ResponseValueInnerPropertiesSiteConfigConnectionStringsInner

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsList200ResponseValueInnerPropertiesSiteConfigConnectionStringsInner from a JSON string
web_apps_list200_response_value_inner_properties_site_config_connection_strings_inner_instance = WebAppsList200ResponseValueInnerPropertiesSiteConfigConnectionStringsInner.from_json(json)
# print the JSON string representation of the object
print(WebAppsList200ResponseValueInnerPropertiesSiteConfigConnectionStringsInner.to_json())

# convert the object into a dict
web_apps_list200_response_value_inner_properties_site_config_connection_strings_inner_dict = web_apps_list200_response_value_inner_properties_site_config_connection_strings_inner_instance.to_dict()
# create an instance of WebAppsList200ResponseValueInnerPropertiesSiteConfigConnectionStringsInner from a dict
web_apps_list200_response_value_inner_properties_site_config_connection_strings_inner_from_dict = WebAppsList200ResponseValueInnerPropertiesSiteConfigConnectionStringsInner.from_dict(web_apps_list200_response_value_inner_properties_site_config_connection_strings_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


