# LoadBalancingRulePropertiesFormat

Properties of the load balancer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_address_pool** | [**SubResource**](SubResource.md) |  | [optional] 
**backend_port** | **int** | Gets or sets a port used for internal connections on the endpoint. The localPort attribute maps the eternal port of the endpoint to an internal port on a role. This is useful in scenarios where a role must communicate to an internal component on a port that is different from the one that is exposed externally. If not specified, the value of localPort is the same as the port attribute. Set the value of localPort to &#39;*&#39; to automatically assign an unallocated port that is discoverable using the runtime API | [optional] 
**enable_floating_ip** | **bool** | Configures a virtual machine&#39;s endpoint for the floating IP capability required to configure a SQL AlwaysOn availability Group. This setting is required when using the SQL Always ON availability Groups in SQL server. This setting can&#39;t be changed after you create the endpoint | [optional] 
**frontend_ip_configuration** | [**SubResource**](SubResource.md) |  | [optional] 
**frontend_port** | **int** | Gets or sets the port for the external endpoint. You can specify any port number you choose, but the port numbers specified for each role in the service must be unique. Possible values range between 1 and 65535, inclusive | 
**idle_timeout_in_minutes** | **int** | Gets or sets the timeout for the Tcp idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to Tcp | [optional] 
**load_distribution** | **str** | Gets or sets the load distribution policy for this rule | [optional] 
**probe** | [**SubResource**](SubResource.md) |  | [optional] 
**protocol** | **str** | Gets or sets the transport protocol for the external endpoint. Possible values are Udp or Tcp | 
**provisioning_state** | **str** | Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed | [optional] 

## Example

```python
from openapi_client.models.load_balancing_rule_properties_format import LoadBalancingRulePropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of LoadBalancingRulePropertiesFormat from a JSON string
load_balancing_rule_properties_format_instance = LoadBalancingRulePropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(LoadBalancingRulePropertiesFormat.to_json())

# convert the object into a dict
load_balancing_rule_properties_format_dict = load_balancing_rule_properties_format_instance.to_dict()
# create an instance of LoadBalancingRulePropertiesFormat from a dict
load_balancing_rule_properties_format_from_dict = LoadBalancingRulePropertiesFormat.from_dict(load_balancing_rule_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


