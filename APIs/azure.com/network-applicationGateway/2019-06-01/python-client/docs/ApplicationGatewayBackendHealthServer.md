# ApplicationGatewayBackendHealthServer

Application gateway backendhealth http settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | IP address or FQDN of backend server. | [optional] 
**health** | **str** | Health of backend server. | [optional] 
**health_probe_log** | **str** | Health Probe Log. | [optional] 
**ip_configuration** | [**ApplicationGatewayBackendHealthServerIpConfiguration**](ApplicationGatewayBackendHealthServerIpConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server import ApplicationGatewayBackendHealthServer

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServer from a JSON string
application_gateway_backend_health_server_instance = ApplicationGatewayBackendHealthServer.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServer.to_json())

# convert the object into a dict
application_gateway_backend_health_server_dict = application_gateway_backend_health_server_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServer from a dict
application_gateway_backend_health_server_from_dict = ApplicationGatewayBackendHealthServer.from_dict(application_gateway_backend_health_server_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


