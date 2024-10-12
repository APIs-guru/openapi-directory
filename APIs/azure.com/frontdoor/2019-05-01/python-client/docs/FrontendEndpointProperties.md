# FrontendEndpointProperties

The JSON object that contains the properties required to create a frontend endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_https_configuration** | [**CustomHttpsConfiguration**](CustomHttpsConfiguration.md) |  | [optional] 
**custom_https_provisioning_state** | **str** | Provisioning status of Custom Https of the frontendEndpoint. | [optional] [readonly] 
**custom_https_provisioning_substate** | **str** | Provisioning substate shows the progress of custom HTTPS enabling/disabling process step by step. | [optional] [readonly] 
**resource_state** | [**ResourceState**](ResourceState.md) |  | [optional] 
**host_name** | **str** | The host name of the frontendEndpoint. Must be a domain name. | [optional] 
**session_affinity_enabled_state** | **str** | Whether to allow session affinity on this host. Valid options are &#39;Enabled&#39; or &#39;Disabled&#39; | [optional] 
**session_affinity_ttl_seconds** | **int** | UNUSED. This field will be ignored. The TTL to use in seconds for session affinity, if applicable. | [optional] 
**web_application_firewall_policy_link** | [**FrontendEndpointUpdateParametersWebApplicationFirewallPolicyLink**](FrontendEndpointUpdateParametersWebApplicationFirewallPolicyLink.md) |  | [optional] 

## Example

```python
from openapi_client.models.frontend_endpoint_properties import FrontendEndpointProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FrontendEndpointProperties from a JSON string
frontend_endpoint_properties_instance = FrontendEndpointProperties.from_json(json)
# print the JSON string representation of the object
print(FrontendEndpointProperties.to_json())

# convert the object into a dict
frontend_endpoint_properties_dict = frontend_endpoint_properties_instance.to_dict()
# create an instance of FrontendEndpointProperties from a dict
frontend_endpoint_properties_from_dict = FrontendEndpointProperties.from_dict(frontend_endpoint_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


