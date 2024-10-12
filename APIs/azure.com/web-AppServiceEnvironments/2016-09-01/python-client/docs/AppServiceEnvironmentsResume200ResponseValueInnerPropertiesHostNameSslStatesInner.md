# AppServiceEnvironmentsResume200ResponseValueInnerPropertiesHostNameSslStatesInner

SSL-enabled hostname.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_type** | **str** | Indicates whether the hostname is a standard or repository hostname. | [optional] 
**name** | **str** | Hostname. | [optional] 
**ssl_state** | **str** | SSL type. | [optional] 
**thumbprint** | **str** | SSL certificate thumbprint. | [optional] 
**to_update** | **bool** | Set to &lt;code&gt;true&lt;/code&gt; to update existing hostname. | [optional] 
**virtual_ip** | **str** | Virtual IP address assigned to the hostname if IP based SSL is enabled. | [optional] 

## Example

```python
from openapi_client.models.app_service_environments_resume200_response_value_inner_properties_host_name_ssl_states_inner import AppServiceEnvironmentsResume200ResponseValueInnerPropertiesHostNameSslStatesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentsResume200ResponseValueInnerPropertiesHostNameSslStatesInner from a JSON string
app_service_environments_resume200_response_value_inner_properties_host_name_ssl_states_inner_instance = AppServiceEnvironmentsResume200ResponseValueInnerPropertiesHostNameSslStatesInner.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentsResume200ResponseValueInnerPropertiesHostNameSslStatesInner.to_json())

# convert the object into a dict
app_service_environments_resume200_response_value_inner_properties_host_name_ssl_states_inner_dict = app_service_environments_resume200_response_value_inner_properties_host_name_ssl_states_inner_instance.to_dict()
# create an instance of AppServiceEnvironmentsResume200ResponseValueInnerPropertiesHostNameSslStatesInner from a dict
app_service_environments_resume200_response_value_inner_properties_host_name_ssl_states_inner_from_dict = AppServiceEnvironmentsResume200ResponseValueInnerPropertiesHostNameSslStatesInner.from_dict(app_service_environments_resume200_response_value_inner_properties_host_name_ssl_states_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


