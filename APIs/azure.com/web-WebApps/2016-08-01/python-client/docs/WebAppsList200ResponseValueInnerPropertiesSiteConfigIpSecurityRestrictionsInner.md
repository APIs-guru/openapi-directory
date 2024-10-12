# WebAppsList200ResponseValueInnerPropertiesSiteConfigIpSecurityRestrictionsInner

IP security restriction on an app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address** | **str** | IP address the security restriction is valid for. | 
**subnet_mask** | **str** | Subnet mask for the range of IP addresses the restriction is valid for. | [optional] 

## Example

```python
from openapi_client.models.web_apps_list200_response_value_inner_properties_site_config_ip_security_restrictions_inner import WebAppsList200ResponseValueInnerPropertiesSiteConfigIpSecurityRestrictionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsList200ResponseValueInnerPropertiesSiteConfigIpSecurityRestrictionsInner from a JSON string
web_apps_list200_response_value_inner_properties_site_config_ip_security_restrictions_inner_instance = WebAppsList200ResponseValueInnerPropertiesSiteConfigIpSecurityRestrictionsInner.from_json(json)
# print the JSON string representation of the object
print(WebAppsList200ResponseValueInnerPropertiesSiteConfigIpSecurityRestrictionsInner.to_json())

# convert the object into a dict
web_apps_list200_response_value_inner_properties_site_config_ip_security_restrictions_inner_dict = web_apps_list200_response_value_inner_properties_site_config_ip_security_restrictions_inner_instance.to_dict()
# create an instance of WebAppsList200ResponseValueInnerPropertiesSiteConfigIpSecurityRestrictionsInner from a dict
web_apps_list200_response_value_inner_properties_site_config_ip_security_restrictions_inner_from_dict = WebAppsList200ResponseValueInnerPropertiesSiteConfigIpSecurityRestrictionsInner.from_dict(web_apps_list200_response_value_inner_properties_site_config_ip_security_restrictions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


