# FrontendEndpointUpdateParameters

Frontend endpoint used in routing rule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_name** | **str** | The host name of the frontendEndpoint. Must be a domain name. | [optional] 
**session_affinity_enabled_state** | **str** | Whether to allow session affinity on this host. Valid options are &#39;Enabled&#39; or &#39;Disabled&#39; | [optional] 
**session_affinity_ttl_seconds** | **int** | UNUSED. This field will be ignored. The TTL to use in seconds for session affinity, if applicable. | [optional] 
**web_application_firewall_policy_link** | [**FrontendEndpointUpdateParametersWebApplicationFirewallPolicyLink**](FrontendEndpointUpdateParametersWebApplicationFirewallPolicyLink.md) |  | [optional] 

## Example

```python
from openapi_client.models.frontend_endpoint_update_parameters import FrontendEndpointUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of FrontendEndpointUpdateParameters from a JSON string
frontend_endpoint_update_parameters_instance = FrontendEndpointUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(FrontendEndpointUpdateParameters.to_json())

# convert the object into a dict
frontend_endpoint_update_parameters_dict = frontend_endpoint_update_parameters_instance.to_dict()
# create an instance of FrontendEndpointUpdateParameters from a dict
frontend_endpoint_update_parameters_from_dict = FrontendEndpointUpdateParameters.from_dict(frontend_endpoint_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


