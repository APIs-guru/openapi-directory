# ApplicationGatewayBackendAddress

Backend Address of application gateway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fqdn** | **str** | Gets or sets the dns name | [optional] 
**ip_address** | **str** | Gets or sets the ip address | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_address import ApplicationGatewayBackendAddress

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendAddress from a JSON string
application_gateway_backend_address_instance = ApplicationGatewayBackendAddress.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendAddress.to_json())

# convert the object into a dict
application_gateway_backend_address_dict = application_gateway_backend_address_instance.to_dict()
# create an instance of ApplicationGatewayBackendAddress from a dict
application_gateway_backend_address_from_dict = ApplicationGatewayBackendAddress.from_dict(application_gateway_backend_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


