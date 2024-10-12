# EndpointPropertiesUpdateParametersWebApplicationFirewallPolicyLink

Defines the Web Application Firewall policy for the endpoint (if applicable)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.endpoint_properties_update_parameters_web_application_firewall_policy_link import EndpointPropertiesUpdateParametersWebApplicationFirewallPolicyLink

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPropertiesUpdateParametersWebApplicationFirewallPolicyLink from a JSON string
endpoint_properties_update_parameters_web_application_firewall_policy_link_instance = EndpointPropertiesUpdateParametersWebApplicationFirewallPolicyLink.from_json(json)
# print the JSON string representation of the object
print(EndpointPropertiesUpdateParametersWebApplicationFirewallPolicyLink.to_json())

# convert the object into a dict
endpoint_properties_update_parameters_web_application_firewall_policy_link_dict = endpoint_properties_update_parameters_web_application_firewall_policy_link_instance.to_dict()
# create an instance of EndpointPropertiesUpdateParametersWebApplicationFirewallPolicyLink from a dict
endpoint_properties_update_parameters_web_application_firewall_policy_link_from_dict = EndpointPropertiesUpdateParametersWebApplicationFirewallPolicyLink.from_dict(endpoint_properties_update_parameters_web_application_firewall_policy_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


