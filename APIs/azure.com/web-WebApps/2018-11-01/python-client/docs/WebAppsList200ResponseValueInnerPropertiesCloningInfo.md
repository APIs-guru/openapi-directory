# WebAppsList200ResponseValueInnerPropertiesCloningInfo

Information needed for cloning operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_settings_overrides** | **Dict[str, str]** | Application setting overrides for cloned app. If specified, these settings override the settings cloned  from source app. Otherwise, application settings from source app are retained. | [optional] 
**clone_custom_host_names** | **bool** | &lt;code&gt;true&lt;/code&gt; to clone custom hostnames from source app; otherwise, &lt;code&gt;false&lt;/code&gt;. | [optional] 
**clone_source_control** | **bool** | &lt;code&gt;true&lt;/code&gt; to clone source control from source app; otherwise, &lt;code&gt;false&lt;/code&gt;. | [optional] 
**configure_load_balancing** | **bool** | &lt;code&gt;true&lt;/code&gt; to configure load balancing for source and destination app. | [optional] 
**correlation_id** | **str** | Correlation ID of cloning operation. This ID ties multiple cloning operations together to use the same snapshot. | [optional] 
**hosting_environment** | **str** | App Service Environment. | [optional] 
**overwrite** | **bool** | &lt;code&gt;true&lt;/code&gt; to overwrite destination app; otherwise, &lt;code&gt;false&lt;/code&gt;. | [optional] 
**source_web_app_id** | **str** | ARM resource ID of the source app. App resource ID is of the form  /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName} for production slots and  /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slotName} for other slots. | 
**source_web_app_location** | **str** | Location of source app ex: West US or North Europe | [optional] 
**traffic_manager_profile_id** | **str** | ARM resource ID of the Traffic Manager profile to use, if it exists. Traffic Manager resource ID is of the form  /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{profileName}. | [optional] 
**traffic_manager_profile_name** | **str** | Name of Traffic Manager profile to create. This is only needed if Traffic Manager profile does not already exist. | [optional] 

## Example

```python
from openapi_client.models.web_apps_list200_response_value_inner_properties_cloning_info import WebAppsList200ResponseValueInnerPropertiesCloningInfo

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsList200ResponseValueInnerPropertiesCloningInfo from a JSON string
web_apps_list200_response_value_inner_properties_cloning_info_instance = WebAppsList200ResponseValueInnerPropertiesCloningInfo.from_json(json)
# print the JSON string representation of the object
print(WebAppsList200ResponseValueInnerPropertiesCloningInfo.to_json())

# convert the object into a dict
web_apps_list200_response_value_inner_properties_cloning_info_dict = web_apps_list200_response_value_inner_properties_cloning_info_instance.to_dict()
# create an instance of WebAppsList200ResponseValueInnerPropertiesCloningInfo from a dict
web_apps_list200_response_value_inner_properties_cloning_info_from_dict = WebAppsList200ResponseValueInnerPropertiesCloningInfo.from_dict(web_apps_list200_response_value_inner_properties_cloning_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


