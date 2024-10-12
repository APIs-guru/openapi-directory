# AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigIpSecurityRestrictionsInner

IP security restriction on an app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Allow or Deny access for this IP range. | [optional] 
**description** | **str** | IP restriction rule description. | [optional] 
**ip_address** | **str** | IP address the security restriction is valid for. It can be in form of pure ipv4 address (required SubnetMask property) or CIDR notation such as ipv4/mask (leading bit match). For CIDR, SubnetMask property must not be specified. | [optional] 
**name** | **str** | IP restriction rule name. | [optional] 
**priority** | **int** | Priority of IP restriction rule. | [optional] 
**subnet_mask** | **str** | Subnet mask for the range of IP addresses the restriction is valid for. | [optional] 
**subnet_traffic_tag** | **int** | (internal) Subnet traffic tag | [optional] 
**tag** | **str** | Defines what this IP filter will be used for. This is to support IP filtering on proxies. | [optional] 
**vnet_subnet_resource_id** | **str** | Virtual network resource id | [optional] 
**vnet_traffic_tag** | **int** | (internal) Vnet traffic tag | [optional] 

## Example

```python
from openapi_client.models.app_service_plans_list_web_apps200_response_value_inner_properties_site_config_ip_security_restrictions_inner import AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigIpSecurityRestrictionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigIpSecurityRestrictionsInner from a JSON string
app_service_plans_list_web_apps200_response_value_inner_properties_site_config_ip_security_restrictions_inner_instance = AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigIpSecurityRestrictionsInner.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigIpSecurityRestrictionsInner.to_json())

# convert the object into a dict
app_service_plans_list_web_apps200_response_value_inner_properties_site_config_ip_security_restrictions_inner_dict = app_service_plans_list_web_apps200_response_value_inner_properties_site_config_ip_security_restrictions_inner_instance.to_dict()
# create an instance of AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigIpSecurityRestrictionsInner from a dict
app_service_plans_list_web_apps200_response_value_inner_properties_site_config_ip_security_restrictions_inner_from_dict = AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigIpSecurityRestrictionsInner.from_dict(app_service_plans_list_web_apps200_response_value_inner_properties_site_config_ip_security_restrictions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


