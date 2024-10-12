# ApplicationGatewayFrontendPortPropertiesFormat

Properties of Frontend Port of application gateway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**port** | **int** | Gets or sets the frontend port | [optional] 
**provisioning_state** | **str** | Gets or sets Provisioning state of the frontend port resource Updating/Deleting/Failed | [optional] 

## Example

```python
from openapi_client.models.application_gateway_frontend_port_properties_format import ApplicationGatewayFrontendPortPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayFrontendPortPropertiesFormat from a JSON string
application_gateway_frontend_port_properties_format_instance = ApplicationGatewayFrontendPortPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayFrontendPortPropertiesFormat.to_json())

# convert the object into a dict
application_gateway_frontend_port_properties_format_dict = application_gateway_frontend_port_properties_format_instance.to_dict()
# create an instance of ApplicationGatewayFrontendPortPropertiesFormat from a dict
application_gateway_frontend_port_properties_format_from_dict = ApplicationGatewayFrontendPortPropertiesFormat.from_dict(application_gateway_frontend_port_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


