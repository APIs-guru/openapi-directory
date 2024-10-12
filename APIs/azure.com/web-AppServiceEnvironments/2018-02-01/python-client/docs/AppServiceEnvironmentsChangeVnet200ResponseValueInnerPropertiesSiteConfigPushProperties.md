# AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigPushProperties

PushSettings resource specific properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_tags_json** | **str** | Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint. | [optional] 
**is_push_enabled** | **bool** | Gets or sets a flag indicating whether the Push endpoint is enabled. | 
**tag_whitelist_json** | **str** | Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint. | [optional] 
**tags_requiring_auth** | **str** | Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint. Tags can consist of alphanumeric characters and the following: &#39;_&#39;, &#39;@&#39;, &#39;#&#39;, &#39;.&#39;, &#39;:&#39;, &#39;-&#39;.  Validation should be performed at the PushRequestHandler. | [optional] 

## Example

```python
from openapi_client.models.app_service_environments_change_vnet200_response_value_inner_properties_site_config_push_properties import AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigPushProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigPushProperties from a JSON string
app_service_environments_change_vnet200_response_value_inner_properties_site_config_push_properties_instance = AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigPushProperties.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigPushProperties.to_json())

# convert the object into a dict
app_service_environments_change_vnet200_response_value_inner_properties_site_config_push_properties_dict = app_service_environments_change_vnet200_response_value_inner_properties_site_config_push_properties_instance.to_dict()
# create an instance of AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigPushProperties from a dict
app_service_environments_change_vnet200_response_value_inner_properties_site_config_push_properties_from_dict = AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigPushProperties.from_dict(app_service_environments_change_vnet200_response_value_inner_properties_site_config_push_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


