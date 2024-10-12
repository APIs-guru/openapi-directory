# ApplicationGatewayFrontendIPConfigurationPropertiesFormat

Properties of Frontend IP configuration of an application gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**private_ip_address** | **str** | PrivateIPAddress of the network interface IP Configuration. | [optional] 
**private_ip_allocation_method** | **str** | PrivateIP allocation method. | [optional] 
**provisioning_state** | **str** | Provisioning state of the public IP resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 
**public_ip_address** | [**Model0**](Model0.md) |  | [optional] 
**subnet** | [**Model0**](Model0.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_frontend_ip_configuration_properties_format import ApplicationGatewayFrontendIPConfigurationPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayFrontendIPConfigurationPropertiesFormat from a JSON string
application_gateway_frontend_ip_configuration_properties_format_instance = ApplicationGatewayFrontendIPConfigurationPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayFrontendIPConfigurationPropertiesFormat.to_json())

# convert the object into a dict
application_gateway_frontend_ip_configuration_properties_format_dict = application_gateway_frontend_ip_configuration_properties_format_instance.to_dict()
# create an instance of ApplicationGatewayFrontendIPConfigurationPropertiesFormat from a dict
application_gateway_frontend_ip_configuration_properties_format_from_dict = ApplicationGatewayFrontendIPConfigurationPropertiesFormat.from_dict(application_gateway_frontend_ip_configuration_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


