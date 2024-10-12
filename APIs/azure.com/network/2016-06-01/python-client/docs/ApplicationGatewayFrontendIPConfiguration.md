# ApplicationGatewayFrontendIPConfiguration

Frontend IP configuration of application gateway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated | [optional] 
**name** | **str** | Name of the resource that is unique within a resource group. This name can be used to access the resource | [optional] 
**properties** | [**ApplicationGatewayFrontendIPConfigurationPropertiesFormat**](ApplicationGatewayFrontendIPConfigurationPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.application_gateway_frontend_ip_configuration import ApplicationGatewayFrontendIPConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayFrontendIPConfiguration from a JSON string
application_gateway_frontend_ip_configuration_instance = ApplicationGatewayFrontendIPConfiguration.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayFrontendIPConfiguration.to_json())

# convert the object into a dict
application_gateway_frontend_ip_configuration_dict = application_gateway_frontend_ip_configuration_instance.to_dict()
# create an instance of ApplicationGatewayFrontendIPConfiguration from a dict
application_gateway_frontend_ip_configuration_from_dict = ApplicationGatewayFrontendIPConfiguration.from_dict(application_gateway_frontend_ip_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


