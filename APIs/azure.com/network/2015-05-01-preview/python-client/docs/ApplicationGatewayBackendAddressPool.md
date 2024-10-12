# ApplicationGatewayBackendAddressPool

Backend Address Pool of application gateway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated | [optional] 
**name** | **str** | Gets name of the resource that is unique within a resource group. This name can be used to access the resource | [optional] 
**properties** | [**ApplicationGatewayBackendAddressPoolPropertiesFormat**](ApplicationGatewayBackendAddressPoolPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_address_pool import ApplicationGatewayBackendAddressPool

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendAddressPool from a JSON string
application_gateway_backend_address_pool_instance = ApplicationGatewayBackendAddressPool.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendAddressPool.to_json())

# convert the object into a dict
application_gateway_backend_address_pool_dict = application_gateway_backend_address_pool_instance.to_dict()
# create an instance of ApplicationGatewayBackendAddressPool from a dict
application_gateway_backend_address_pool_from_dict = ApplicationGatewayBackendAddressPool.from_dict(application_gateway_backend_address_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


