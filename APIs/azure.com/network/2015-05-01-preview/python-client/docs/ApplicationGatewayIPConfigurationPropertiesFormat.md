# ApplicationGatewayIPConfigurationPropertiesFormat

Properties of IP configuration of application gateway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | Gets or sets Provisioning state of the application gateway subnet resource Updating/Deleting/Failed | [optional] 
**subnet** | [**SubResource**](SubResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_ip_configuration_properties_format import ApplicationGatewayIPConfigurationPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayIPConfigurationPropertiesFormat from a JSON string
application_gateway_ip_configuration_properties_format_instance = ApplicationGatewayIPConfigurationPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayIPConfigurationPropertiesFormat.to_json())

# convert the object into a dict
application_gateway_ip_configuration_properties_format_dict = application_gateway_ip_configuration_properties_format_instance.to_dict()
# create an instance of ApplicationGatewayIPConfigurationPropertiesFormat from a dict
application_gateway_ip_configuration_properties_format_from_dict = ApplicationGatewayIPConfigurationPropertiesFormat.from_dict(application_gateway_ip_configuration_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


