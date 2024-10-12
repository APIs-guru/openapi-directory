# ApplicationGatewayFrontendPort

Frontend Port of application gateway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated | [optional] 
**name** | **str** | Name of the resource that is unique within a resource group. This name can be used to access the resource | [optional] 
**properties** | [**ApplicationGatewayFrontendPortPropertiesFormat**](ApplicationGatewayFrontendPortPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.application_gateway_frontend_port import ApplicationGatewayFrontendPort

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayFrontendPort from a JSON string
application_gateway_frontend_port_instance = ApplicationGatewayFrontendPort.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayFrontendPort.to_json())

# convert the object into a dict
application_gateway_frontend_port_dict = application_gateway_frontend_port_instance.to_dict()
# create an instance of ApplicationGatewayFrontendPort from a dict
application_gateway_frontend_port_from_dict = ApplicationGatewayFrontendPort.from_dict(application_gateway_frontend_port_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


