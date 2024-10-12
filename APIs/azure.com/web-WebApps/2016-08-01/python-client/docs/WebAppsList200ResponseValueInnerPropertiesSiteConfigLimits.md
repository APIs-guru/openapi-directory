# WebAppsList200ResponseValueInnerPropertiesSiteConfigLimits

Metric limits set on an app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_disk_size_in_mb** | **int** | Maximum allowed disk size usage in MB. | [optional] 
**max_memory_in_mb** | **int** | Maximum allowed memory usage in MB. | [optional] 
**max_percentage_cpu** | **float** | Maximum allowed CPU usage percentage. | [optional] 

## Example

```python
from openapi_client.models.web_apps_list200_response_value_inner_properties_site_config_limits import WebAppsList200ResponseValueInnerPropertiesSiteConfigLimits

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsList200ResponseValueInnerPropertiesSiteConfigLimits from a JSON string
web_apps_list200_response_value_inner_properties_site_config_limits_instance = WebAppsList200ResponseValueInnerPropertiesSiteConfigLimits.from_json(json)
# print the JSON string representation of the object
print(WebAppsList200ResponseValueInnerPropertiesSiteConfigLimits.to_json())

# convert the object into a dict
web_apps_list200_response_value_inner_properties_site_config_limits_dict = web_apps_list200_response_value_inner_properties_site_config_limits_instance.to_dict()
# create an instance of WebAppsList200ResponseValueInnerPropertiesSiteConfigLimits from a dict
web_apps_list200_response_value_inner_properties_site_config_limits_from_dict = WebAppsList200ResponseValueInnerPropertiesSiteConfigLimits.from_dict(web_apps_list200_response_value_inner_properties_site_config_limits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


