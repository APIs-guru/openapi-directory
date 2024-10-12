# AppServiceEnvironmentsResume200ResponseValueInnerPropertiesSiteConfigIpSecurityRestrictionsInner

IP security restriction on an app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address** | **str** | IP address the security restriction is valid for. | 
**subnet_mask** | **str** | Subnet mask for the range of IP addresses the restriction is valid for. | [optional] 

## Example

```python
from openapi_client.models.app_service_environments_resume200_response_value_inner_properties_site_config_ip_security_restrictions_inner import AppServiceEnvironmentsResume200ResponseValueInnerPropertiesSiteConfigIpSecurityRestrictionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentsResume200ResponseValueInnerPropertiesSiteConfigIpSecurityRestrictionsInner from a JSON string
app_service_environments_resume200_response_value_inner_properties_site_config_ip_security_restrictions_inner_instance = AppServiceEnvironmentsResume200ResponseValueInnerPropertiesSiteConfigIpSecurityRestrictionsInner.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentsResume200ResponseValueInnerPropertiesSiteConfigIpSecurityRestrictionsInner.to_json())

# convert the object into a dict
app_service_environments_resume200_response_value_inner_properties_site_config_ip_security_restrictions_inner_dict = app_service_environments_resume200_response_value_inner_properties_site_config_ip_security_restrictions_inner_instance.to_dict()
# create an instance of AppServiceEnvironmentsResume200ResponseValueInnerPropertiesSiteConfigIpSecurityRestrictionsInner from a dict
app_service_environments_resume200_response_value_inner_properties_site_config_ip_security_restrictions_inner_from_dict = AppServiceEnvironmentsResume200ResponseValueInnerPropertiesSiteConfigIpSecurityRestrictionsInner.from_dict(app_service_environments_resume200_response_value_inner_properties_site_config_ip_security_restrictions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


